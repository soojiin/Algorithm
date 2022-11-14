function solution(food) {
    let res = '';
    for (let i = 1 ; i < food.length ; i++) {
        for (let j = 0 ; j < Math.floor(food[i] / 2) ; j++) {
            res += i;
        }
    }
    return res + 0 + res.split('').reverse().join('');
}