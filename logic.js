const logicContent = () => {
	
  const Players = (e) => {
  playersArray.push(playerOne);
  playersArray.push(playerTwo);

  // console.log(playerOne,playerTwo)
  if (playerOne && playerTwo) {
  }

  return {playerOne, playerTwo}

  // This is one way to fix it, by preventing the default behaviour
  e.preventDefault();

  // This is the second way of preventing the issue, it will cancel the submit event of
  // the form
  return false;
};

  const gameBoard = (() => {
  let board = new Array(9).fill(null);

  const updateBoard = (index, symbol) => {
    board[index] = symbol;
  };

  const getBoard = () => board;

  const resetBoard = () => {
    board = new Array(9).fill(null);
  };

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
    for (let i = 0; i < winningCombinations.length; i += 1) {
      const set = winningCombinations[i];
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

 const playerFactory = (playerName, playerSymbol) => {
  const name = playerName;
  const symbol = playerSymbol;
  let playerMoves = [];
  const getName = () => name;
  const getSymbol = () => symbol;
  const getPlayerMoves = () => playerMoves;
  const addMove = (move) => playerMoves.push(move);

  const resetPlayerMoves = () => {
    playerMoves = [];
  };

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

  let currentPlayer = player1;
  let symbol = currentPlayer.getSymbol();

  const toggleCurrentPlayer = () => {
    /* eslint-disable no-unused-expressions */
    currentPlayer === player1 ? (currentPlayer = player2) : (currentPlayer = player1);
    /* eslint-enable no-unused-expressions */
    symbol = currentPlayer.getSymbol();
  };

  const makeAMove = (e) => {
    const index = parseInt(e.target.id, 10);
    const board = gameBoard.getBoard();

    if (logic.checkMove(index, board)) {
      currentPlayer.addMove(index + 1);
      UI.updateBox(index, symbol);
      gameBoard.updateBoard(index, symbol);

      return true;
    }

    UI.showInvalidMoveMessage();

    return false;
  };


  const stop = () => {
    boxes.forEach((box) => {
      box.classList.add('disabled');
    });
    startBtn.classList.toggle('disabled');
    resetBtn.classList.add('disabled');
  };

  const handleClick = (e) => {
    if (makeAMove(e)) {
      const moves = currentPlayer.getPlayerMoves();
      const board = gameBoard.getBoard();

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
}  
