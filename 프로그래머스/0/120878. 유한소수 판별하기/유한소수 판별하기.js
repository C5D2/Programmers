function solution(a, b) {
    // let gcd = 1;
    const divisor = [];
    const prime_number = [];
    
//     for (let i = 2; i <= Math.min(a, b); i++) {
//             if(a % i === 0 && b % i === 0) {
//                 gcd = i;
//             }
//         }
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    
    const RD = b/gcd(a, b);

    for(let j = 1; j <= RD; j++) {
        if (RD % j === 0) divisor.push(j)
    }
    for (let k = 0; k < divisor.length; k++){
        let count = 0;
        for (let l = 1; l <= divisor[k]; l++) {
            if (divisor[k] % l === 0) 
                count += 1;
        }
        if (count === 2) prime_number.push(divisor[k]);
    }
    const hasOtherNumbers = prime_number.some((num) => num !== 2 && num !== 5);
    
    return hasOtherNumbers ? 2 : 1 ;
}