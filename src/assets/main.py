from PIL import Image
import os
from tqdm import tqdm

def normalize_image(input_path, output_path, max_size=(500, 500)):
    with Image.open(input_path) as img:
        # 計算新的尺寸以保持長寬比
        img.thumbnail(max_size, Image.LANCZOS)
        # 儲存圖片
        img.save(output_path, format='JPEG', dpi=(300, 300))

def process_directory(directory):
    output_directory = os.path.join(directory, 'normalized')
    os.makedirs(output_directory, exist_ok=True)

    image_files = [f for f in os.listdir(directory) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.tif', '.tiff'))]
    
    for filename in tqdm(image_files, desc=f"Processing {directory}"):
        input_path = os.path.join(directory, filename)
        output_path = os.path.join(output_directory, os.path.splitext(filename)[0] + '.jpg')
        normalize_image(input_path, output_path)

if __name__ == "__main__":
    process_directory('./flat')
    process_directory('./solid')