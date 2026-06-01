const { describe, it } = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide, factorial, isPrime } = require('../src/calculator');

describe('Calculator', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      assert.strictEqual(add(2, 3), 5);
    });

    it('should add negative numbers', () => {
      assert.strictEqual(add(-1, -2), -3);
    });

    it('should add zero', () => {
      assert.strictEqual(add(5, 0), 5);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      assert.strictEqual(subtract(5, 3), 2);
    });

    it('should handle negative results', () => {
      assert.strictEqual(subtract(3, 5), -2);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      assert.strictEqual(multiply(3, 4), 12);
    });

    it('should handle zero', () => {
      assert.strictEqual(multiply(5, 0), 0);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      assert.strictEqual(divide(10, 2), 5);
    });

    it('should handle decimal results', () => {
      assert.strictEqual(divide(7, 2), 3.5);
    });

    it('should throw on division by zero', () => {
      assert.throws(() => divide(5, 0), { message: 'Division by zero' });
    });
  });

  describe('factorial', () => {
    it('should return 1 for 0', () => {
      assert.strictEqual(factorial(0), 1);
    });

    it('should return 1 for 1', () => {
      assert.strictEqual(factorial(1), 1);
    });

    it('should calculate factorial of 5', () => {
      assert.strictEqual(factorial(5), 120);
    });

    it('should throw for negative numbers', () => {
      assert.throws(() => factorial(-1), { message: 'Negative numbers not supported' });
    });
  });

  describe('isPrime', () => {
    it('should return false for 0 and 1', () => {
      assert.strictEqual(isPrime(0), false);
      assert.strictEqual(isPrime(1), false);
    });

    it('should return true for 2', () => {
      assert.strictEqual(isPrime(2), true);
    });

    it('should return true for primes', () => {
      assert.strictEqual(isPrime(7), true);
      assert.strictEqual(isPrime(13), true);
      assert.strictEqual(isPrime(97), true);
    });

    it('should return false for non-primes', () => {
      assert.strictEqual(isPrime(4), false);
      assert.strictEqual(isPrime(9), false);
      assert.strictEqual(isPrime(100), false);
    });
  });
});
