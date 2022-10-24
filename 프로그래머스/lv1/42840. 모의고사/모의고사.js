function solution(answers) {
    let res = [];
    let spz1 = [1, 2, 3, 4, 5];
    let spz2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let spz3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let c1 = 0, c2 = 0, c3 = 0;
    
    answers.reduce((acc, cur, idx) => {
        if (cur === spz1[idx % spz1.length]) c1++;
        if (cur === spz2[idx % spz2.length]) c2++;
        if (cur === spz3[idx % spz3.length]) c3++;
    }, 0)
    
    let max = Math.max(c1,c2,c3);
    if (c1 === max) res.push(1);
    if (c2 === max) res.push(2);
    if (c3 === max) res.push(3);
    
    return res;
}