// abcad

var lengthOfLongestSubstring = function(s) {
  const len = s.length;
  const map = {};
  let max_len = 0;

  for (let i = 0, j = 0; j < len; j++) {
    if (s.charAt(j) in map) {
      i = Math.max(map[s.charAt(j)], i);
    }

    max_len = Math.max(max_len, j - i + 1);
    map[s.charAt(j)] = j + 1;
  }

  return max_len;
};

module.exports = lengthOfLongestSubstring;
