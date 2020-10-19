const Players = (e) => {
  const playerOne = document.getElementById('player-one-input').value;
  const playerTwo = document.getElementById('player-two-input').value;
  const playersArray = [];
  playersArray.push(playerOne);
  playersArray.push(playerTwo);

  if (playerOne && playerTwo) {
    document.querySelector('.modal-players').classList.add('hide-players');
    document.querySelector('.general-section').classList.remove('hide-section');
    document.querySelector('.first-player-name').innerHTML = playerOne;
    document.querySelector('.second-player-name').innerHTML = playerTwo;
  }

  e.preventDefault();

  return false;
};

module.exports = Players;