const smallestMult = require('./index');

test('smallestMult function exist',() => {
    expect(smallestMult).toBeDefined();
});

test('the smallest multiple upto 5',() => {
    expect(smallestMult(5)).toEqual(60);
});

test('the smallest multiple upto 7',() => {
    expect(smallestMult(7)).toEqual(420);
});

test('the smallest multiple upto 13',() => {
    expect(smallestMult(13)).toEqual(360360);
});