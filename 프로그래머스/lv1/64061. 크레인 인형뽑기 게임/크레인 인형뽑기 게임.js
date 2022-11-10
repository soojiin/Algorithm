function solution(board, moves) {
    
    let stack = [];
    let cnt = 0;
    
    for (let i = 0 ; i < moves.length ; i++) {
        for (let j = 0 ; j < board.length ; j++) {
            if (board[j][moves[i] - 1]) {
                stack.push(board[j][moves[i] - 1]);
                board[j][moves[i] - 1] = 0;
                if (stack[stack.length - 1] === stack[stack.length - 2]) {
                    cnt++;
                    stack.pop();
                    stack.pop();
                }
                break;
            }
        }
    }
    return cnt * 2;
}