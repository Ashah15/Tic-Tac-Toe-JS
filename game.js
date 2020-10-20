import { playerFactory } from './player-factory';
import { gameBoard } from './gameboard';
import { logic } from './logic';
import { UI } from './UI';

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
    // reset();
    // UI.showWelcomeMessage();
    // setTimeout(() => {
    //   UI.showPlayerTurnMessage(currentPlayer.getName());
    // }, 2000);

    startBtn.classList.add('disabled');
    resetBtn.classList.remove('disabled');

    // boxes.forEach((box) => {
    //   box.addEventListener('click', handleClick);
    // });
  };

  return {
    start,
    reset,
  };
})();

exports.game = game;