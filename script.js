const grid = document.querySelector('.grid-container')
const colorPicker = document.querySelector('.change-color')
const eraser = document.querySelector('.eraser')
const del = document.querySelector('.delete')
const draw = document.querySelector('.draw');

function createGrid() {
    for (let i = 0; i < 32; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('.grid-element')
        grid.appendChild(gridElement)
    }
}



window.onload = () => {
    createGrid()
}

