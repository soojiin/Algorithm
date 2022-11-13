function solution(s, n) {
    return s.split('').map(el => {
        if (el === ' ') {return el;}
        if (el === el.toLowerCase()) { 
            return String.fromCharCode( el.charCodeAt() + n > 122 ? 
                                       (97 + (el.charCodeAt() + n) % 122) - 1 : el.charCodeAt() + n); }
        else if (el === el.toUpperCase()) { 
            return String.fromCharCode( el.charCodeAt() + n > 90 ? 
                                       (65 + (el.charCodeAt() + n) % 90) - 1 : el.charCodeAt() + n); }       
    }).join('');
    
}