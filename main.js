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