function solution(s){
    let sum = 0;
    for (let c of s) {
        sum += c === '(' ? 1 : -1;
        if (sum < 0) {
            return false;
        }
    }
    return sum === 0 ? true : false;
}
