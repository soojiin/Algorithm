function solution(N, stages) {

    let fail = [...Array(N+1).fill(0)];
    let failRate = [...Array(N).fill(0)];
    let challenger = stages.length;
    
    for (let i = 1 ; i < N+1  ; i++) {
        for (let j = 0 ; j < stages.length ; j++) {
            if (i === stages[j]) fail[i]++;
        }
        challenger -= fail[i-1];
        failRate[i-1] = challenger === 0 ? 0 : fail[i] / challenger;
    }
    
    return failRate.map((val, idx) => { return {idx : idx + 1, val} })
           .sort((a, b) => a.val < b.val ? 1 : a.val === b.val ? 0 : -1)
           .map((obj) => obj.idx);
    
}