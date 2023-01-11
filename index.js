function gameSetup() {
    addHoverListenerToCells();
    const restartButton = document.querySelector(".restart-button");
    restartButton.addEventListener("click", (restartGame));
    const cells = document.querySelectorAll(".board-square");
    for (let j = 0; j < cells.length; j++) {
        cells[j].addEventListener("click", () => {
            const c = j % 3;
            const i = (j - c)/3;
            if (board[i][c] === X || board[i][c] === O);
            else {
                board[i][c] = playerTurn;
                if (playerTurn === X) playerTurn = O;
                else playerTurn = X;
            } 
            drawBoard(board);
            checkWinner(board);
        });
    }
}

function addHoverListenerToCells() {
    const cells = document.querySelectorAll(".board-square");
    for (let e = 0; e < cells.length; e++) {
        cells[e].addEventListener("mouseover", () => {
            if (!cells[e].classList.contains("cell-x") && !cells[e].classList.contains("cell-o")) {
                if (playerTurn === X) {
                    cells[e].classList.add("x-hover");
                } else if (playerTurn === O) {
                    cells[e].classList.add("o-hover")
                }
            }
        })
        cells[e].addEventListener("mouseout", () => {
            cells[e].classList.remove("x-hover", "o-hover");
        })
    }
}

function drawBoard(board) {
    for (let i = 0; i < board.length; i++) {
        for (let c = 0; c < board[i].length; c++) {
            const cellIndex = i*3+c;
            const cells = document.querySelectorAll(".board-square");
            if (board[i][c] === X) {
                cells[cellIndex].classList.add("cell-x");
            } else if (board[i][c] === O) {
                cells[cellIndex].classList.add("cell-o");
            } else {
                cells[cellIndex].classList.remove("cell-o", "cell-x", "o-hover", "x-hover");
            }
        }
    }
}

function checkWinner(board) {
    const row = [
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]]
    ];
    const oWin = [O, O, O];
    const xWin = [X, X, X];
    for (let i = 0; i < row.length; i++) {
        if (row[i].toString() === oWin.toString() || row[i].toString() === xWin.toString()) {
            const winner = row[i][0];
            const slot = row[i];
            drawSlot(slot);
            scorePlayer(winner);
            disablePlay();
        }
    }
}

function drawSlot(slot) {
    console.log(slot);
}

function scorePlayer(winner) {
    if (winner === "x") {
        xScore++;
    } else {
        oScore++;
    }
    document.querySelector(".player1-score").textContent = xScore;
    document.querySelector(".player2-score").textContent = oScore;
}

function disablePlay() {
    const cells = document.querySelectorAll(".board-square");
    for (let i = 0; i < cells.length; i++) {
        cells[i].disabled = true;
    }
}

function restartGame() {
    console.log("here");
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    drawBoard(board);
    const cells = document.querySelectorAll(".board-square");
    for (let i = 0; i < cells.length; i++) {
        cells[i].disabled = false;
    }
}


let xScore = 0;
let oScore = 0;

const X = "x";
const O = "o";
let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let playerTurn = X;

gameSetup();