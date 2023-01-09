const MAX_SIZE = 100;
const MIN_SIZE = 1;

const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector('#reset-grid');
const resizeButton = document.querySelector('#resize-grid');

let gridSize = 16;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

setup();
//Create a grid of X by Y squares
    //get grid container
    //loop X times for rows
        //create row container
        //loop Y times for columns
            //create grid 'pixel'
            //add eventlisteners
            //add pixel to row container
    //add row to grid container

//Create a grid of Width by Height squares
function getGrid(width, height) {
    //loop Width times for rows
    for(let i = 0; i < width; i++){
        //create row container
        const row = document.createElement('div');
        row.className = "row";
        //loop Height times for columns
        for(let j = 0; j < height; j++){
            //create grid 'pixel'
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            //add eventlisteners
            pixel.addEventListener('mousedown', colorChange);
            pixel.addEventListener('mouseenter', colorChange);
            //add pixel to row container
            row.append(pixel);
        }
        //add row to grid container
        gridContainer.append(row);
    }
}

function setGridButtons() {
    resetButton.addEventListener('click', resetGrid);
    resizeButton.addEventListener('click', resizeGrid);
}

function resetGrid() {
    gridContainer.innerHTML = "";
    getGrid(gridSize, gridSize);
}

function resizeGrid() {
    gridContainer.innerHTML = "";
    let validInput = false;
    while (!validInput) {
        gridSize = prompt("What size is the new grid?");
        if (gridSize > MAX_SIZE) {
            alert(`Grid is too big! Maximum size: ${MAX_SIZE}`);
        } else if (gridSize < MIN_SIZE) {
            alert(`Grid is too small! Minimum size: ${MIN_SIZE}`);
        } else {
            validInput = true;
        }
    }
    getGrid(gridSize, gridSize);
}

function colorChange(e) {
    if(e.type === 'mouseenter' && !mouseDown){ return; }
    e.target.style.backgroundColor = "black";
}

function setup() {
    getGrid(16, 16);
    setGridButtons();
}
