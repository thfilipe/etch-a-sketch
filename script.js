function createGrid(size) {
    const board = document.getElementById('board');
    const boxs = board.querySelectorAll('div');
    boxs.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    const amount = size * size
    for (let i = 0; i < amount; i++) {
        let box = document.createElement('div');
        box.style.backgroundColor = "red";
        board.insertAdjacentElement("beforeend", box);
    }
}

createGrid(40)

function changeSize(input) {
    if (input >= || input <= 100) {
        createGrid(input);
    }

}





// const grid = document.querySelectorAll('.grid');

// grid.forEach(box => {
//     box.addEventListener('mouseover', function onClick(e) {
//         e.target.style.backgroundColor = 'salmon';
//     });

// });


