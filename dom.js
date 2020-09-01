let playersArray = [];
const Players = (e) => {

  const playerOne = document.getElementById('player-one-input').value;
  const playerTwo = document.getElementById('player-two-input').value;
  playersArray.push(playerOne);
  playersArray.push(playerTwo);

  // console.log(playerOne,playerTwo)
  if (playerOne && playerTwo) {
    document.querySelector('.modal-players').classList.add('hide-players');
    document.querySelector('.general-section').classList.remove('hide-section');
    document.querySelector('.first-player-name').innerHTML = playerOne;
    document.querySelector('.second-player-name').innerHTML = playerTwo;
  }

  // This is one way to fix it, by preventing the default behaviour
  e.preventDefault();

  // This is the second way of preventing the issue, it will cancel the submit event of
  // the form
  return false;

};