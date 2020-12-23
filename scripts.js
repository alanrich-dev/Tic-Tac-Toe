// RULE: If you only need one of something (gameboard) use a module
// RULE: If you need multiples, create them with factory functions

// 3 Factory Functions Needed: Player, Gameboard, Game
// Board and game will be IIFE or it wont work

// **************************REQUIREMENT 1.*********************************************************************************************************
// COMPLETE
"use strict";

// **************************REQUIREMENT 2.*********************************************************************************************************
// Create These Three OBJECTS

// 1. Players
const player = (name, marker) => {
    return {name: name, marker: marker }
}

// 2. Gameboard
const gameBoard = (() {
    // Generate board array
    let gameBoardArr = [x,o,x,o,x,o,x,o,x];
    for (let i = 0; i < 9; i++) {
        gameBoardArr.push('')
    }
    // Render a Square for each array item

    // Listen to the squares and update board according to rules of game
})();

// 3. Game
const game = (() => {
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

})();