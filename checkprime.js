function checkPrime(num) { 
    let factors = 0
    for (let i = 1; i <= num; i++) { 
        if (num % i == 0) { factors++}
    } if (factors == 2) { return true }
    else { return false}
}

console.log(checkPrime(13))

