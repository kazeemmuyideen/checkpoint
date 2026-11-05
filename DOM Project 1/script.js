/* =========================================================
   DOM Project 1 — Shopping Cart
   Vanilla JavaScript + DOM events (no libraries)
   ========================================================= */

const cartItems = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');
const itemCount = document.querySelector('#item-count');
const itemLabel = document.querySelector('#item-label');
const emptyState = document.querySelector('#empty-state');
const checkoutButton = document.querySelector('#checkout-btn');
const cartNote = document.querySelector('#cart-note');
const restoreButton = document.querySelector('#restore-btn');

const formatMoney = (value) => `$${value.toFixed(2)}`;

function getQuantity(item) {
  return Number(item.querySelector('.quantity__value').textContent);
}

function getPrice(item) {
  return Number(item.dataset.price);
}

function getItems() {
  return [...cartItems.querySelectorAll('.cart-item')];
}

/** Update the line total shown on a single cart item. */
function updateLineTotal(item) {
  const lineTotal = getPrice(item) * getQuantity(item);
  item.querySelector('.line-total').textContent = lineTotal.toFixed(2);
  return lineTotal;
}

/**
 * Recalculate the whole cart: line totals, item count, grand total
 * and the empty state.
 */
function updateCart({ animateTotal = false } = {}) {
  const items = getItems();

  const total = items.reduce((sum, item) => sum + updateLineTotal(item), 0);
  const units = items.reduce((sum, item) => sum + getQuantity(item), 0);

  cartTotal.textContent = formatMoney(total);
  itemCount.textContent = units;
  itemLabel.textContent = units === 1 ? 'item' : 'items';

  const isEmpty = items.length === 0;
  cartItems.hidden = isEmpty;
  emptyState.hidden = !isEmpty;
  checkoutButton.disabled = isEmpty;

  if (animateTotal) {
    cartTotal.classList.remove('is-bumped');
    // Force a reflow so the animation can restart on every click.
    void cartTotal.offsetWidth;
    cartTotal.classList.add('is-bumped');
  }
}

/** Little "no, you can't go below 1" shake for the minus button. */
function nudgeItem(item) {
  item.classList.remove('is-nudged');
  void item.offsetWidth;
  item.classList.add('is-nudged');
}

function handleQuantityChange(item, delta) {
  const quantityEl = item.querySelector('.quantity__value');
  const quantity = getQuantity(item);

  if (quantity + delta < 1) {
    nudgeItem(item);
    return;
  }

  quantityEl.textContent = quantity + delta;
  updateCart({ animateTotal: true });
}

function handleLike(button, item) {
  const isLiked = button.classList.toggle('is-liked');
  button.setAttribute('aria-pressed', String(isLiked));
  button.setAttribute(
    'aria-label',
    `${isLiked ? 'Unlike' : 'Like'} ${item.dataset.name}`
  );
}

function handleDelete(button, item) {
  // Prevent double clicks while the item is animating out.
  item.querySelectorAll('button').forEach((btn) => {
    btn.disabled = true;
  });
  item.classList.add('is-removing');

  window.setTimeout(() => {
    item.remove();
    updateCart({ animateTotal: true });
  }, 240);
}

/* Event delegation: one listener handles every item, even after
   other items have been removed from the DOM. */
cartItems.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;

  const item = button.closest('.cart-item');
  if (!item) return;

  if (button.classList.contains('plus')) {
    handleQuantityChange(item, 1);
  } else if (button.classList.contains('minus')) {
    handleQuantityChange(item, -1);
  } else if (button.classList.contains('like-btn')) {
    handleLike(button, item);
  } else if (button.classList.contains('delete-btn')) {
    handleDelete(button, item);
  }
});

/* Small feedback message for the demo checkout button. */
let noteTimer;
checkoutButton.addEventListener('click', () => {
  window.clearTimeout(noteTimer);
  cartNote.textContent = 'Thanks! This is a demo checkout — no payment was taken.';
  cartNote.classList.add('cart__note--success');

  noteTimer = window.setTimeout(() => {
    cartNote.textContent = 'Taxes and shipping are calculated at checkout.';
    cartNote.classList.remove('cart__note--success');
  }, 3000);
});

/* Restore the preselected items after the cart has been emptied. */
restoreButton.addEventListener('click', () => {
  window.location.reload();
});

/* Initial paint (also keeps the HTML totals and JS in sync). */
updateCart();
