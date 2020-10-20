const game = (() => {
  const gameBoard = {
    resetBoard: () => true,
  };

  const boxes = [{ innerHTML: '' }, { innerHTML: '' }, { innerHTML: '' },
    { innerHTML: '' }, { innerHTML: '' }, { innerHTML: '' },
    { innerHTML: '' }, { innerHTML: '' }, { innerHTML: '' }];

  const UI = {
    resetDOM: () => true,
    showWelcomeMessage: () => true,
  };

  const Player = () => ({
    resetPlayerMoves: () => true,
  });

  const player1 = Player();
  const player2 = Player();

  const reset = () => {
    gameBoard.resetBoard();
    UI.resetDOM();
    player1.resetPlayerMoves();
    player2.resetPlayerMoves();
    // eslint-disable-next-line no-unused-vars
    boxes.forEach((box) => {
      box = { innerHTML: '' };
    });
  };

  const start = () => {
    reset();
    UI.showWelcomeMessage();
  };

  return {
    start,
    reset,
  };
})();

exports.game = { game };