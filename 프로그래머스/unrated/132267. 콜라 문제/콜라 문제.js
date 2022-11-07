function solution(a, b, n) {
    let newCoke, total = 0;
    while (n >= a) {
        newCoke = b * Math.floor(n / a);
        total += newCoke;
        n = (n % a) + newCoke;   
    }
    return total;
}