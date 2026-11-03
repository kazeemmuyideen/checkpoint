# JavaScript Functions Assignment

A collection of beginner-friendly JavaScript functions covering strings, arrays,
and math, plus a live demo page and a small test suite.

## Files

| File | Purpose |
| --- | --- |
| `functions.js` | All ten functions with JSDoc comments and Node.js exports. |
| `index.html` | Visual playground that runs the functions and shows live results. |
| `test.js` | Automated tests for normal cases and edge cases. |

## Functions

### String manipulation

| Function | Description | Example |
| --- | --- | --- |
| `reverseString(str)` | Reverses a string. | `"JavaScript"` → `"tpircSavaJ"` |
| `countCharacters(str)` | Counts characters, including spaces. | `"Hello, World!"` → `13` |
| `capitalizeWords(sentence)` | Capitalizes the first letter of each word. | `"the quick fox"` → `"The Quick Fox"` |

### Arrays

| Function | Description | Example |
| --- | --- | --- |
| `findMax(numbers)` | Returns the largest number (or `null` for `[]`). | `[3, 7, 2, 9]` → `9` |
| `findMin(numbers)` | Returns the smallest number (or `null` for `[]`). | `[3, 7, 2, 9]` → `2` |
| `sumArray(numbers)` | Returns the sum of all numbers. | `[1, 2, 3]` → `6` |
| `filterArray(array, predicate)` | Keeps elements that pass a condition. | `[1, 2, 3, 4], n => n % 2 === 0` → `[2, 4]` |

### Math

| Function | Description | Example |
| --- | --- | --- |
| `factorial(n)` | Calculates `n!` for a non-negative integer. | `factorial(5)` → `120` |
| `isPrime(n)` | Checks whether a number is prime. | `isPrime(29)` → `true` |
| `fibonacci(terms)` | Generates the Fibonacci sequence. | `fibonacci(6)` → `[0, 1, 1, 2, 3, 5]` |

## How to run

Open the demo page directly in a browser:

```text
js-functions/index.html
```

Or run the tests with Node.js:

```bash
node js-functions/test.js
```

## Notes

- `functions.js` works in the browser (loaded with a `<script>` tag) and in
  Node.js (`require("./functions.js")`).
- Functions that receive invalid input throw a `RangeError` or `TypeError` so
  mistakes are easy to spot.
- The Fibonacci sequence starts at `0`, so `fibonacci(10)` returns
  `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`.
