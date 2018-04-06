// lessons learnt 1. can't use break; statement in map

var twoSum = function(nums, target) {
  let hashMapObj = nums.reduce((accumulator, currentVal, index) => {
    // accumulator[currentVal] = index;
    // return accumulator;
    // OR try not to mutate accumulator
    return { ...accumulator, [currentVal]: index };
  }, {});

  let results = [];

  for (let index = 0; index < nums.length; index++) {
    if (
      hashMapObj.hasOwnProperty(target - nums[index]) &&
      hashMapObj[target - nums[index]] !== index
    ) {
      results.push(index);
      results.push(hashMapObj[target - nums[index]]);
      break;
    }
  }

  return results;
};

module.exports = twoSum;
