import { playerFactory } from '../player-factory';

describe('playerFactory', () => {
  const pFactory = playerFactory('Asha', 'X');

  describe('getName', () => {
    it('returns the player name', () => {
      expect(pFactory.getName()).toBe('Asha');
    });
  });

  describe('getSymbol', () => {
    it('returns the player symbol', () => {
      expect(pFactory.getSymbol()).toBe('X');
    });
  });

  describe('getPlayerMoves', () => {
    it('returns the players moves', () => {
      expect(pFactory.getPlayerMoves()).toEqual([]);
    });
  });

  describe('addMove', () => {
    it('modifies and returns player moves', () => {
      expect(pFactory.addMove(1)).toEqual(1);
      expect(pFactory.addMove(2)).toEqual(2);
    });
  });

  describe('resetPlayerMoves', () => {
    it('resets the player moves', () => {
      pFactory.resetPlayerMoves();
      expect(pFactory.getPlayerMoves()).toEqual([]);
    });
  });
});