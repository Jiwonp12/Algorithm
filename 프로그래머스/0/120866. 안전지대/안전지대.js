function solution(board) {
    let result = 0;
    const dangerArr = [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]];
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                dangerArr.map(danger => {
                    let [x,y] = danger;
                    [x,y] = [x+i, y+j];
                    
                    if (x >= 0 && x < board.length && 
                        y >= 0 && y < board[i].length &&
                        board[x][y] === 0) {
                        board[x][y] = 2;
                    }
                })
            }
        }
    }
    
    board.map(x => x.map(y => y === 0 ? result++ : 0));
    return result;
}