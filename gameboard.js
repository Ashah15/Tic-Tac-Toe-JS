const gameBoard = (() => {
  let board = new Array(9).fill(null);

  const updateBoard = (index, symbol) => {
    board[index] = symbol;
    return board;
  };

  const getBoard = () => board;

  const resetBoard = () => {
    board = new Array(9).fill(null);
    return board;
  };

  return {
    updateBoard,
    getBoard,
    resetBoard,
  };
})();

module.exports = { gameBoard };