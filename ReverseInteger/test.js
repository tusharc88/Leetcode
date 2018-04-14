const reverse = require('./index');

test('reverse is a function', () => {
  expect(typeof reverse).toEqual('function');
});

test('reverse integer works for +ve integer', () => {
  expect(reverse(123)).toEqual(321);
  expect(reverse(0)).toEqual(0);
  expect(reverse(123456789)).toEqual(987654321);
  expect(reverse(8)).toEqual(8);
});

test('reverse integer works for -ve integer', () => {
  expect(reverse(-123)).toEqual(-321);
  expect(reverse(-123456789)).toEqual(-987654321);
  expect(reverse(-8)).toEqual(-8);
});
