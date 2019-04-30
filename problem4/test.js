const largestPalindromeProduct= require('./index');

test('largestPalindromeProduct function exists', () => {
    expect(largestPalindromeProduct).toBeDefined();
  });
  test('fibonacci sum of even value test', () => {
    expect(largestPalindromeProduct(2)).toEqual(9009);
    expect(largestPalindromeProduct(3)).toEqual(906609);
  });

