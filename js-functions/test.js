/* Simple test runner for functions.js
   Run with: node test.js */

const {
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
} = require("./functions.js");

let passed = 0;
let failed = 0;

/**
 * Compares the actual result with the expected result.
 * Values are compared as JSON so arrays and booleans display clearly.
 */
function test(name, actual, expected) {
  const actualText = JSON.stringify(actual);
  const expectedText = JSON.stringify(expected);

  if (actualText === expectedText) {
    passed += 1;
    console.log(`PASS  ${name}`);
  } else {
    failed += 1;
    console.error(`FAIL  ${name}`);
    console.error(`      expected: ${expectedText}`);
    console.error(`      actual:   ${actualText}`);
  }
}

/* -------------------- String Manipulation -------------------- */
test("reverseString reverses a word", reverseString("JavaScript"), "tpircSavaJ");
test("reverseString reverses a sentence", reverseString("Hello, World!"), "!dlroW ,olleH");
test("reverseString handles an empty string", reverseString(""), "");

test("countCharacters counts letters", countCharacters("hello"), 5);
test("countCharacters includes spaces", countCharacters("Hello, World!"), 13);
test("countCharacters handles an empty string", countCharacters(""), 0);

test(
  "capitalizeWords capitalizes every word",
  capitalizeWords("the quick brown fox"),
  "The Quick Brown Fox"
);
test(
  "capitalizeWords keeps extra spaces",
  capitalizeWords("hello   world"),
  "Hello   World"
);
test(
  "capitalizeWords handles an empty string",
  capitalizeWords(""),
  ""
);

/* -------------------- Array Functions -------------------- */
const numbers = [3, 7, 2, 9, 4];

test("findMax returns the largest number", findMax(numbers), 9);
test("findMax handles negative numbers", findMax([-10, -3, -25]), -3);
test("findMax returns null for an empty array", findMax([]), null);

test("findMin returns the smallest number", findMin(numbers), 2);
test("findMin handles negative numbers", findMin([-10, -3, -25]), -25);
test("findMin returns null for an empty array", findMin([]), null);

test("sumArray adds all elements", sumArray([1, 2, 3, 4, 5]), 15);
test("sumArray handles negative numbers", sumArray([10, -3, -2]), 5);
test("sumArray returns 0 for an empty array", sumArray([]), 0);

test(
  "filterArray keeps even numbers",
  filterArray([1, 2, 3, 4, 5, 6], (number) => number % 2 === 0),
  [2, 4, 6]
);
test(
  "filterArray keeps words longer than 4 letters",
  filterArray(["cat", "horse", "elephant", "dog"], (word) => word.length > 4),
  ["horse", "elephant"]
);

/* -------------------- Mathematical Functions -------------------- */
test("factorial of 0 is 1", factorial(0), 1);
test("factorial of 5 is 120", factorial(5), 120);
test("factorial of 7 is 5040", factorial(7), 5040);

test("isPrime returns true for 2", isPrime(2), true);
test("isPrime returns true for 29", isPrime(29), true);
test("isPrime returns false for 1", isPrime(1), false);
test("isPrime returns false for 9", isPrime(9), false);
test("isPrime returns false for a negative number", isPrime(-7), false);

test("fibonacci of 0 terms is empty", fibonacci(0), []);
test("fibonacci of 1 term", fibonacci(1), [0]);
test(
  "fibonacci of 10 terms",
  fibonacci(10),
  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
);

/* -------------------- Summary -------------------- */
console.log(`\n${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exitCode = 1;
}
