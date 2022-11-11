function solution(new_id) {
    let l1 = new_id.toLowerCase();
    let l2 = l1.match(/[a-z0-9-_.]/g).join('')
    let l3 = l2.replace(/[.]+/g, '.');
    let l4 = l3[0] === '.' ? l3.split('').slice(1).join('') : l3;
    l4 = l4[l4.length - 1] === '.' ? l4.split('').slice(0, -1).join('') : l4;
    let l5 = l4.length ? l4 : 'a'; 
    let l6 = l5.length >= 16 ? l5.slice(0, 15) : l5;
    l6 = l6[l6.length - 1] === '.' ? l6.split('').slice(0, -1).join('') : l6;
    let l7 = l6.length <= 2 ? l6.concat(l6.at(-1).repeat(3 - l6.length)) : l6;

    return l7;
}