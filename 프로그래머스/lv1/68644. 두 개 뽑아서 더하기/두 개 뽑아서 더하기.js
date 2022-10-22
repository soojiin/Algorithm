function solution(numbers) {
    let res = [];
    for (let i = 0 ; i < numbers.length - 1 ; i++) {
        for (let j = i + 1 ; j < numbers.length ; j++) {
            let sum = numbers[i] + numbers[j];
            !res.includes(sum) ? res.push(sum) : res;
            // if (!res.includes(sum)) res.push(sum);
        }
    }
    return res.sort((a, b) => a - b);
}