import { gameBoard } from '../gameboard';

describe('gameboard', () => {
  it('returns a null board whenever the resetboard is called', () => {
    expect(gameBoard.getBoard()).toEqual([null, null, null, null, null, null, null, null, null]);
  });
});