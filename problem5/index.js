function lcm(a,b){          //lcm of two numbers.
    return (a*b)/gcd(a, b);
}
//Euclidean recursive algorithm.
function gcd(a,b){
    if(b === 0)  return a;
    return gcd(b,a%b);
}
function smallestMult(n){
    let maxLCM = 1;
    for(let i =2; i<=n;i++){
        maxLCM = lcm(maxLCM,i);
    }
    return maxLCM;
}

module.exports = smallestMult;