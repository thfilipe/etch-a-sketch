let colour = "black";

function createGrid(size) {
    const board = document.getElementById('board');
    const boxs = board.querySelectorAll('div');
    boxs.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    const amount = size * size
    for (let i = 0; i < amount; i++) {
        let box = document.createElement('div');
        box.addEventListener('mouseover', boxColour); // colour box on mouseover
        box.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", box);
    }
}

createGrid(40)

function changeGridSize(input) {
    if (input >= 2 || input <= 100) {
        createGrid(input);
    } else {
        console.log("invalid input")
    }

}

function boxColour() {
    this.style.backgroundColor = colour;
}

function changeColour(change) {
    colour = change;
}




// const grid = document.querySelectorAll('.grid');

// grid.forEach(box => {
//     box.addEventListener('mouseover', function onClick(e) {
//         e.target.style.backgroundColor = 'salmon';
//     });

// });


