const container = document.getElementById('container');


for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
        const divGrid = document.createElement('div');
        divGrid.classList.add('grid');
        divGrid.style.cssText = 'border: solid; width: 25px; height: 25px;'
        container.appendChild(divGrid)
    }
}
