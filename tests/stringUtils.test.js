const { describe, it } = require('node:test');
const assert = require('node:assert');
const { reverseString, capitalize, isPalindrome, truncate, countWords } = require('../src/stringUtils');

describe('String Utilities', () => {
  describe('reverseString', () => {
    it('should reverse a string', () => {
      assert.strictEqual(reverseString('hello'), 'olleh');
    });

    it('should handle empty string', () => {
      assert.strictEqual(reverseString(''), '');
    });

    it('should handle single character', () => {
      assert.strictEqual(reverseString('a'), 'a');
    });
  });

  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      assert.strictEqual(capitalize('hello'), 'Hello');
    });

    it('should handle empty string', () => {
      assert.strictEqual(capitalize(''), '');
    });

    it('should handle already capitalized', () => {
      assert.strictEqual(capitalize('Hello'), 'Hello');
    });
  });

  describe('isPalindrome', () => {
    it('should detect palindromes', () => {
      assert.strictEqual(isPalindrome('racecar'), true);
      assert.strictEqual(isPalindrome('A man a plan a canal Panama'), true);
    });

    it('should detect non-palindromes', () => {
      assert.strictEqual(isPalindrome('hello'), false);
    });
  });

  describe('truncate', () => {
    it('should not truncate short strings', () => {
      assert.strictEqual(truncate('hi', 10), 'hi');
    });

    it('should truncate long strings with ellipsis', () => {
      assert.strictEqual(truncate('hello world this is long', 10), 'hello w...');
    });
  });

  describe('countWords', () => {
    it('should count words', () => {
      assert.strictEqual(countWords('hello world'), 2);
    });

    it('should handle multiple spaces', () => {
      assert.strictEqual(countWords('  hello   world  '), 2);
    });

    it('should handle empty string', () => {
      assert.strictEqual(countWords(''), 0);
    });
  });
});
