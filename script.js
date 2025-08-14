const GRID_SIZE_PERCENT = .75;
const BUTTONS = document.querySelectorAll("button")
const SKETCHPAD = document.querySelector(".sketchPad");
const SLIDERBAR = document.querySelector(".sliderBar");
const SLIDER_VALUE = document.querySelector(".sliderValue");
const SLIDER_LABEL = document.querySelector(".sliderLabel");

SLIDER_LABEL.textContent = `${SLIDER_VALUE.value} x ${SLIDER_VALUE.value}`;

const SKETCHPAD_DIMENSIONS =  Math.min(window.innerWidth, window.innerHeight) * GRID_SIZE_PERCENT;
SKETCHPAD.style.width = SKETCHPAD.style.height = SKETCHPAD_DIMENSIONS + 'px';

function setCellColor() {
    this.style.backgroundColor = "black";
}

function createBoard(gridSize) {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const CELL = document.createElement("div");

        CELL.style.width = CELL.style.height = `${(SKETCHPAD_DIMENSIONS / gridSize)}px`;

        CELL.classList.add("cell");
        SKETCHPAD.appendChild(CELL);
        CELL.addEventListener("mouseover", setCellColor);
    }
}

BUTTONS.forEach(button => {
    button.style.width = `${(SKETCHPAD_DIMENSIONS / 5)}px`;
    button.style.height = `${(SKETCHPAD_DIMENSIONS / 5 / 2)}px`;
})

SLIDER_VALUE.style.width = `${(SKETCHPAD_DIMENSIONS)}px`;

function wipeBoard() {
    while (SKETCHPAD.firstChild) {
        SKETCHPAD.removeChild(SKETCHPAD.firstChild);
    }
}

SLIDER_VALUE.oninput = function() {
    SLIDER_LABEL.textContent = `${SLIDER_VALUE.value} x ${SLIDER_VALUE.value}`;
    wipeBoard();
    createBoard(this.value);
}


createBoard(SLIDER_VALUE.value);

