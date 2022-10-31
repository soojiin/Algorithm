function solution(n) {
    let cnt = n.toString(2).split('1').length - 1;
    for (let i = n + 1 ; ; i++) {
        if (cnt === i.toString(2).split('1').length - 1) return i;
    }
}