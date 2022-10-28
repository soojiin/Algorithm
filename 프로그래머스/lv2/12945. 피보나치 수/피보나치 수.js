function solution(n) {
    let cache = [];

    for (let i = 0 ; i <= n ; i++) {
        if (i <= 1) { cache[i] = i; }
        else { cache[i] = (cache[i-1] % 1234567 + cache[i-2] % 1234567) % 1234567; }
    }
    
    return cache[n];
}