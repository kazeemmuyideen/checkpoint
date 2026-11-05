/* =========================================================
   DOM Project 2 — Interactive Color Changer
   Vanilla JavaScript (no libraries)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const colorBox = document.getElementById('color-box');
  const changeColorBtn = document.getElementById('change-color-btn');
  const colorValue = document.getElementById('color-value');

  /** Generate a random hexadecimal color, e.g. "#A3F19C". */
  function getRandomColor() {
    const hexDigits = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i += 1) {
      color += hexDigits[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  function changeColor() {
    const newColor = getRandomColor();

    colorBox.style.backgroundColor = newColor;
    colorValue.textContent = newColor;

    // Restart the little pop animation on every click.
    colorBox.classList.remove('is-changing');
    void colorBox.offsetWidth;
    colorBox.classList.add('is-changing');
  }

  changeColorBtn.addEventListener('click', changeColor);
});
