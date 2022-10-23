function solution(a, b) {

    const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let idx = month.reduce((acc, cur, idx) => idx <= a - 2 ? acc + cur : acc, 0) + b;
    return day[(idx - 1) % 7];
    

}