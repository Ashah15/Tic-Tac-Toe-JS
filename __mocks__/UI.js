const UI = (() => {
  const messageContainer = {innerHTML: ''}
  const boxes = document.querySelectorAll('.grid-item');

  const updateBox = (index, symbol) => {
    (boxes[index].innerHTML = symbol);
  };

  const showWelcomeMessage = () => {
    messageContainer.innerHTML = 'Welcome to the Tic Tac Toe game!';
    return messageContainer.innerHTML
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

exports.UI = UI;