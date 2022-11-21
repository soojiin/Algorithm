function solution(numbers, target) {
    // dfs
    
    let cnt = 0;
    
    dfs(0, 0);
    
    function dfs(idx, sum) {
        if (idx < numbers.length) {
            dfs(idx + 1, sum + numbers[idx]);
            dfs(idx + 1, sum - numbers[idx]);
        }
        else { // idx === numbers.length
            if (sum === target) {
                cnt++;
            }
        }
    }
    
    return cnt;
}