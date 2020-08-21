const Players = () => {
  const playerOne = document.getElementById('player-one-input').value;
  const playerTwo = document.getElementById('player-two-input').value;
  playersArray.push(playerOne);
  playersArray.push(playerTwo);
  if (playerOne && playerTwo) {
    document.querySelector('.players-form').classList.add('hide-players');
    document.querySelector('.general-section').classList.remove('hide-section');
    document.querySelector('.first-player-name').innerHTML = playerOne;
    document.querySelector('.second-player-name').innerHTML = playerTwo;
  }
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

const UI = (() => {
  const messageContainer = document.querySelector('.system-message');
  const boxes = document.querySelectorAll('.grid-item');

  const updateBox = (index, symbol) => {
    (boxes[index].innerHTML = symbol);
  };

  const showWelcomeMessage = () => {
    messageContainer.innerHTML = 'Welcome to the Tic Tac Toe game!';
  };

  const showEndMessage = (status, playerName) => {
    let msg = 'Game Over. ';

    status === 'Win' ? msg += `Player ${playerName} Won!` : msg += 'It was a Tie!'; // eslint-disable-line no-unused-expressions

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
    boxes.forEach((box) => {
      box.innerHTML = '';
    });
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
  const boxes = document.querySelectorAll('.grid-item');
  const startBtn = document.querySelector('.start-btn');
  const resetBtn = document.querySelector('.reset-btn');
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

window.onload = () => {
  const modal = document.querySelector('.modal');
  const startBtn = document.querySelector('.start-btn');
  const resetBtn = document.querySelector('.reset-btn');
  startBtn.addEventListener('click', game.start);
  resetBtn.addEventListener('click', () => {
    game.reset();
    game.start();
  });
};
