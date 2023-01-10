const X = "x";
const O = "o";

const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let playerTurn = X;

function gameSetup() {
    const cells = document.querySelectorAll(".board-square");
    for (let j = 0; j < cells.length; j++) {
        cells[j].addEventListener("click", () => {
            const c = j % 3;
            const i = (j - c)/3;
            board[i][c] = playerTurn;
            drawBoard(board);
            if (playerTurn === X) playerTurn = O;
            else playerTurn = X;
        });
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
            }
        }
    }
}

gameSetup();