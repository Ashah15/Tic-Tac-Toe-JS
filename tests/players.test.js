jest.mock('../main');
const { Players } = require('../main');

describe('Players', () => {
  it('returns true when names are valid', () => {
    expect(Players()).toBe(true);
  });

  it('returns false when event is provided', () => {
    expect(Players({ preventDefault: () => false }));
  });
});
