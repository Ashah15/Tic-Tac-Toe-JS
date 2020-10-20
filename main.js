import { Players } from './players';

const game = require('./game');

window.onload = () => {
  const startBtn = document.querySelector('.start-btn');
  const resetBtn = document.querySelector('.reset-btn');

  document.getElementById('add-players-btn').addEventListener('click', Players);

  startBtn.addEventListener('click', game.start);

  resetBtn.addEventListener('click', () => {
    game.reset();
    game.start();
  });
};
