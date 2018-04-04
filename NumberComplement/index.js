// var findComplement = function(num) {
//     const numBinaryArray = num.toString(2).split('');
//     let complement = '';
//     for(const bit of numBinaryArray) {
//         complement += bit === '0' ? '1' : '0';
//     }

//     return parseInt(complement, 2);
// };

var findComplement = function(num) {
  const numBinaryArray = num.toString(2).split('');
  let complement = numBinaryArray.reduce((accumulator, bit) => {
    return (accumulator += bit === '0' ? '1' : '0');
  }, '');

  return parseInt(complement, 2);
};

module.exports = findComplement;
