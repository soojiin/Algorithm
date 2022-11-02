function solution(dartResult) {
    
    let score = [], bonusOpt = [], cnt = 0;
    
    for (let i = 0 ; i < dartResult.length ; i++) {
        if (dartResult[i] === '1' && dartResult[i+1] === '0') { score.push(10); i += 1; }
        else if (dartResult[i] !== 'S' && dartResult[i] !== 'D' && dartResult[i] !== 'T' && dartResult[i] !== '*' && dartResult[i] !== '#') { score.push(Number(dartResult[i])); }
        else { bonusOpt.push(dartResult[i]); }
    }
    
    for (let i = 0 ; i < bonusOpt.length ; i++) {
        if (bonusOpt[i] === 'S') {
            if (bonusOpt[i+1] === '*') {
                if (score[cnt-1]) {
                    score[cnt-1] *= 2;
                    score[cnt] *= 2;
                }
                else {
                    score[cnt] *= 2;
                }
            }
            else if (bonusOpt[i+1] === '#') {
                score[cnt] *= -1;
            }
            cnt++;
        }
        if (bonusOpt[i] === 'D') {
             score[cnt] = Math.pow(score[cnt], 2);
            if (bonusOpt[i+1] === '*') {
                if (score[cnt-1]) {
                    score[cnt-1] *= 2;
                    score[cnt] *= 2;
                }
                else {
                    score[cnt] *= 2;
                }
            }
            else if (bonusOpt[i+1] === '#') {
                score[cnt] *= -1;
            }
            cnt++;
        }
            
        if (bonusOpt[i] === 'T') {
            score[cnt] = Math.pow(score[cnt], 3);
            if (bonusOpt[i+1] === '*') {
                if (score[cnt-1]) {
                    score[cnt-1] *= 2;
                    score[cnt] *= 2;
                }
                else {
                    score[cnt] *= 2;
                }
            }
            else if (bonusOpt[i+1] === '#') {
                score[cnt] *= -1;
            }
            cnt++;
        }
            
    }
    
    return score.reduce((acc, cur) => acc + cur);
}