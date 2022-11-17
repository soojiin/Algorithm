function solution(s){
    let stack = [];
    
    for (let c of s) {
        if ( c === "(" ) { stack.push(c); }
        else if ( c === ")" && stack.length ) { stack.pop(); }
        else if ( c === ")" && !stack.length ) { return false; }
    }
    
    return stack.length ? false : true ;
}