// Our container for all of our divs
const gridContainer = document.querySelector(".container");

function handleDivGridSetup() {
    // divCounter should be deleted once the grid is set up properly. This is just to display there are 16x16 divs
    let divCounter = 0;

    for (let index = 0; index < 16; index++) {
        // Rows
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        gridContainer.appendChild(rowContainer);
        for (let index = 0; index < 16; index++) {
            // Columns
            const newDivForGrid = document.createElement("div");
            newDivForGrid.innerText = "Div " + divCounter;
            newDivForGrid.classList.add("inner-div");
            divCounter++;
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

// This is all of our divs as a NodeList
const innerDivs = document.querySelectorAll(".inner-div");

// Looping through the divs and adding event listeners
innerDivs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        generateRandomColor(div);
    });
});


