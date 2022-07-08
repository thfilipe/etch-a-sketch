let colour = "black";
let draw = false

function createGrid(size) {
    const board = document.getElementById('board');
    const boxs = board.querySelectorAll('div');
    boxs.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    const amount = size * size
    for (let i = 0; i < amount; i++) {
        let box = document.createElement('div');
        box.addEventListener('mouseover', boxColour); // colour box
        box.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", box);
    }
}


function changeGridSize(input) {
    if (input >= 2 && input <= 100) {
        createGrid(input);
    } else {
        alert("Please enter a number between 2-100");
    }

}

function boxColour() {
    if (draw) {
        if (colour === "rainbow") {
            this.style.backgroundColor = randomColour();
        } else {
            this.style.backgroundColor = colour;
        }
    }
}

function changeColour(change) {
    colour = change;
}

function randomColour() {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColour = randomNumber.padStart(6, 0);
    return `#${randColour.toUpperCase()}`
}

function reset() {
    createGrid(40);
}

// grid size buttons
function gridSize() {
    var value = document.getElementById('gridsize').value;
    return value;
}

// default grid
createGrid(40);

// enable drawing with click
document.getElementById('board').addEventListener('click', () => {
    draw = !draw;
});