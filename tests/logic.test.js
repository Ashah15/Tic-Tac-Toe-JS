import { logic } from '../logic';

describe('logic', () => {
  const board = new Array(9).fill(null);

  describe('while running checkMove', () => {
    it('returns true if the position is available', () => {
      expect(logic.checkMove(0, board)).toBe(true);
    });

    it('returns false if position is taken', () => {
      board[0] = 1;
      expect(logic.checkMove(0, board)).toBe(false);
    });
  });

  describe('while running checkWin', () => {
    const winningMove = [1, 2, 3];
    const losingMove = [9, 4, 6];

    it('returns true if player wins', () => {
      expect(logic.checkWin(winningMove)).toBe(true);
    });
    it('returns false if player has not yet won', () => {
      expect(logic.checkWin(losingMove)).toBe(false);
    });
  });

  describe('while running checkTie', () => {
    const tieBoard = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'X', 'O'];

    it('returns true if its a tie', () => {
      expect(logic.checkTie(tieBoard)).toBe(true);
    });

    it('returns false if its not a tie', () => {
      expect(logic.checkTie(board)).toBe(false);
    });
  });
});