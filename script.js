const initialColor = 'rgb(63, 62, 62)'
const initialMode = 'draw';

const grid = document.querySelector('.grid-container')
const colorPicker = document.querySelector('.change-color')
const eraser = document.querySelector('.eraser')
const clear = document.querySelector('.clear')
const draw = document.querySelector('.draw')
let currentColor = initialColor
let currentMode = initialMode

draw.onclick = () => setMode("draw")
eraser.onclick = () => setMode("eraser")
clear.onclick = () => reload()

colorPicker.oninput = (e) => setColor(e.target.value)

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)



function createGrid() {
    for (let i = 0; i < 16*16; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('.grid-element')
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement)
    }
}

function changeColor(e) {
    if(!mouseDown&& e.type==="mouseover") return;
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
    gridElement.target.style.backgroundColor="white"
}

function reload(){
    clearGrid()
    createGrid()
}

function activeButt(newMode) {
    if(newMode==="draw"){
        draw.classList.add('active')
        eraser.classList.remove('active')
    }
    else if(newMode==="eraser"){
        eraser.classList.add('active')
        draw.classList.remove('active')
    }

}

window.onload = () => {
    createGrid()
    activeButt(initialMode)
}

