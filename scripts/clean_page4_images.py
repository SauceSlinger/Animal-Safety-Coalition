#!/usr/bin/env python3
"""Create text-free optimized copies of Page4Column images.

This script crops a small bottom band (where the text is) and saves cleaned
PNG and WebP versions into `assets/optimized/`. Originals in `Resources/` are
left untouched.
"""
from PIL import Image
import os

BASE = os.path.dirname(os.path.dirname(__file__))
RES = os.path.join(BASE, 'Resources')
OUT = os.path.join(BASE, 'assets', 'optimized')
os.makedirs(OUT, exist_ok=True)

FILES = ['Page4Column1.png', 'Page4Column2.png', 'Page4Column3.png']

def clean_image(filename, crop_frac=0.18):
    src = os.path.join(RES, filename)
    if not os.path.exists(src):
        print('Missing', src)
        return
    img = Image.open(src).convert('RGBA')
    w, h = img.size
    # crop from the top down to remove baked-in header text at the top
    top = int(h * crop_frac)
    cropped = img.crop((0, top, w, h))

    base_name = os.path.splitext(filename)[0]
    out_png = os.path.join(OUT, f"{base_name}_clean.png")
    out_webp = os.path.join(OUT, f"{base_name}_clean.webp")

    cropped.save(out_png, optimize=True)
    # save webp for better compression if Pillow supports it
    try:
        cropped.save(out_webp, 'WEBP', quality=80)
    except Exception as e:
        print('WebP save failed:', e)

    print('Wrote', out_png, out_webp)

if __name__ == '__main__':
    import sys
    # allow optional crop fraction from command line (e.g. 0.36)
    frac = 0.18
    if len(sys.argv) > 1:
        try:
            frac = float(sys.argv[1])
        except Exception:
            print('Invalid crop fraction provided, using default 0.18')
    for f in FILES:
        clean_image(f, crop_frac=frac)
