function solution(s) {
    const numWord = { zero : '0', one : '1', two : '2', three : '3', four : '4', 
                     five : '5', six : '6', seven : '7', eight : '8', nine : '9'}
    const num = '0123456789';
    let res = '', word = '';
    [...s].forEach(el => {
        if (num.includes(el)) { res += el; }
        else {
            word += el;
            if (numWord[word]) {
                res += numWord[word]; 
                word = '';
            }
        }
    })
    return Number(res);
}