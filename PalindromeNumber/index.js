var isPalindrome = function(x) {
    const arr = x.toString().split('');
    const result = true;
    const arrLen = arr.length;

    let startCounter = 0, endCounter = arrLen-1;

    while(startCounter < endCounter) {
      if(arr[startCounter] !== arr[endCounter]) {
        return false;
      }
      startCounter++;
      endCounter--;
    }

    return result;
};
