const largestPrimeFactor = require('./index');

test('largestPrimeFactor function exists', () => {
    expect(largestPrimeFactor).toBeDefined();
  });
  test('fibonacci sum of even value test', () => {
    expect(largestPrimeFactor(2)).toEqual(2);
    expect(largestPrimeFactor(3)).toEqual(3);
    expect(largestPrimeFactor(5)).toEqual(5);
    expect(largestPrimeFactor(7)).toEqual(7);
    expect(largestPrimeFactor(13195)).toEqual(29);
    expect(largestPrimeFactor(600851475143)).toEqual(6857);
  });

