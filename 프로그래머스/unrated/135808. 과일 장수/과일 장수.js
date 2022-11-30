function solution(k, m, score) {
    
    let res = 0;
    let boxCnt = Math.trunc(score.length / m); // 총 상자수 
    
    score.sort((a, b) => b - a);
    
    for (let i = 1 ; i <= boxCnt ; i++) {
        res += score[i * m - 1] * m;
    }
    
    return res;
}