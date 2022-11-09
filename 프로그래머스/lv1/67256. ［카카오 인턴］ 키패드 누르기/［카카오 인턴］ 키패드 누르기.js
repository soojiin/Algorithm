function solution(numbers, hand) {
    
    let res = '';
    let l = '*', r = '#'; // 현재 왼, 오른손 위치
    const key = {1: [1, 1], 2: [1, 2], 3: [1, 3],
              4: [2, 1], 5: [2, 2], 6: [2, 3],
              7: [3, 1], 8: [3, 2], 9: [3, 3],
              '*': [4, 1], 0: [4, 2], '#': [4, 3]};
    
    for (let i of numbers) {
        if (i === 1 || i === 4 || i === 7) {
            res += 'L';
            l = i;
        }
        else if (i === 3 || i === 6 || i === 9) {
            res += 'R';
            r = i;
        }
        else {
            // 왼손 거리, 오른손 거리
            const ld = Math.abs(key[l][0] - key[i][0]) + Math.abs(key[l][1] - key[i][1]);
            const rd = Math.abs(key[r][0] - key[i][0]) + Math.abs(key[r][1] - key[i][1]);
            
            if (ld === rd) hand === 'right' ? (res += 'R', r = i) : (res += 'L', l = i);
            else if (ld > rd) {
                res += 'R';
                r = i;
            }
            else {
                res += 'L';
                l = i;
            }
        }
    }
    
    return res;
}