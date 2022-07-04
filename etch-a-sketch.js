const container = document.getElementById('container');



for (let i = 0; i < 16; i++) {
    const divGrid = document.createElement('div');
    divGrid.classList.add('grid');
    divGrid.style.cssText = 'border: solid; width: 50px; height: 50px;'
    container.appendChild(divGrid)
}

