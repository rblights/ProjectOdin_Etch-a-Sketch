const GRID_SIZE_PERCENT = .75;
let sideLength = 16;

const SKETCHPAD = document.querySelector(".sketchPad");


const SKETCHPAD_DIMENSIONS =  Math.min(window.innerWidth, window.innerHeight) * GRID_SIZE_PERCENT;
SKETCHPAD.style.width = SKETCHPAD_DIMENSIONS + 'px';
SKETCHPAD.style.height = SKETCHPAD_DIMENSIONS + 'px';

function setCellColor (){
    this.style.backgroundColor = "black";
}

function createGridCells() {
    for (let i = 0; i < (sideLength * sideLength); i++) {
        const CELL = document.createElement("div");

        CELL.style.width = CELL.style.height = `${(SKETCHPAD_DIMENSIONS / sideLength)}px`;

        CELL.classList.add("cell");

        SKETCHPAD.appendChild(CELL);
        CELL.addEventListener("mouseover", setCellColor);
    }
}

createGridCells();