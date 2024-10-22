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
            divCounter++;
            rowContainer.appendChild(newDivForGrid);
        }
    }
}

handleDivGridSetup();