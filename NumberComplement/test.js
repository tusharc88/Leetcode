const findComplement = require('./index');

test('test findComplement is a function', () => {
  expect(typeof findComplement).toEqual('function');
});

test('test Number Complement', () => {
  expect(findComplement(5)).toEqual(2);
});
