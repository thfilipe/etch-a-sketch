function createGrid() {
    const board = document.getElementById('board');
    board.style.gridTemplateColumns = 'repeat(16, 1fr)'
    board.style.gridTemplateRows = 'repeat(16, 1fr)'

    for (let i = 0; i < 256; i++) {
        let box = document.createElement('div');
        box.style.backgroundColor = "red";
        board.insertAdjacentElement("beforeend", box);
    }
}
createGrid()
// create 16 by 16 boxes
//for (let i = 0; i < 16; i++) {
// for (let i = 0; i < 16; i++) {
//     const box = document.createElement('div');
//     box.classList.add('column');
//     box.style.cssText = 'height: 50px; width: 50px; background-color: blue;';
//     board.appendChild(box);
// }
//}





// const grid = document.querySelectorAll('.grid');

// grid.forEach(box => {
//     box.addEventListener('mouseover', function onClick(e) {
//         e.target.style.backgroundColor = 'salmon';
//     });

// });


