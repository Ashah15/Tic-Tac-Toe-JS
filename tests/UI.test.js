jest.mock('../UI');
const { UI } = require('../UI');

describe('UI', () => {
  describe('showWelcomeMessage', () => {
	  it('returns welcome to the Tic Tac Toe game', () => {
      expect(UI.showWelcomeMessage()).toBe('Welcome to the Tic Tac Toe game!');
    });
  });

  describe('showInvalidMoveMessage', () => {
	  it('returns Invalid move', () => {
      expect(UI.showInvalidMoveMessage()).toBe('Invalid move. Try again');
    });
  });

  describe('showPlayerTurnMessage', () => {
	  it('returns Its your turn player ${name}, make a move', () => {
      expect(UI.showPlayerTurnMessage('Moin')).toBe('It\'s your turn player Moin, make a move');
    });
  });

  describe('showEndMessage', () => {
	  it('returns end message of the game', () => {
      expect(UI.showEndMessage('Win', 'Moin')).toBe('Game Over. Player Moin Won!');
    });
  });

  describe('resetDOM', () => {
	  it('resets the dom', () => {
      expect(UI.resetDOM()).toEqual([{ innerHTML: '' }, { innerHTML: '' }, { innerHTML: '' },
        { innerHTML: '' }, { innerHTML: '' }, { innerHTML: '' },
        { innerHTML: '' }, { innerHTML: '' }, { innerHTML: '' }]);
    });
  });


  describe('updateBox', () => {
	  it('returns the updated box', () => {
      expect(UI.updateBox(3, 'O')).toEqual([{ innerHTML: '' }, { innerHTML: '' }, { innerHTML: '' },
        { innerHTML: 'O' }, { innerHTML: '' }, { innerHTML: '' },
        { innerHTML: '' }, { innerHTML: '' }, { innerHTML: '' }]);
    });
  });
});
