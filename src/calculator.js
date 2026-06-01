/**
 * Simple calculator module for demonstrating CI testing.
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function factorial(n) {
  if (n < 0) throw new Error('Negative numbers not supported');
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = { add, subtract, multiply, divide, factorial, isPrime };
