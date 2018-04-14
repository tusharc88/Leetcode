/**
 * @param {number} x
 * @return {number}
 */

// I was not able to correctly check for 32 bit integer overflow here as Javascript accepts integers over 32 bits
// var reverse = function(x) {
//   const flag = x < 0 ? -1 : 1;
//   x = x * flag;
//
//   let reverseStr = x
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
//   const reverseReverseStr = reverseStr
//     .split('')
//     .reverse()
//     .join('');
//
//   // check for overflow
//   if (reverseReverseStr !== x.toString()) {
//     reverseStr = '0';
//   }
//
//   return parseInt(reverseStr) * flag;
// };

var reverse = function(x) {
  const reversed =
    parseInt(
      Math.abs(x)
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(x);

  // condition to check overflow
  // return reversed <= 0x7fffffff && reversed >= -0x80000000 ? reversed : 0;
  if (reversed > 2147483647 || reversed < -2147483648) return 0;

  return reversed;
};

module.exports = reverse;
