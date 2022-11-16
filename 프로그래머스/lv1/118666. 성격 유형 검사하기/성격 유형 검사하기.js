function solution(survey, choices) {
    
    const mbti = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0};
    
    for (let i = 0 ; i < choices.length ; i++) {
        if (choices[i] < 4) mbti[survey[i][0]] += 4 - choices[i]; // 비동의
        else if (choices[i] > 4) mbti[survey[i][1]] += choices[i] - 4; // 동의
        // mbti[choices[i] < 4 ? survey[i][0] : survey[i][1]] += Math.abs(choices[i] - 4);
    }
    
    let res = '';
    
    mbti.R >= mbti.T ? res += 'R' : res += 'T';
    mbti.C >= mbti.F ? res += 'C' : res += 'F';
    mbti.J >= mbti.M ? res += 'J' : res += 'M';
    mbti.A >= mbti.N ? res += 'A' : res += 'N';
    
    return res;
    
}