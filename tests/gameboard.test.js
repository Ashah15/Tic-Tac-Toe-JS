const { gameboard } = require('../main');

describe('gameboard', () => {
	it('returns a null board whenever the resetboard is called'() => {
    expect(gameboard()).toBe(true);
  });
}