const Players = (e) => {
  const playerOne = 'ABC';
  const playerTwo = 'XYZ';
  const playersArray = [];
  playersArray.push(playerOne);
  playersArray.push(playerTwo);
  if (e) {
    e.preventDefault();
  }
  if (playerOne && playerTwo) {
    return true;
  }

  return false;
};

exports.Players = Players;