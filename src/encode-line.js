const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
 let result = [];
 let integer = 1;
 for (let i=0; i<str.length; i++) {
if (str[i] === str[i+1]) {
  integer++;
}
else {
    if (integer === 1) {
      result.push(str[i]);
    }
    else {
      result.push(integer, str[i]);
      integer = 1;
    }
}
 }

 return result.join('');
}

module.exports = {
  encodeLine
};
