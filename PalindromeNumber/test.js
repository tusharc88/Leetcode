const isPalindrome = require('./index');

test('isPalindrome is a function', () => {
  expect(typeof isPalindrome).toEqual('function');
});

test('number is a palindrome', () => {
  expect(isPalindrome(101)).toBeTruthy();
  expect(isPalindrome(1221)).toBeTruthy();
  expect(isPalindrome(1)).toBeTruthy();
  expect(isPalindrome(11)).toBeTruthy();
  expect(isPalindrome(12321)).toBeTruthy();
});

test('number is not a palindrome', () => {
  expect(isPalindrome(123)).toBeFalsy()
  expect(isPalindrome(89)).toBeFalsy();
  expect(isPalindrome(123445)).toBeFalsy();
});
