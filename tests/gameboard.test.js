import { gameBoard } from '../gameboard';

describe('gameboard', () => {
  it('returns a null board whenever the resetboard is called', () => {
    expect(gameBoard.resetBoard()).toEqual([null, null, null, null, null, null, null, null, null]);
  });

  it('returns empty board when getBoard is called', () => {
  	expect(gameBoard.getBoard()).toEqual([null, null, null, null, null, null, null, null, null]);
  });

  it('returns an updated board when updateBoard is called', () => {
  	expect(gameBoard.updateBoard(5, 'x')).toEqual([null, null, null, null, null, 'x', null, null, null]);
  });
});