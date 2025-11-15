# Project Structure

This document explains the folder and file structure of the SafeJourney project.  
Each phase of the project is organized clearly to help contributors and team members understand where code, models, and documentation are located.

# Project Structure

```
SafeJourney/
│
├── Phase-1-RoadDamageDetection/
│   ├── models/                 # YOLO model weights
│   ├── notebooks/              # Colab training & inference notebooks
│   ├── src/                    # Detection scripts (Python/ml/cv)
│   ├── datasets/               # Sample training data
│
├── Phase-2-WomenSafety-SOS/
│   ├── api/                    # SOS API handlers
│   ├── tracking/               # Location tracking scripts
│   ├── notifications/          # SMS + alert handling
│
├── Phase-3-SafeRouteRecommendation/
│   ├── maps/                   # Leaflet.js + OSM integration
│   ├── scoring/                # Safety score calculation logic
│   ├── routes/                 # Fastest vs Safest route generation
│
├── Phase-4-DeepfakeVerification/
│   ├── models/                 # Deepfake detection models
│   ├── preprocessing/          # Face/ID extraction scripts
│   ├── verification/           # Deepfake analysis
│
├── docs/
│   ├── API_DOCUMENTATION.md
│   ├── CHANGELOG.md
│   ├── CONTRIBUTING.md
│   ├── PROJECT_STRUCTURE.md    # (this file)
│
├── LICENSE
└── README.md                   # Main project overview
```

## Description of Main Folders

### **Phase-1-RoadDamageDetection**
Includes YOLO-based detection models and scripts for identifying potholes, cracks, and missing lane markings.

### **Phase-2-WomenSafety-SOS**
Contains API logic, tracking modules, and emergency alert systems for SOS Mode.

### **Phase-3-SafeRouteRecommendation**
Handles map rendering, scoring system, and safest route calculation using OpenStreetMap and Leaflet.js.

### **Phase-4-DeepfakeVerification**
Includes deepfake detection logic and pipelines for analyzing driver faces and IDs.

### **docs/**
Stores all documentation files like contributing guide, changelog, project structure, and API docs.

---

## Purpose of This Structure
- Keeps each phase independent and well-organized  
- Helps new contributors understand the project quickly  
- Makes debugging, updating, and scaling easier  
- Ensures clean separation of datasets, models, and code  

---

