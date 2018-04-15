const findDuplicates = require('./index');

test('findDuplicates is a function', () => {
  expect(typeof findDuplicates).toEqual('function');
});

test('findDuplicates works', () => {
  expect(findDuplicates([])).toEqual([]);
  expect(findDuplicates([1, 1, 1])).toEqual([1]);
  expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3]);
  expect(findDuplicates([1, 5, -1, 2, 8, -10, 3, 5, -1, 3, 4, 1])).toEqual([
    -1,
    1,
    3,
    5,
  ]);
});
