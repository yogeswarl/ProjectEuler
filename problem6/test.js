const sumSquareDifference = require('./index');

test('sumsquareDifference function exists', () => {
    expect(sumSquareDifference).toBeDefined();
});

test('sum square difference of 10',() => {
    expect(sumSquareDifference(10)).toEqual(2640);
});

test('sum square difference of 20',() => {
    expect(sumSquareDifference(20)).toEqual(41230);
});

test('sum square difference of 100',() => {
    expect(sumSquareDifference(100)).toEqual(25164150);
});