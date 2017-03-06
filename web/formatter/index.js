'use strict';

module.exports = function(input) {
  return input.map(pair => `${pair.number} - ${pair.value}`).join('\n');
};
