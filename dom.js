const domContent = () => {
  
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

  const setPlayers = () => {
  const playerOne = document.getElementById('player-one-input').value;
  const playerTwo = document.getElementById('player-two-input').value;
  
 };

 const gamePlayers = () => {
  document.querySelector('.modal-players').classList.add('hide-players');
  document.querySelector('.general-section').classList.remove('hide-section');
  document.querySelector('.first-player-name').innerHTML = playerOne;
  document.querySelector('.second-player-name').innerHTML = playerTwo;
 };

 return {setPlayers, gamePlayers}

  const buttons = () => {
   const boxes = document.querySelectorAll('.grid-item');
   const startBtn = document.querySelector('.start-btn');
   const resetBtn = document.querySelector('.reset-btn');
  };

  window.onload = () => {
  // const modal = document.querySelector('.modal');
  const startBtn = document.querySelector('.start-btn');
  const resetBtn = document.querySelector('.reset-btn');

  document.getElementById('add-players-btn').addEventListener('click', Players);

  startBtn.addEventListener('click', game.start);

  resetBtn.addEventListener('click', () => {
    game.reset();
    game.start();
  });
 };

 return {buttons, window.onload}

};