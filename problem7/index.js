// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?

function nthprime(n) {
    const primes = [2];
    let num = 3, isprime = true;
    while(primes.length < n){
        // All the primes numbers of a number is always <= it's square root
        let max = Math.ceil(Math.sqrt(num));
        for(let i = 0;primes[i]<=max;i++){
            if(num % primes[i] == 0){
                isprime = false;
                break;
            }
        }
        if(isprime) primes.push(num);
        isprime = true;
        //An optimization technique, since we know of all even numbers only 2 is a prime number, we can skip the rest
        num += 2;
    }
    return primes[primes.length - 1];
}

module.exports = nthprime; 