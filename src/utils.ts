export const checkWinner = (boardState: string[][], x: number, y: number, value: string) => {
    if (value !== 'X' && value !== 'O') {
        return false;
    }
    let sequenceCounter = 0;
    let row = 0;
    while (row < 3) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        boardState[row][y] === value && sequenceCounter++;
        if (sequenceCounter === 3) {
            return true;
        }
        row++;
    }
    sequenceCounter = 0;
    let col = 0;
    while (col < 3) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        boardState[x][col] === value && sequenceCounter++;
        if (sequenceCounter === 3) {
            return true;
        }
        col++;
    }
    return (boardState[0][0] === value && boardState[1][1] === value && boardState[2][2] === value) ||
        (boardState[0][2] === value && (boardState[1][1] === value && boardState[2][0] === value));
};