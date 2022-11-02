function solution(dartResult) {
    let bonus = {'S': 1, 'D': 2, 'T': 3},
        options = {'*': 2, '#': -1, '': 1};
    
    let darts = dartResult.match(/\d{1,}[SDT][*#]?/g);
    
    for (let i = 0 ; i < darts.length ; i++) {
        let split = darts[i].match(/(\d{1,})([SDT])([*#]?)/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
        
        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];
        
        darts[i] = score;
    }
    
    return darts.reduce((a, b) => a + b);
}
