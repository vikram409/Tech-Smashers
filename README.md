# Tech-Smashers
road quality index with safety
Phase 1 – Automatic Road Damage Detection

Phase 1 focuses on creating an AI system that automatically detects potholes, road cracks, and missing lane markings from images collected through vehicles and crowdsourced users. The main goal is to help authorities quickly identify damaged road sections and take action based on priority.

The system uses computer vision techniques and a trained YOLOvlls model to analyze each incoming image. When a user or a vehicle uploads a road image, the model scans it and identifies the type of road defect present. It highlights the potholes, cracks, or missing lane markings with bounding boxes and confidence scores.

After detection, the system assigns a priority level based on the severity and size of the damage. High-priority issues include large potholes or completely missing lane markings that may cause accidents. Medium and low priorities are assigned to moderate or minor defects.

The processed results are then forwarded as structured reports containing the image, type of defect, and priority score. These reports help government authorities or road maintenance teams understand which areas require immediate attention.
