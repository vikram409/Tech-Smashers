// server/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // npm install node-fetch@2
const { OpenAI } = require('openai');
const twilio = require('twilio');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Twilio client (optional)
let twilioClient = null;
if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
  twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
}

// Simple in-memory store
let latestLocation = null;

app.get('/', (req, res) => res.send('SOS BACKEND RUNNING ✔'));

// Receive location updates from frontend
app.post('/track', (req, res) => {
  const payload = req.body;
  console.log('📍 Received location update:', new Date().toISOString(), payload);
  latestLocation = payload;
  res.json({ status: 'ok' });
});

// Send emergency alert (SMS + WhatsApp via Twilio). Requires Twilio env vars.
app.post('/send-alert', async (req, res) => {
  try {
    const { passphrase, name, lat, lng, note } = req.body;
    const placeUrl = lat && lng ? `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=18/${lat}/${lng}` : '';
    const text = `EMERGENCY ALERT\nPassphrase: ${passphrase}\n${name ? `Name: ${name}\n` : ''}${note ? `Note: ${note}\n` : ''}${placeUrl}`;

    // Send SMS (if you have a Twilio SMS-enabled number, set TWILIO_SMS_FROM)
    if (twilioClient && process.env.ALERT_PHONE && process.env.TWILIO_SMS_FROM) {
      try {
        await twilioClient.messages.create({
          to: process.env.ALERT_PHONE,
          from: process.env.TWILIO_SMS_FROM,
          body: text
        });
        console.log('SMS sent');
      } catch (e) {
        console.warn('SMS send error (maybe not configured):', e.message);
      }
    }

    // Send WhatsApp (Twilio sandbox/WhatsApp number required)
    if (twilioClient && process.env.TWILIO_WHATSAPP_FROM && process.env.ALERT_PHONE) {
      try {
        await twilioClient.messages.create({
          to: `whatsapp:${process.env.ALERT_PHONE.replace('+','')}`,
          from: process.env.TWILIO_WHATSAPP_FROM,
          body: text
        });
        console.log('WhatsApp sent');
      } catch (e) {
        console.warn('WhatsApp send error:', e.message);
      }
    }

    res.json({ status: 'alert_sent' });
  } catch (err) {
    console.error('Error sending alert', err);
    res.status(500).json({ error: err.message });
  }
});

// AI Chat endpoint — uses OpenAI chat completions
app.post('/ai-chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) return res.status(400).json({ error: 'message required' });

    const messages = [
      { role: 'system', content: 'You are a calm and concise safety assistant. Provide short guidance, ask if the user is safe, and suggest next steps.' },
      ...(Array.isArray(history) ? history : []),
      { role: 'user', content: message }
    ];

    // NOTE: model name may need to be changed depending on your OpenAI access.
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini', // change if unavailable
      messages,
      max_tokens: 512
    });

    const assistantMsg = completion.choices?.[0]?.message?.content || 'Sorry, no reply.';
    res.json({ reply: assistantMsg });
  } catch (err) {
    console.error('AI chat error', err);
    res.status(500).json({ error: err.message || String(err) });
  }
});

// Overpass proxy to find nearby police stations
app.get('/nearby-police', async (req, res) => {
  try {
    const lat = parseFloat(req.query.lat);
    const lon = parseFloat(req.query.lon);
    const radius = parseInt(req.query.radius || '2000', 10);
    if (!lat || !lon) return res.status(400).json({ error: 'lat & lon required' });

    const query = `
      [out:json][timeout:25];
      (
        node["amenity"="police"](around:${radius},${lat},${lon});
        way["amenity"="police"](around:${radius},${lat},${lon});
        relation["amenity"="police"](around:${radius},${lat},${lon});
      );
      out center 20;
    `;

    const overpassRes = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: query
    });
    const json = await overpassRes.json();
    res.json(json);
  } catch (err) {
    console.error('Overpass error', err);
    res.status(500).json({ error: err.message || String(err) });
  }
});

app.listen(PORT, () => console.log(`🚀 Server listening on http://localhost:${PORT}`));