/* complex_code.js */

// This code is an implementation of a sophisticated and elaborate algorithm
// for finding all prime numbers up to a given number using the Sieve of Eratosthenes.

function getPrimes(n) {
  // Initialize an array of boolean values, where index represents a number
  // and value represents whether that number is prime or not.
  let primes = new Array(n + 1).fill(true);

  // Mark 0 and 1 as non-prime, as they are not.
  primes[0] = false;
  primes[1] = false;

  // Apply the Sieve of Eratosthenes algorithm.
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      // Mark multiples of i as non-prime.
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  // Extract and return all prime numbers.
  let result = [];
  for (let i = 0; i <= n; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }

  return result;
}

// Usage example:
let primesUpTo100 = getPrimes(100);
console.log(primesUpTo100);