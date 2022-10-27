function solution(s) {
    let str = s.split(' ').map(el => Number(el));
    return Math.min(...str) + ' ' + Math.max(...str);
}