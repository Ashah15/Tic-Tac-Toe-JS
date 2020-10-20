jest.mock('../UI')
const { UI } = require('../UI');

describe ('UI', () => {
	it('returns welcome to the Tic Tac Toe game', () => {
		// const message = jest.fn((selector) => {
		// 	if (selector === '.system-message'){
		// 	return {
		// 		innerHTML: ''
		// 	}
		// }
		// })
		// Object.defineProperty(global.document, 'querySelector', { value: message});
    expect(UI.showWelcomeMessage()).toBe('Welcome to the Tic Tac Toe game!');
  });
})