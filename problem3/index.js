// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number


function largestPrimeFactor(number) {
  // Good luck!
  let prime = 2, maxValue = 1 ;
  while(prime <= number){ 
  	if(number % prime == 0){
 		maxValue = prime;
 		number= number/prime;
 	}
 	else
		prime++;
	}
  return maxValue;
}

console.log(largestPrimeFactor(13195)); //should return 29.
console.log(largestPrimeFactor(600851475143)); //should return 6857.

module.exports = largestPrimeFactor;