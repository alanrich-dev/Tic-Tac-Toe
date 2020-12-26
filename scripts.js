// Three Factory Functions Required: Player, GameBoard, GameLogic
// GameBoard and GameLogic objects will be IIFE or it wont work

// **************************REQUIREMENT 1. The Players****************************************************

const player = (name, marker) => {
    return {name: name, marker: marker }
}

// **************************REQUIREMENT 2. Gameboard Object***********************************************

const gameBoard = (() => {
    
    // Generate board array
    let gameBoardArr = [];
    //  WHY NOT (let i = 0)
    for (i = 0; i < 9; i++) {
        gameBoardArr.push('');
    }

    // Render a Square for each array item
    let squares = document.querySelector('.squares');
    
    gameBoardArr.forEach(() => {
        const square = document.createElement('div');
        square.className = 'square';
        squares.appendChild(square);
    })

    // Listen to the squares and update board according to rules of game
    Array.from(squares.children).forEach((square, index) => {
        square.addEventListener('click', () => {
            // demarcate the selected square
            // is this classlist.add()syntax kosher
            square.classList.add(gameLogic.activePlayer.marker);
            square.setAttribute('data', gameLogic.activePlayer.marker);
            // update the selected square's corresponding array value to that of active player
            gameBoardArr[index] = gameLogic.activePlayer.marker;
            // remove eventListener from the demarcated square
            square.style.pointerEvents = 'none';
            // update the Number of Spots remaining
            gameLogic.squaresRemaining -= 1;
            // check for a winner
            gameLogic.checkForWinner();
            // No winner? Ok, do we have a tie or can we keep playing?
            if (gameLogic.winnerExists === false) {
                if (gameLogic.squaresRemaining > 0) {
                    gameLogic.alertNextPlayer();
                    gameLogic.changeActivePlayer();
                } else {
                    gameLogic.declareDraw()
                }
            }
        })
    });
    // Only the array is accessible, everything else in the gameBoard is controlled by the array values
    return {gameBoardArr, squares};
})();

// **************************REQUIREMENT 3. GameLogic******************************************************

const gameLogic = (() => {
   
    // Declare Players
    // Can we transfer this to gameBoard???? Its not really part of the logic
    const player1 = player('Player 1', 'X');
    const player2 = player('Player 2', 'O');
   
    // Declare starting point...who's active, is there a winner, open spots remaining?
    let activePlayer = player1;
    let winnerExists = false;
    let squaresRemaining = 9;

    // Communicate game info to players
    let subtitle = document.querySelector('.subtitle'); // displays results (win or draw)
    let activePlayerAlert = document.querySelector('.activePlayerAlert'); // display whose turn it is

    // Define winning conditions
    const winners = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    // Check for a winner
    function checkForWinner() {
        winners.forEach((item/*, index */) => {
            // 
            if (gameBoard.gameBoardArr[item[0]] === this.activePlayer.marker && gameBoard.gameBoardArr[item[1]] === this.activePlayer.marker && gameBoard.gameBoardArr[item[2]] === this.activePlayer.marker) {
                subtitle.innerHTML = `${this.activePlayer.name} is the winner`;
                this.winnerExists = true;
                gameBoard.squares.style.pointerEvents = 'none';
            }
        })
    }

    // alert next player that it is their move 
    function alertNextPlayer(){
        this.activePlayer === player1 ? activePlayerAlert.textContent = 'Player 2' : activePlayerAlert.textContent = 'Player 1';
    }

    // activate the player whose turn it is
    function changeActivePlayer(){
        this.activePlayer === player1 ? this.activePlayer = player2 : this.activePlayer = player1;
    } // YOU REALLY DO NOT UNDERSTAND "THIS", DONT FOOL YOURSELF

    // declare a draw
    function declareDraw(){
        subtitle.innerText = "It's a draw, particaption trophies for all"
    }

    // rmake these available 
    return {
        activePlayer,
        squaresRemaining,
        checkForWinner,
        alertNextPlayer,
        changeActivePlayer,
        declareDraw,
        winnerExists,
    }

})();