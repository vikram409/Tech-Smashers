# Tech-Smashers
road quality index with safety
Phase 1 – Automatic Road Damage Detection

Phase 1 focuses on developing an AI system that automatically detects potholes, cracks, and missing lane markings from images submitted by vehicles or crowdsourced users. The aim is to speed up road inspection, reduce manual work, and help authorities fix damages faster. Using a trained YOLOv11s model, each uploaded road image is analyzed and labeled with the type of defect found. The system highlights the damage with bounding boxes and confidence scores, making it easy to understand what issues are present.

After detection, the system assigns a priority level based on the severity and size of the damage. High-priority issues—such as deep potholes or completely faded lane markings—are flagged immediately because they pose more risk. Medium and low priorities represent moderate or minor issues. These results are automatically converted into structured reports that include the image, defect type, and priority score. Authorities can then view these reports and decide which areas to repair first.

Benefits

Helps authorities identify dangerous road defects quickly

Reduces manual inspection time and field surveys

Minimizes accidents by highlighting high-risk areas early

Encourages public participation through crowdsourced reporting

Improves overall road quality and maintenance planning

Creates a reliable and continuous monitoring system
