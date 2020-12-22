// RULE: If you only need one of something (gameboard) use a module
// RULE: If you need multiples, create them with factory functions
// player one has tacks, player 2 has tics, squares are toes

// **************************REQUIREMENT 1.*********************************************************************************************************
// COMPLETE
"use strict";

// **************************REQUIREMENT 2.*********************************************************************************************************
// Create These Three OBJECTS

// 1. Gameboard
// Stored as an array inside a gameboard object
// ????? Is gameboard THE OBJECT that should be returned by the factory method????
const gameBoard = {

    gameBoardArr: [x,o,x,o,x,o,x,o,x],
    sq0: gameBoard.gameBoardArr[0],
    sq1: gameBoard.gameBoardArr[1],
    sq2: gameBoard.gameBoardArr[2],
    sq3: gameBoard.gameBoardArr[3],
    sq4: gameBoard.gameBoardArr[4],
    sq5: gameBoard.gameBoardArr[5],
    sq6: gameBoard.gameBoardArr[6],
    sq7: gameBoard.gameBoardArr[7],
    sq8: gameBoard.gameBoardArr[8],
}

// 2. Players
// Player objects in games should encapsulate all of the actions a player can do (functions)
// Player objects in games should encapsulate the player description
const player = (name, ) => {
    return {name: name, move:move, }
}

// 3. Display Controller
// controls flow of game
// make board accessible to demarcation
// alternate player turns
const displayController {

}


// **************************REQUIREMENT 3.**********************************************************************************************************
// Function: Render Gameboard array to DOM
// probably easier to unrender then render updated array
// sq1 = gameBoardArr[1].........



// **************************REQUIREMENT 4.**********************************************************************************************************
// Functions that allow players to demarcate squares on the gameboard

// Now tie those functions to the DOM

// Click on the gameboard causes demarcation

// Prevent double demarcation of square

//*Note* Think carefully. About where each block of logic should reside. Brainstorming here will make life easier later
//



// **************************REQUIREMENT 5.**********************************************************************************************************
// Logic to identify winning conditions

// An array of winning conditions
const winners = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
// Identify 3 in a row or a tie



// **************************REQUIREMENT 6.**********************************************************************************************************
// User input for player names

// Reset button

// Congratulate winner with a display element