const container = document.getElementById('container');


for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
        const box = document.createElement('div');
        box.classList.add('grid');
        box.style.cssText = 'border: solid; width: 25px; height: 25px;';
        container.appendChild(box);
    }
}

const grid = document.querySelectorAll('.grid');

grid.forEach(box => {
    box.addEventListener('click', function onClick(e) {
        e.target.style.backgroundColor = 'salmon';
    });
});
// const colorGrid = document.querySelector('div');
// colorGrid.addEventListener('click', function onClick(e) {
//     e.target.style.backgroundColor = 'salmon';
// });