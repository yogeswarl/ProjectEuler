const primeSummation = require('./index');

test('should return a number',() => {
  expect(typeof primeSummation(17)).toBe('number')
})
test('prime summation of 17',() => {
  expect(primeSummation(17)).toEqual(41)
})
test('prime summation of 2001',() => {
  expect(primeSummation(2001)).toEqual(277050)
})
test('prime summation of 140759',() => {
  expect(primeSummation(140759)).toEqual(873608362)
})
