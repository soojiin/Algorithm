function solution(n, arr1, arr2) {

    let arr3 = [];
    arr1 = arr1.map(el => el.toString(2).length === n ? el.toString(2) : el.toString(2).padStart(n, '0') );
    arr2 = arr2.map(el => el.toString(2).length === n ? el.toString(2) : el.toString(2).padStart(n, '0') );
    for (let i = 0 ; i < n ; i++) {
        arr3[i] = [];
        for (let j = 0 ; j < n ; j++) {
            arr3[i][j] = Number(arr1[i][j]) || Number(arr2[i][j]) === 1 ? '#' : ' ';
        }
        arr3[i] = arr3[i].join('')
    }
    return arr3;
}