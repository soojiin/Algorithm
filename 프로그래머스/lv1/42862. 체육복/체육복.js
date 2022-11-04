function solution(n, lost, reserve) {
    
    let clothes = new Array(n + 1).fill(1);
    
    for (let student of lost) {
        clothes[student]--;
    }
    
    for (let student of reserve) {
        clothes[student]++;
    }
    
    for (let i = 1 ; i < clothes.length ; i++) {
        if (clothes[i] === 0) {
            if (clothes[i - 1] === 2) {
                clothes[i - 1]--;
                clothes[i]++;
            }
            else if (clothes[i + 1] === 2) {
                clothes[i + 1]--;
                clothes[i]++;
            }
        }
    }
    
    return clothes.reduce((acc, cur) => cur !== 0 ? acc += 1 : acc, 0) - 1;   
}