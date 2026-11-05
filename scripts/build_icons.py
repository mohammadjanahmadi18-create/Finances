#!/usr/bin/env python3
"""Build verified, correctly sized PWA icons from our vector logo.

GitHub Pages runs this before uploading the site so browsers always receive
real PNG icon images, not shortcuts to a missing/incorrect resource.
"""
from pathlib import Path
import struct
import cairosvg

ROOT = Path(__file__).resolve().parents[1]
ICONS = ROOT / "icons"

SPECS = (
    ("icon.svg", "icon-192.png", 192),
    ("icon.svg", "icon-512.png", 512),
    ("icon-maskable.svg", "icon-512-maskable.png", 512),
    ("icon.svg", "liberty-192.png", 192),
    ("icon.svg", "liberty-512.png", 512),
    ("icon-maskable.svg", "liberty-512-maskable.png", 512),
)

def build():
    for source, target, size in SPECS:
        output = ICONS / target
        cairosvg.svg2png(
            url=str(ICONS / source),
            write_to=str(output),
            output_width=size,
            output_height=size,
        )
        data = output.read_bytes()
        if data[:8] != b"\x89PNG\r\n\x1a\n":
            raise RuntimeError(f"{target} was not written as PNG")
        width, height = struct.unpack(">II", data[16:24])
        if (width, height) != (size, size):
            raise RuntimeError(f"{target} has size {width}x{height}, expected {size}")
        print(f"Ready: {target} ({width}x{height}, {len(data)} bytes)")

if __name__ == "__main__":
    build()
