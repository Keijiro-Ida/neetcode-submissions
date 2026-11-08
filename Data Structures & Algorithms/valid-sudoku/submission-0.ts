class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: 9}, () =>  new Array<boolean>(9).fill(false));
        const cols = Array.from({ length: 9}, () =>  new Array<boolean>(9).fill(false));
        const boxes = Array.from({ length: 9}, () =>  new Array<boolean>(9).fill(false));

        for (let r = 0; r < 9; r++) {
            for( let c = 0; c < 9; c++) {
                const ch = board[r][c];
                if(ch == ".") continue;

                const d = Number(ch) - 1;
                const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if(rows[r][d] || cols[c][d] || boxes[b][d]) {
                    return false;
                }

                rows[r][d] = true;
                cols[c][d] = true;
                boxes[b][d] = true;
            }
        }
        return true;
    }
}
