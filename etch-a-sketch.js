const container = document.getElementById('container');

// create 16 by 16 boxes
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
    box.addEventListener('mouseover', function onClick(e) {
        e.target.style.backgroundColor = 'salmon';
    });

});

