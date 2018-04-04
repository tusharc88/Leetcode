const twoSum = require('./index');

test('twoSum is a function', () => {
  expect(typeof twoSum).toEqual('function');
});

test('twoSum array is returning correct values', () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSum([1, 3, 5, 2], 4)).toEqual([0, 1]);
  expect(twoSum([1, 3, 5, 2], 9)).toEqual([]); // when no 2 numbers add up to target
});
