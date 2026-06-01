/**
 * String utility functions.
 */

function reverseString(str) {
  return str.split('').reverse().join('');
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + '...';
}

function countWords(str) {
  return str.trim().split(/\s+/).filter(w => w.length > 0).length;
}

module.exports = { reverseString, capitalize, isPalindrome, truncate, countWords };
