// import domContent from './dom'
// import logicContent from './logic'

let domContentInstance = domContent()
domContentInstance.UI()

let logicContentInstance = logicContent()
logicContentInstance.logic()

let domContent = [];
let gameBoard = [];
const playersArray = [];
let playerOneMoves = [];
let playerTwoMoves = [];
let newArr = [];


domContent.updateBox()
domContent.showWelcomeMessage()
domContent.showEndMessage()
domContent.showInvalidMoveMessage()
domContent.showPlayerTurnMessage()
domContent.resetDOM()
domContent.setPlayers()
domContent.gamePlayers()
domContent.buttons()
domContent.window.onload()

logicContent.Players()
logicContent.gameBoard()
logicContent.logic()
logicContent.playerFactory()
logicContent.game()

