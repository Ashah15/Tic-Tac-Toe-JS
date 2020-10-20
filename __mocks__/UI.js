const UI = (() => {
  const messageContainer = {innerHTML: ''}
  const boxes = [{innerHTML: ''},{innerHTML: ''},{innerHTML: ''},
                 {innerHTML: ''},{innerHTML: ''},{innerHTML: ''},
                 {innerHTML: ''},{innerHTML: ''},{innerHTML: ''}]

  const updateBox = (index, symbol) => {
    (boxes[index].innerHTML = symbol);
    return boxes
  };

  const showWelcomeMessage = () => {
    messageContainer.innerHTML = 'Welcome to the Tic Tac Toe game!';
    return messageContainer.innerHTML
  };

  const showEndMessage = (status, playerName) => {
    let msg = 'Game Over. ';

    status === 'Win' ? msg += `Player ${playerName} Won!` : msg += 'It was a Tie!'; // eslint-disable-line no-unused-expressions

    messageContainer.innerHTML = msg;
    return messageContainer.innerHTML
  };

  const showInvalidMoveMessage = () => {
    messageContainer.innerHTML = 'Invalid move. Try again';
    return messageContainer.innerHTML
  };

  const showPlayerTurnMessage = (name) => {
    messageContainer.innerHTML = `It's your turn player ${name}, make a move`;
    return messageContainer.innerHTML
  };

  const resetDOM = () => {
    messageContainer.innerHTML = '';
    boxes.forEach((box) => {
      box.innerHTML = '';
    });
    return boxes
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