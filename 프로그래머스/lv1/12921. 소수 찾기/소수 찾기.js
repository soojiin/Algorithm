function solution(n) {    
    // let arr = [...Array(n).keys()].map(el => el + 1);
    
    let arr = [];
    for (let i = 2 ; i <= n ; i++) {
        arr.push(i)
    }
    
    const isPrime = num => {
        if (num % 2 === 0) return num === 2 ? true : false;
        for (let i = 3 ; i <= Math.sqrt(num) ; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    return arr.filter(el => isPrime(el)).length;
}