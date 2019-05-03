// The sum of the squares of the first ten natural numbers is,

//             1(2) + 2(2) + ... + 10(2) = 385

// The square of the sum of the first ten natural numbers is,

//            (1 + 2 + ... + 10)2 = 552 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and 
// the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

function sumofSquares(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += Math.pow(i, 2);
  }
  return count;
}
function squareOfSum(n) {
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    counter += i;
  }
  return counter * counter;
}
function sumSquareDifference(n) {
  return squareOfSum(n) - sumofSquares(n);
}
module.exports = sumSquareDifference;
