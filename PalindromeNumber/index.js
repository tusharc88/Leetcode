// Lessons learnt: 1. Always wrap number in parseInt() if dividing by something
// 2. Always dry run your code to check if statements, for loops, while loop conditions

// var isPalindrome = function(x) {
//     const arr = x.toString().split('');
//     const result = true;
//     const arrLen = arr.length;
//
//     let startCounter = 0, endCounter = arrLen-1;
//
//     while(startCounter < endCounter) {
//       if(arr[startCounter] !== arr[endCounter]) {
//         return false;
//       }
//       startCounter++;
//       endCounter--;
//     }
//
//     return result;
// };

var isPalindrome = function(x) {
  let temp = x;
  let noOfDigits = 0;

  while(temp > 0) {
    temp = parseInt(temp/10);
    noOfDigits++;
  }

  temp = x;
  let i = 1;

  while(i <= noOfDigits-i) {
    const start = parseInt(temp/powX(noOfDigits-i));
    const end = parseInt(temp/powX(i-1));
    if( start%10 !== end%10)
      return false;

    i++;
  }

  return true;
}

function powX(a) {
  if(a === 0) return 1;
  return 10* powX(a-1);
}

module.exports = isPalindrome;
