# Tech-Smashers
road quality index with safety(Squareroots.ai)

Problem Statement
The Safe Journey System is an integrated AI solution designed to ensure safer travel using real-time monitoring, road-quality insights, women safety features, safe route navigation, and deepfake-based driver verification. Built for hackathons and real-world deployment, this project combines computer vision, geospatial analysis, and AI-driven decision-making.

Phase 1 – Road Quality Intelligence (RQI)

This module analyzes road conditions to detect potholes, cracks, faded lane markings, and hazards using YOLO-based computer vision. Detected issues are automatically mapped to their GPS location and reported to authorities through a cloud dashboard. This ensures meaningful civic action and improves overall transportation safety.

Phase 2 – Women Safety & SOS Monitoring

Women can trigger SOS Mode through a button or voice command. The app sends the user’s live location every 10 seconds to police/guardian dashboards via API. An AI-assisted call monitors the user until she reaches a safe location. Tracking can only be stopped by identity verification to prevent misuse. Emergency SMS alerts are sent to registered contacts through Twilio/Firebase.

Phase 3 – Safe Route Recommendation

Traditional navigation systems focus on shortest or fastest routes, but not safety. Our system calculates a Safety Score for every road based on potholes, lighting, hazards, and crime-zone data. Using OpenStreetMap + Leaflet.js, the application displays two routes:

Fastest Route (Red)

Safest Route (Green)
This helps users make safer travel decisions.

Phase 4 – Deepfake Driver & Vehicle Verification(Squareroots.ai)

Before entering a cab or ride, users can scan the driver’s face or ID card. A deepfake detection model analyzes facial patterns to verify authenticity and detect manipulated images. This prevents fake driver identity fraud and enhances passenger safety.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Phase 1 – Automatic Road Damage Detection(Squareroots.ai)

Phase 1 focuses on developing an AI system that automatically detects potholes, cracks, and missing lane markings from images submitted by vehicles or crowdsourced users. The aim is to speed up road inspection, reduce manual work, and help authorities fix damages faster. Using a trained YOLOv11s model, each uploaded road image is analyzed and labeled with the type of defect found. The system highlights the damage with bounding boxes and confidence scores, making it easy to understand what issues are present.

After detection, the system assigns a priority level based on the severity and size of the damage. High-priority issues—such as deep potholes or completely faded lane markings—are flagged immediately because they pose more risk. Medium and low priorities represent moderate or minor issues. These results are automatically converted into structured reports that include the image, defect type, and priority score. Authorities can then view these reports and decide which areas to repair first.

Benefits

Helps authorities identify dangerous road defects quickly

Reduces manual inspection time and field surveys

Minimizes accidents by highlighting high-risk areas early

Encourages public participation through crowdsourced reporting

Improves overall road quality and maintenance planning

Creates a reliable and continuous monitoring system

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Phase 2 – Women Safety & SOS Monitoring

Phase 2 focuses on providing fast and reliable safety support for women during emergencies. Users can activate SOS Mode through a single button or a voice command whenever they feel unsafe. Once SOS Mode is triggered, the app immediately starts sending the user’s live location every 10 seconds to police or guardian dashboards through a secure API.

An AI-assisted call is also initiated to stay connected with the user and monitor her condition until she reaches a safe place. The system keeps tracking the user continuously, and the SOS mode can only be turned off after an identity verification step. This prevents others from forcefully disabling the safety feature.

In addition to live tracking, the system sends emergency SMS alerts to registered contacts, containing the user’s location and a short emergency message. This ensures that help can arrive even if the user’s internet access is weak or unavailable.

Benefits

Provides quick emergency support with live tracking

Ensures continuous monitoring through AI-assisted calls

Prevents forced shutdown of SOS mode with identity verification

Sends alerts to police, guardians, and emergency contacts

Enhances safety for women traveling alone or at night

Helps authorities respond faster and more accurately

This phase creates a strong, real-time safety mechanism for women in critical situations.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Phase 3 – Safe Route Recommendation

Phase 3 focuses on improving travel safety by recommending routes that are not only fast, but also safe. Unlike traditional navigation apps that prioritize the shortest or quickest paths, this system calculates a Safety Score for every road segment. The score is based on multiple real-world factors such as detected potholes, road cracks, lighting conditions, hazard frequency, and crime-zone data. This ensures that users receive navigation information that prioritizes their safety rather than just speed.

The application uses OpenStreetMap as the mapping source and Leaflet.js for interactive map rendering. After evaluating all routes, the app displays two clear options:

Fastest Route (Red) – The traditional fastest path

Safest Route (Green) – The route with the highest safety rating

By comparing these routes, users can make informed travel decisions based on their personal preferences and safety needs.

Benefits

Helps users choose safer routes during day or night

Avoids accident-prone or poorly maintained roads

Reduces risks for women, students, and solo travelers

Uses real hazard and crime data for accurate scoring

Provides a visual map with color-coded route options

Encourages authorities to maintain frequently marked unsafe areas

This phase makes navigation smarter by combining mobility, safety, and real-time environmental insights.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Phase 4 – Deepfake Driver & Vehicle Verification(Squareroots.ai)

Phase 4 focuses on ensuring safe and trusted travel by verifying the driver’s identity and vehicle authenticity using deepfake detection technology. Before entering a cab or ride, users can simply scan the driver’s face, ID card, or vehicle information through the app. The system then analyzes the input using a trained deepfake detection model that checks for abnormal facial patterns, inconsistencies, or digital manipulation. This helps identify whether the driver is genuine or if the image has been tampered with.

The system uses advanced AI techniques to look for signs of face swapping, morphing, masking, altered lighting patterns, and unrealistic facial movements. If the model detects any suspicious activity, the user receives an instant alert warning them of potential identity fraud. Verified drivers are marked as safe, giving passengers confidence before boarding the vehicle.

Benefits

Prevents fake-driver scams and identity fraud

Protects passengers from impersonation-based crimes

Ensures only verified and trusted drivers are allowed

Increases overall safety for women, students, and solo travelers

Helps authorities track identity-related violations

Builds public trust in the transportation system

This phase adds an essential security layer, making rides safer by ensuring that every driver and vehicle is authentic.
