'use strict';

const expect = require('chai').expect;
const format = require('./');

describe('Web formatter', function() {

  it('joins number and value with a dash', function() {
    const input = [{ number: 13, value: 'thirteen' }];
    const result = format(input);
    expect(result).to.eql('13 - thirteen');
  });

  it('joins multiple numbers with newline', function() {
    const input = [{ number: 13, value: 'thirteen' }, { number: 14, value: 'fourteen' }];
    const result = format(input);
    expect(result).to.eql('13 - thirteen\n14 - fourteen');
  });

});
