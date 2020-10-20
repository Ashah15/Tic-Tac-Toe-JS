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

module.exports = { playerFactory };