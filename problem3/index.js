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

module.exports = largestPrimeFactor;