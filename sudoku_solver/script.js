// Sample puzzles for testing
const puzzles = {
    easy: [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ],
    medium: [
        [0, 2, 0, 6, 0, 8, 0, 0, 0],
        [5, 8, 0, 0, 0, 9, 7, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [3, 7, 0, 0, 0, 0, 5, 0, 0],
        [6, 0, 0, 0, 0, 0, 0, 0, 4],
        [0, 0, 8, 0, 0, 0, 0, 1, 3],
        [0, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 9, 8, 0, 0, 0, 3, 6],
        [0, 0, 0, 3, 0, 6, 0, 9, 0]
    ],
    hard: [
        [0, 0, 0, 0, 0, 0, 0, 1, 2],
        [0, 0, 0, 0, 0, 0, 7, 0, 0],
        [0, 0, 1, 0, 9, 5, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 8, 0, 3, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 3, 0, 0],
        [0, 0, 0, 2, 0, 0, 0, 0, 0]
    ]
};

let selectedCell = null;
let currentPuzzle = JSON.parse(JSON.stringify(puzzles.easy));

function createGrid() {
    const container = document.getElementById('sudoku-container');
    container.innerHTML = '';

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.classList.add('cell');
            input.dataset.row = row;
            input.dataset.col = col;

            if (currentPuzzle[row][col] !== 0) {
                input.value = currentPuzzle[row][col];
                input.classList.add('prefilled');
                input.readOnly = true;
            } else {
                input.addEventListener('focus', () => {
                    selectedCell = input;
                });

                input.addEventListener('input', (e) => {
                    const val = e.target.value;
                    if (!/^[1-9]$/.test(val)) {
                        e.target.value = '';
                    }
                });
            }

            container.appendChild(input);
        }
    }
}

function loadPuzzle(difficulty) {
    currentPuzzle = JSON.parse(JSON.stringify(puzzles[difficulty]));
    document.getElementById('message').textContent = '';
    createGrid();
}

function checkPuzzle() {
    const cells = document.querySelectorAll('.cell');
    let correct = true;

    cells.forEach(cell => {
        if (!cell.classList.contains('prefilled')) {
            const row = parseInt(cell.dataset.row);
            const col = parseInt(cell.dataset.col);
            const val = parseInt(cell.value);

            if (!val || !isValidEntry(row, col, val)) {
                cell.classList.add('invalid');
                correct = false;
            } else {
                cell.classList.remove('invalid');
            }
        }
    });

    document.getElementById('message').textContent = correct ? 'Puzzle Correct!' : 'Incorrect entries found.';
}

function isValidEntry(row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (i !== col && getCellValue(row, i) === num) return false;
        if (i !== row && getCellValue(i, col) === num) return false;
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
            if ((r !== row || c !== col) && getCellValue(r, c) === num) return false;
        }
    }
    return true;
}

function getCellValue(row, col) {
    const selector = `.cell[data-row="${row}"][data-col="${col}"]`;
    const cell = document.querySelector(selector);
    return cell && cell.value ? parseInt(cell.value) : 0;
}

function solvePuzzle() {
    const board = Array.from({ length: 9 }, (_, r) =>
        Array.from({ length: 9 }, (_, c) => getCellValue(r, c))
    );

    if (solveBoard(board)) {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            const row = parseInt(cell.dataset.row);
            const col = parseInt(cell.dataset.col);
            if (!cell.classList.contains('prefilled')) {
                cell.value = board[row][col];
                cell.classList.remove('invalid');
            }
        });
        document.getElementById('message').textContent = 'Puzzle Solved!';
    } else {
        document.getElementById('message').textContent = 'No solution found.';
    }
}

// Simple backtracking solver
function solveBoard(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isSafe(board, row, col, num)) {
                        board[row][col] = num;
                        if (solveBoard(board)) return true;
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isSafe(board, row, col, num) {
    for (let x = 0; x < 9; x++) {
        if (board[row][x] === num || board[x][col] === num) return false;
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
            if (board[r][c] === num) return false;
        }
    }
    return true;
}
function generateRandomPuzzle(difficulty) {
    // Step 1: Generate a fully solved board
    let board = Array.from({ length: 9 }, () => Array(9).fill(0));
    fillDiagonalBlocks(board);
    solveBoard(board);

    // Step 2: Remove cells based on difficulty
    let cellsToRemove;
    if (difficulty === 'easy') cellsToRemove = 41;
    else if (difficulty === 'medium') cellsToRemove = 51;
    else cellsToRemove = 61;

    while (cellsToRemove > 0) {
        let row = Math.floor(Math.random() * 9);
        let col = Math.floor(Math.random() * 9);
        if (board[row][col] !== 0) {
            board[row][col] = 0;
            cellsToRemove--;
        }
    }

    currentPuzzle = JSON.parse(JSON.stringify(board));
    document.getElementById('message').textContent = `Generated ${difficulty} puzzle`;
    createGrid();
}

// Fill diagonal 3x3 blocks to start with a partially filled valid board
function fillDiagonalBlocks(board) {
    for (let i = 0; i < 9; i += 3) {
        fillBlock(board, i, i);
    }
}

function fillBlock(board, row, col) {
    let nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            board[row + r][col + c] = nums.pop();
        }
    }
}

// Fisher-Yates shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// Initialize with Easy Puzzle
window.onload = () => loadPuzzle('easy');
