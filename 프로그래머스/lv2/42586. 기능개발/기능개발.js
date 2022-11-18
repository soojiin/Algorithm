function solution(progresses, speeds) {
    // queue
    let days = progresses.map((el, idx) => Math.ceil((100 - el) / speeds[idx]));
    
    let cur = days[0];
    let cnt = 1, res = [];
        
    for (let i = 1 ; i < days.length ; i++) {
        if (cur >= days[i]) cnt++;
        else { 
            res.push(cnt);
            cur = days[i];
            cnt = 1;
        }
    }
    res.push(cnt);
    
    return res;
}
