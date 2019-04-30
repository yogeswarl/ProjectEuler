// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n){
	let max = +[...Array(n)].reduce((a , c)=> a+=9, ""); //makes the value of N the added number 'n' times. Ex: n = 4, max = 9999;
	let min = (max+1)/10;
	let result = [];
	for(let i = max;i > min;i--){
		for(let j = max;j > min;j--){
			let product = i*j;
			let number = [...String(product)].reverse().join(''); //converts the number to string.
			if(product == number){
				result.push(product);
				break;
			}
		}
	}
	return Math.max(...result);
}

console.log(largestPalindromeProduct(3));//906609
console.log(largestPalindromeProduct(2));//9009

module.exports = largestPalindromeProduct