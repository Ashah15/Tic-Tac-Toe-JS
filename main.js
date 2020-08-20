const gameBoard = (() => {
	let board = new Array(9).fill(null);

	const updateBoard = (index, symbol) => {
		board[index] = symbol;
	};

	const getBoard = () => board;

	const resetBoard = () => (board = new Array(9).fill(null));

	return {
		updateBoard,
		getBoard,
		resetBoard,
	};
})();

// Logic Module
const logic = (() => {
    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ];
    const checkMove = (index, board) => board[index] === null;
    const checkWin = (playerMoves) => {
        let win = false;
        for (let i = 0; i < winningCombinations.length; i++) {
            let set = winningCombinations[i];
            win = set.every((num) => playerMoves.includes(num));
            if (win) break;
        }
        return win;
    };
    const checkTie = (board) => !board.includes(null);
    return {
        checkMove,
        checkWin,
        checkTie,
    };
})();
