import os
from PIL import Image
import pillow_avif

input_folder = "/home/ruvais/Downloads/Speakers"
output_folder = "/home/ruvais/Desktop/matcon26/public/speakers"

os.makedirs(output_folder, exist_ok=True)

for file in os.listdir(input_folder):
    if file.lower().endswith(".avif"):
        input_path = os.path.join(input_folder, file)
        output_path = os.path.join(output_folder, file.replace(".avif", ".webp"))
        
        try:
            with Image.open(input_path) as img:
                img = img.convert("RGB")
                img.save(output_path, "WEBP", quality=80)
            
            print(f"Converted: {file}")
        
        except Exception as e:
            print(f"Error with {file}: {e}")