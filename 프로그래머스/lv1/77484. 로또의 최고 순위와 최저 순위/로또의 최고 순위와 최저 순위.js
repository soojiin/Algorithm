function solution(lottos, win_nums) {
    
    let match = 0, unknown = 0;
    
    lottos.forEach(el => {
        win_nums.includes(el) ? match++ : match;
        el === 0 ? unknown++ : unknown;
    })

    let lowest = match > 1 ? 7 - match : 6;
    let highest = match + unknown > 1 ? 7 - match - unknown : 6;
    
    return [highest, lowest];
}