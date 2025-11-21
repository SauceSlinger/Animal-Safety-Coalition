#!/usr/bin/env python3
from PIL import Image
import os

BASE = os.path.join(os.path.dirname(__file__), '..')
RESOURCES = os.path.join(BASE, 'Resources')
OUT = os.path.join(BASE, 'assets', 'optimized')
os.makedirs(OUT, exist_ok=True)

files = [
    ('Page4Column1.png', 'Page4Column1_cropped.png'),
    ('Page4Column2.png', 'Page4Column2_cropped.png'),
    ('Page4Column3.png', 'Page4Column3_cropped.png'),
]

for src, dst in files:
    path = os.path.join(RESOURCES, src)
    if not os.path.exists(path):
        print(f"Missing {path}")
        continue
    img = Image.open(path)
    w, h = img.size
    new_h = int(h * 0.75)
    box = (0, 0, w, new_h)
    cropped = img.crop(box)
    out_path = os.path.join(OUT, dst)
    cropped.save(out_path)
    print(f"Saved {out_path} ({w}x{new_h})")
