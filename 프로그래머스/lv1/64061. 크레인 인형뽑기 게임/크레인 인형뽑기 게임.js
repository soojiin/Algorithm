function solution(board, moves) {
    
    let stack = [];
    let cnt = 0;
    
    for (let i = 0 ; i < moves.length ; i++) {
        for (let j = 0 ; j < board.length ; j++) {
            let move = moves[i] - 1;
            if (board[j][move]) {
                if (stack[stack.length - 1] === board[j][move]) {
                    cnt += 2;
                    stack.pop();
                }
                else {
                    stack.push(board[j][move]);
                }
                board[j][move] = 0;
                break;
            }
        }
    }
    return cnt;
}