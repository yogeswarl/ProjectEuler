function sumofSquares(n){
    let count =0;
    for(let i = 1;i<=n;i++){
      count += Math.pow(i,2);
    }
    return count;
}
function squareOfSum(n){
    let counter = 0;
    for(let i=1;i<=n;i++){
      counter+=i;
    }
    return counter*counter;
}
function sumSquareDifference(n) {
    return squareOfSum(n) - sumofSquares(n);  
}
module.exports = sumSquareDifference;
