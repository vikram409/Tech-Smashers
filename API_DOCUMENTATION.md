# API Documentation

This document describes the main API endpoints used across all phases of the SafeJourney system.

---

## 1. Image Upload API (Phase 1 – Road Damage Detection)
**POST** `/api/detect`
### Description
Uploads an image and returns detected potholes, cracks, and missing lane markings.

### Request
- `image` (file)
- Optional: `latitude`, `longitude`

### Response
```json
{
  "status": "success",
  "detections": [
    { "type": "pothole", "confidence": 0.92 },
    { "type": "crack", "confidence": 0.87 }
  ],
  "priority_score": 8.5
}
