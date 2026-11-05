# DOM Project 1 — Shopping Cart

A fully functional shopping cart built with **HTML, CSS and vanilla JavaScript** (no libraries or frameworks).

## Features

- **Adjust quantities** with the `+` and `−` buttons on each item. Quantity never drops below 1.
- **Delete items** with the trash button. The item animates out and the cart recalculates automatically.
- **Like items** with the heart button. It fills red while liked and toggles back to an outline when clicked again.
- **Live totals** — each line total and the grand total update on every quantity change or deletion.
- **Empty state** when every item has been removed, with a button to restore the demo items.
- Responsive layout, keyboard-accessible buttons, ARIA labels, `aria-pressed` on the like buttons and a polite live region for the total.

## Files

```
DOM Project 1/
├── index.html        # Cart markup (3 preselected products)
├── style.css         # Layout, colours, animations and responsive rules
├── script.js         # All DOM logic and event listeners
└── images/           # Self-contained SVG product artwork
    ├── sneakers.svg
    ├── backpack.svg
    └── headphones.svg
```

## Run it

Open `index.html` in any browser. No installation or build step is needed.

If you prefer a local server:

```bash
cd "DOM Project 1"
python3 -m http.server 8000
# then open http://localhost:8000
```

## How it works

`script.js` uses a single **event-delegation listener** on the `#cart-items` list. Any click on a button is matched with `closest()` against `.plus`, `.minus`, `.like-btn` or `.delete-btn`, so the feature keeps working for every item without re-binding listeners.

Prices are stored in each item's `data-price` attribute, while quantities live in the DOM, making it easy to add, remove or change products directly in the HTML. `updateCart()` recalculates all line totals, the number of units, the grand total and the empty state in one place.
