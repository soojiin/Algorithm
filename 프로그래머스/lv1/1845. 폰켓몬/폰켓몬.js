function solution(nums) {    
    // 중복되는 값 제거
    let uniq = [...new Set(nums)];
    let n = nums.length / 2;
    return uniq.length > n ? n : uniq.length;
}