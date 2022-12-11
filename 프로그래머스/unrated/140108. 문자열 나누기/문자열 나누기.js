function solution(s) {

    let cnt = 0;
    let x = s[0], xlen = 0, len = 0;
    
    for (let i = 0 ; i < s.length ; i++) {
        if (x === s[i]) { xlen++; } 
        else { len++; } 
        
        if (xlen === len) {
            cnt++; 
            x = s[i + 1];
            xlen = 0;
            len = 0;
        }
        else if (!s[i + 1]) {
            cnt++;
        }
    }
    
    return cnt;
}