'use strict';

const expect = require('chai').expect;
const fizzBuzz = require('./');

describe('Fizz Buzz', function() {

  it('returns 1 when given 1', function() {
    expect(fizzBuzz(1)).to.eql('1');
  });

  it('return 2 when given 2', function() {
    expect(fizzBuzz(2)).to.eql('2');
  });

  it('returns Fizz when given 3', function() {
    expect(fizzBuzz(3)).to.eql('Fizz');
  });

  it('returns Buzz when given 5', function() {
    expect(fizzBuzz(5)).to.eql('Buzz');
  });

  it('returns Fizz when given 6', function() {
    expect(fizzBuzz(6)).to.eql('Fizz');
  });

  it('returns Buzz when given 10', function() {
    expect(fizzBuzz(10)).to.eql('Buzz');
  });

  it('returns FizzBuzz when given 15', function() {
    expect(fizzBuzz(15)).to.eql('FizzBuzz');
  });

  it('returns FizzBuzz when given 30', function() {
    expect(fizzBuzz(30)).to.eql('FizzBuzz');
  });

});
