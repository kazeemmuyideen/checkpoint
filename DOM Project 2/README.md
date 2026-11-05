# DOM Project 2 — Interactive Color Changer

A small interactive page where pressing a button paints a box with a randomly generated hexadecimal color.

## What it does

- Shows a heading, a colored box and a **Change Color** button.
- Generates a random hex color such as `#24BC05` with `getRandomColor()`.
- Applies the new color to `#color-box` and displays the matching hex code inside the box.
- Adds a short pop animation on each click (disabled for users who prefer reduced motion).
- Responsive box sizing and a centered, keyboard-accessible layout.

## Files

```
DOM Project 2/
├── index.html    # Container, heading, #color-box and #change-color-btn
├── style.css     # Centered layout, box styling and button styling
├── script.js     # getRandomColor() + click event listener
└── README.md
```

## Run it

Open `index.html` in a browser and click **Change Color**.

Or serve it locally:

```bash
cd "DOM Project 2"
python3 -m http.server 8000
# then open http://localhost:8000
```

## How it works

`script.js` waits for `DOMContentLoaded`, selects the box and button with `document.getElementById()`, and attaches a click listener to the button. On every click, `getRandomColor()` builds a six-digit hex string from the characters `0-9` and `A-F`, and that color is assigned to `colorBox.style.backgroundColor`.
