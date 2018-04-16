// Lucky Numbers
// 7 => 49 => 16 + 81 = 97 => 81 + 49 = 130 => 1 + 9 + 0 = 10 => 1 (true)

// 4 => 16 => 37 => 58 =>  89 => 145 => 42 => 20 => 4 (false)
// 1111 => 4 => 16 => 37 => 58 =>  89 => 145 => 42 => 20 => 4 (false)

const isLuckyNumber = (num, map = {}) => {
  map[num] = true;

  if (num === 1) return true;

  const numArr = num.toString().split('');

  const newNum = numArr.reduce((accumulator, currentVal) => {
    const val = parseInt(currentVal);
    return (accumulator = accumulator + val * val);
  }, 0);

  if (map[newNum]) {
    return false;
  }

  return isLuckyNumber(newNum, map);
};

module.exports = isLuckyNumber;
