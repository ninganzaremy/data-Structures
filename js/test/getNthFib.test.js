const getNthFib = require('../recursion/getNthFib');

test('nthFibonacciNumber of 2 to equal 1', () => {
    expect(getNthFib(2)).toBe(1);
});