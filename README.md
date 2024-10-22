# etch-a-sketch
An Etch-a-Sketch project from The Odin Project. 

## Pseudo code

### Function to add 256 divs (16x16 grid)
handleDivGridSetup() {\
    FOR i = 0, i < 16, i++\
        CREATE rowContainer\
        ADD rowContainer to gridContainer\
        FOR i = 0, i < 16, i++\
            ADD div to rowContainer\
    ENDFOR\
}\

CALL handleDivGridSetup();

### Function to generate a random color
generateRandomColor(element) {\
    LET color = CALCULATE random color as a string\
    SET backgroundColor to color\
}\

### Function to add event listener to each div in our grid
FOR EACH div in listOfDivs\
    ADD eventLister(div)\
        CALL generateRandomColor(div)\
ENDFOR
