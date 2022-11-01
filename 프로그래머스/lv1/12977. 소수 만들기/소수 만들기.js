function solution(nums) {
    
    let res = 0;
    
    const isPrime = (num) => {
        if (num % 2 === 0) return num === 2 ? true : false;
        for (let i = 3 ; i <= Math.sqrt(num) ; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    };
    
    for (let i = 0 ; i < nums.length - 2 ; i++) {
        for (let j = i + 1 ; j < nums.length - 1 ; j++) {
            for (let k = j + 1 ; k < nums.length ; k++) {
                if (isPrime(nums[i] + nums[j] + nums[k])) res++;
            }
        }
    }

    return res;  
}