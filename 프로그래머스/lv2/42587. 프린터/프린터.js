function solution(priorities, location) {
    // queue
    
    let cnt = 0;
    
    while (priorities.length) {
        let cur = priorities.shift();
        let max = Math.max(...priorities);
        
        if (cur < max) {
            priorities.push(cur);
        }
        else {
            cnt++;
            if (location === 0) {
                return cnt;
            }
        }
        
        location--;
        
        if (location === -1) {
            location = priorities.length - 1;
        }
    }
}