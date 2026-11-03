/* ============================================================
   JavaScript Functions Assignment
   String manipulation, array helpers, and mathematical functions.
   ============================================================ */

/* -------------------- String Manipulation -------------------- */

/**
 * Reverses a string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  // Array.from([...]) splits by character, so emoji/surrogate pairs stay intact.
  return [...String(str)].reverse().join("");
}

/**
 * Counts the number of characters in a string (spaces included).
 * @param {string} str - The string to measure.
 * @returns {number} The character count.
 */
function countCharacters(str) {
  return [...String(str)].length;
}

/**
 * Capitalizes the first letter of each word in a sentence.
 * Existing spacing and punctuation are preserved.
 * @param {string} sentence - The sentence to capitalize.
 * @returns {string} The sentence with each word capitalized.
 */
function capitalizeWords(sentence) {
  return String(sentence).replace(
    /(^|\s)(\S)/g,
    (_, spacing, firstLetter) => spacing + firstLetter.toUpperCase()
  );
}

/* -------------------- Array Functions -------------------- */

/**
 * Finds the largest number in an array.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number|null} The maximum value, or null for an empty array.
 */
function findMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  return numbers.reduce((max, number) => (number > max ? number : max));
}

/**
 * Finds the smallest number in an array.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number|null} The minimum value, or null for an empty array.
 */
function findMin(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  return numbers.reduce((min, number) => (number < min ? number : min));
}

/**
 * Adds up every number in an array.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} The sum of all elements (0 for an empty array).
 */
function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("sumArray expects an array of numbers.");
  }

  return numbers.reduce((sum, number) => sum + number, 0);
}

/**
 * Filters an array using a condition (predicate) function.
 * @param {Array} array - The array to filter.
 * @param {Function} predicate - Condition that returns true to keep an element.
 * @returns {Array} A new array with only the elements that pass the condition.
 */
function filterArray(array, predicate) {
  if (!Array.isArray(array)) {
    throw new TypeError("filterArray expects an array.");
  }
  if (typeof predicate !== "function") {
    throw new TypeError("filterArray expects a predicate function.");
  }

  return array.filter(predicate);
}

/* -------------------- Mathematical Functions -------------------- */

/**
 * Calculates the factorial of a number (n!).
 * @param {number} n - A non-negative integer.
 * @returns {number} The factorial of n.
 */
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("Factorial is only defined for non-negative integers.");
  }

  let result = 1;
  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }
  return result;
}

/**
 * Checks whether a number is prime.
 * @param {number} n - The number to check.
 * @returns {boolean} True if n is prime, otherwise false.
 */
function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }

  // Only odd divisors up to the square root of n need to be checked.
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Generates the Fibonacci sequence up to a given number of terms.
 * @param {number} terms - How many terms to generate.
 * @returns {number[]} The Fibonacci sequence, e.g. 10 -> [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].
 */
function fibonacci(terms) {
  if (!Number.isInteger(terms) || terms < 0) {
    throw new RangeError("The number of terms must be a non-negative integer.");
  }

  const sequence = [];
  let current = 0;
  let next = 1;

  for (let i = 0; i < terms; i += 1) {
    sequence.push(current);
    [current, next] = [next, current + next];
  }

  return sequence;
}

/* -------------------- Exports -------------------- */

// Allows the functions to be used with Node.js (require) as well as in the browser.
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    reverseString,
    countCharacters,
    capitalizeWords,
    findMax,
    findMin,
    sumArray,
    filterArray,
    factorial,
    isPrime,
    fibonacci,
  };
}
