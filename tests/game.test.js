jest.mock('../game');
const { game } = require('../game');

describe('game', () => {
  describe('start', () => {
    it('should run start', () => {
      expect(game.game.start()).toBe(undefined);
    });
  });

  describe('reset', () => {
    it('should run reset', () => {
      expect(game.game.reset()).toBe(undefined);
    });
  });
});