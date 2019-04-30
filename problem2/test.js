const fiboEvenSum = require('./index');

test('fiboEvenSum function exists', () => {
    expect(fiboEvenSum).toBeDefined();
  });
  
test('fibonacci sum of even value test for 100=', () => {
    expect(fiboEvenSum(10)).toEqual(188);
  });

test('fibonacci sum of even value test for 23' , () => {
    expect(fiboEvenSum(23)).toEqual(60696);
  });

test('fibonacci sum of even value test for 43' , () => {
    expect(fiboEvenSum(43)).toEqual(1485607536);
  });