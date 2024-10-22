// Our container for all of our divs
const gridContainer = document.querySelector(".container");

// Buttons
const makeNewGridButton = document.querySelector(".new-grid-button");
const randomColorButton = document.querySelector(".random-color-button");

// Background and Brush Color Picker ( sorry its a mess idk what im doing :C )
let backgroundColorPicker;
let brushColorPicker;
const defaultBackgroundColor = "#FFFFFF";
const defaultBrushColor = "#000000";

window.addEventListener("load", startupBackground, false);

function startupBackground() {
    backgroundColorPicker = document.querySelector("#background-color-picker");
    backgroundColorPicker.value = defaultBackgroundColor;
    backgroundColorPicker.addEventListener("input", updateFirstBackgroud, false);
    backgroundColorPicker.addEventListener("change", updateAllBackgrounds, false);
    backgroundColorPicker.select();
}

function updateFirstBackgroud(event) {
    const innerDiv = document.querySelectorAll(".inner-div");
    if (innerDiv) {
        div.style.backgroundColor = event.target.value;
    }
}

function updateAllBackgrounds(event) {
    document.querySelectorAll(".inner-div").forEach((d) => {
        d.style.backgroundColor = event.target.value;
    });
}

window.addEventListener("load", startupBrush, false);

function startupBrush() {
    brushColorPicker = document.querySelector("#brush-color-picker");
    brushColorPicker.value = defaultBrushColor;
    brushColorPicker.addEventListener("input", updateFirstBrush, false);
    brushColorPicker.addEventListener("change", updateAllBrushes, false);
    brushColorPicker.select();
}

function updateFirstBrush(event) {
    const innerDiv = document.querySelectorAll(".inner-div");
    if (innerDiv) {
        div.style.backgroundColor = event.target.value;
    }
}

function updateAllBrushes(event) {
    let innerDivs = document.querySelectorAll(".inner-div");

    innerDivs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = event.target.value;
        });
    });
}



// Initial grid is 16x16
function handleDivGridSetup() {
    for (let index = 0; index < 16; index++) {
        // Rows
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        gridContainer.appendChild(rowContainer);
        for (let index = 0; index < 16; index++) {
            // Columns
            const newDivForGrid = document.createElement("div");
            newDivForGrid.classList.add("inner-div");
            rowContainer.appendChild(newDivForGrid);
        }
    }
}

// Makes the 16x16 grid
handleDivGridSetup();

// Generates a random color
function generateRandomColor(element) {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    element.style.backgroundColor = color;
}

// Sets the initial color to black
function generateInitialColor(element) {
    let color = "black";
    element.style.backgroundColor = color;
}

// This is all of our divs as a NodeList
let innerDivs = document.querySelectorAll(".inner-div");

// Looping through the divs and adding event listeners which adds random colors to the divs background
function setColorToRandomColor(nodes) {
    nodes.forEach((div) => {
        div.addEventListener('mouseover', () => {
            generateRandomColor(div);
        });
    });
}

// Initial color is black
function setColorToInitialColor(nodes) {
    nodes.forEach((div) => {
        div.addEventListener('mouseover', () => {
            generateInitialColor(div);
        });
    });
}

// Sets all div background colors to white
function handleEraseBoard() {
    innerDivs.forEach((div) => {
        div.style.backgroundColor = backgroundColorPicker.value;
    });
}

// Removes current grid and makes a new one based on input
function createNewGrid(verticalAxis, horizontalAxis) {
    // Remove current grid
    gridContainer.innerHTML = "";
    // Make axes numbers
    Number(verticalAxis);
    Number(horizontalAxis);
    for (let index = 0; index < horizontalAxis; index++) {
        // Rows
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        gridContainer.appendChild(rowContainer);
        for (let index = 0; index < verticalAxis; index++) {
            // Columns
            const newDivForGrid = document.createElement("div");
            newDivForGrid.classList.add("inner-div");
            rowContainer.appendChild(newDivForGrid);
        }
    }
}

// Makes a new grid based on user input
makeNewGridButton.addEventListener('click', () => {
    let vertical = prompt("Please enter the number of blocks for the vertical axis:", "16");
    let horizontal = prompt("Please enter the number of blocks for the horizontal axis:", "16");
    if (vertical <= 100 && horizontal <= 100) {
        createNewGrid(vertical, horizontal);
        innerDivs = document.querySelectorAll(".inner-div");
        setColorToInitialColor(innerDivs);
    } else {
        alert("Axes cannot be over 100!")
    }
});

// Event handler for clicking random color button
randomColorButton.addEventListener('click', () => {
    handleEraseBoard();
    setColorToRandomColor(innerDivs);
})



setColorToInitialColor(innerDivs);
