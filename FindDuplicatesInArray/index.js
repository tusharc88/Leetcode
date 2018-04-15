/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let result = [];

  nums.forEach((val, index) => {
    if (nums.indexOf(val, index + 1) > -1) {
      if (result.indexOf(val) === -1) {
        result.push(val);
      }
    }
  });

  return result.sort();
};

module.exports = findDuplicates;
