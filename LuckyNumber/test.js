const isLuckyNumber = require('./index');

test('isLuckyNumber is a function', () => {
  expect(typeof isLuckyNumber).toEqual('function');
});

test('isLuckyNumber returns true for a lucky number', () => {
  expect(isLuckyNumber(7)).toBeTruthy();
});

test('isLuckyNumber returns false for not a lucky number', () => {
  expect(isLuckyNumber(4)).toBeFalsy();
  expect(isLuckyNumber(1111)).toBeFalsy();
});
