const nthprime = require('./index');

test('nthprime function exists', () => {
    expect(nthprime).toBeDefined();
});

test('nth prime of 6',() => {
    expect(nthprime(6)).toEqual(13);
});

test('nth prime of 10',() => {
    expect(nthprime(10)).toEqual(29);
});

test('nth prime of 100',() => {
    expect(nthprime(100)).toEqual(541);
});

test('nth prime of 1000',() => {
    expect(nthprime(1000)).toEqual(7919);
});

test('nth prime of 10000',() => {
    expect(nthprime(10001)).toEqual(104743);
});