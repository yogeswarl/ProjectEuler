const multiplesOf3and5 = require('./index');

test('multiplesof3and5 function exists', () => {
    expect(multiplesOf3and5).toBeDefined();
  });
  
test('Multiples of 3 and 5 test for 1000', () => {
    expect(multiplesOf3and5(1000)).toEqual(233168);
  });

test('Multiples of 3 and 5 test for 49' , () => {
    expect(multiplesOf3and5(49)).toEqual(543);
  });

test('Multiples of 3 and 5 test for 19564' , () => {
    expect(multiplesOf3and5(19564)).toEqual(89301183);
  });