'use strict';

const expect = require('chai').expect;
const FizzBuzzPrinter = require('./');

describe('FizzBuzz printer', function() {

  describe('when given one element range', function() {

    it('returns the number and its fizzbuzz mapping', function() {
      const range = {
        from: 3,
        to: 3
      };
      const printer = new FizzBuzzPrinter(range);
      expect(printer.getList()).to.eql([
        { number: 3, value: 'Fizz' }
      ]);
    });

  });

  it('returns all numbers and mappings in the given range', function() {
    const range = {
      from: 5,
      to: 7
    };
    const printer = new FizzBuzzPrinter(range);
    expect(printer.getList()).to.eql([
      { number: 5, value: 'Buzz' },
      { number: 6, value: 'Fizz' },
      { number: 7, value: '7' }
    ]);
  });

});

