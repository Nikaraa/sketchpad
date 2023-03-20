const initialColor = 'rgb(63, 62, 62)'
const initialMode = 'draw'
const initialSize = 16


const sizeValue = document.querySelector('.size-value')

const size = document.querySelector('.size')
const grid = document.querySelector('.grid-container')
const colorPicker = document.querySelector('.change-color')
const eraser = document.querySelector('.eraser')
const clear = document.querySelector('.clear')
const draw = document.querySelector('.draw')
let currentColor = initialColor
let currentMode = initialMode
let currentSize = initialSize

draw.onclick = () => setMode("draw")
eraser.onclick = () => setMode("eraser")
clear.onclick = () => reload()

size.onmousemove = (e) => updateDiv(e.target.value)
size.onchange = (e) => updateSize(e.target.value)
colorPicker.oninput = (e) => setColor(e.target.value)

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function setSize(newSize) {
    currentSize = newSize
}

function updateSize(value) {
    setSize(value)
    reload()
}

function updateDiv(value) {
    sizeValue.textContent = `${value}x${value}`
}

function createGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('.grid-element')
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement)
        sizeValue.textContent=gridSize+"x"+gridSize
    }
}

function changeColor(e) {
    if (!mouseDown && e.type === "mouseover") return;
    if (currentMode === "draw") {
        e.target.style.backgroundColor = currentColor
    }
    else if (currentMode === "eraser") {
        e.target.style.backgroundColor = "white"
    }
}

function setMode(newMode) {
    currentMode = newMode
    activeButt(newMode)
}

function setColor(newColor) {
    currentColor = newColor
}

function clearGrid() {
    grid.innerHTML = ""
}

function reload() {
    clearGrid()
    createGrid(currentSize)
}

function activeButt(newMode) {
    if (newMode === "draw") {
        draw.classList.add('active')
        eraser.classList.remove('active')
    }
    else if (newMode === "eraser") {
        eraser.classList.add('active')
        draw.classList.remove('active')
    }

}

window.onload = () => {
    createGrid(initialSize)
    activeButt(initialMode)
}

