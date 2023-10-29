Here's an example of a JavaScript code that calculates the Fibonacci sequence using recursion and memoization. The filename for this code is "fibonacci.js":

```javascript
// fibonacci.js - Calculates the Fibonacci sequence using recursion and memoization

// Function to calculate the Fibonacci sequence
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// Test the fibonacci function
const n = 10;
console.log(`Fibonacci sequence up to ${n}:`);
for (let i = 1; i <= n; i++) {
  console.log(fibonacci(i));
}
```

Explanation:
- The code defines a function `fibonacci` that uses recursion to calculate the Fibonacci sequence.
- It takes two parameters: `n` (the index of the Fibonacci number to calculate) and `memo` (an object to store previously calculated Fibonacci numbers to optimize performance).
- Inside the function, it checks if the Fibonacci number at index `n` already exists in the `memo` object. If so, it returns the cached value.
- If `n` is less than or equal to 2, it returns 1 (base case of Fibonacci sequence).
- Otherwise, it recursively calls `fibonacci` for `n - 1` and `n - 2` to calculate the Fibonacci numbers and stores the result in the `memo` object for future use.
- Finally, it tests the `fibonacci` function by calculating the Fibonacci sequence up to a specified number `n` (in this case, 10) and displays the result.