/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const flag = x < 0 ? -1 : 1;
  x = x * flag;

  let reverseStr = x
    .toString()
    .split('')
    .reverse()
    .join('');
  const reverseReverseStr = reverseStr
    .split('')
    .reverse()
    .join('');

  // check for overflow
  if (reverseReverseStr !== x.toString()) {
    reverseStr = '0';
  }

  return parseInt(reverseStr) * flag;
};

module.exports = reverse;
