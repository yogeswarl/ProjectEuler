const largestProductinaSeries = require('./index');

test('largest Product in a Series function exists', () => {
    expect(largestProductinaSeries).toBeDefined();
});

test('largest Product in a Series for 4',() => {
    expect(largestProductinaSeries(4)).toEqual(5832);
});

test('largest Product in a Series for 13',() => {
    expect(largestProductinaSeries(13)).toEqual(23514624000);
});