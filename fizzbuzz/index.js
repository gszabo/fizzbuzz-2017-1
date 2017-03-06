'use strict';

module.exports = function(input) {
  let result = '';
  if (input % 3 === 0) result += 'Fizz';
  if (input % 5 === 0) result += 'Buzz';
  return result.length > 0 ? result : input.toString();
};
