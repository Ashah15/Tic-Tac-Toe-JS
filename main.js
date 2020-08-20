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

const UI = (() => {
	const messageContainer = document.querySelector('.system-message');
	const boxes = document.querySelectorAll('.grid-item');

	const updateBox = (index, symbol) => (boxes[index].innerHTML = symbol);

	const showWelcomeMessage = () => {
		messageContainer.innerHTML = 'Welcome to the Tic Tac Toe game!';
	};

	const showEndMessage = (status, playerName) => {
		let msg = 'Game Over. ';

		status === 'Win' ? (msg += `Player ${playerName} Won!`) : (msg += 'It was a Tie!');

		messageContainer.innerHTML = msg;
	};

	const showInvalidMoveMessage = () => {
		messageContainer.innerHTML = 'Invalid move. Try again';
	};

	const showPlayerTurnMessage = (name) => {
		messageContainer.innerHTML = `It's your turn player ${name}, make a move`;
	};

	const resetDOM = () => {
		messageContainer.innerHTML = '';
		boxes.forEach((box) => (box.innerHTML = ''));
	};

	return {
		updateBox,
		showWelcomeMessage,
		showEndMessage,
		showInvalidMoveMessage,
		showPlayerTurnMessage,
		resetDOM,
	};
})();

const playerFactory = (playerName, playerSymbol) => {
    const name = playerName;
    const symbol = playerSymbol;
    let playerMoves = [];
    const getName = () => name;
    const getSymbol = () => symbol;
    const getPlayerMoves = () => playerMoves;
    const addMove = (move) => playerMoves.push(move);
    const resetPlayerMoves = () => (playerMoves = []);
    return {
        getName,
        getSymbol,
        getPlayerMoves,
        addMove,
        resetPlayerMoves,
    };
};

const game = (() => {
	const player1 = playerFactory('One', 'X');
	const player2 = playerFactory('Two', 'O');
	const boxes = document.querySelectorAll('.grid-item');
	const startBtn = document.querySelector('.start-btn');
	const resetBtn = document.querySelector('.reset-btn');
	let currentPlayer = player1;
	let symbol = currentPlayer.getSymbol();

	const toggleCurrentPlayer = () => {
		currentPlayer == player1 ? (currentPlayer = player2) : (currentPlayer = player1);
		symbol = currentPlayer.getSymbol();
	};

	const makeAMove = (e) => {
		const index = parseInt(e.target.id);
		let board = gameBoard.getBoard();
		console.log('in the method');
		if (logic.checkMove(index, board)) {
			currentPlayer.addMove(index + 1);
			UI.updateBox(index, symbol);
			gameBoard.updateBoard(index, symbol);
			console.log('good check');
			return true;
		} else {
			UI.showInvalidMoveMessage();
			console.log('bad check');
			return false;
		}
	};

	const handleClick = (e) => {
		if (makeAMove(e)) {
			let moves = currentPlayer.getPlayerMoves();
			let board = gameBoard.getBoard();

			if (logic.checkWin(moves)) {
				UI.showEndMessage('Win', currentPlayer.getName());
				stop();
			} else if (logic.checkTie(board)) {
				UI.showEndMessage('Tie', currentPlayer.getName());
				stop();
			} else {
				toggleCurrentPlayer();
				UI.showPlayerTurnMessage(currentPlayer.getName());
			}
		}
	};

	const stop = () => {
		boxes.forEach((box) => {
			box.classList.add('disabled');
		});
		startBtn.classList.toggle('disabled');
		resetBtn.classList.add('disabled');
	};

	const reset = () => {
		gameBoard.resetBoard();
		UI.resetDOM();
		player1.resetPlayerMoves();
		player2.resetPlayerMoves();
		boxes.forEach((box) => {
			box.classList.remove('disabled');
			box.removeEventListener('click', handleClick);
		});
	};

	const start = () => {
		reset();
		UI.showWelcomeMessage();
		setTimeout(() => {
			UI.showPlayerTurnMessage(currentPlayer.getName());
		}, 2000);

		startBtn.classList.add('disabled');
		resetBtn.classList.remove('disabled');

		boxes.forEach((box) => {
			box.addEventListener('click', handleClick);
		});
	};

	return {
		start,
		reset,
	};
})();

window.onload = () => {
	const startBtn = document.querySelector('.start-btn');
	const resetBtn = document.querySelector('.reset-btn');
	startBtn.addEventListener('click', game.start);
	resetBtn.addEventListener('click', () => {
		game.reset();
		game.start();
	});
};
