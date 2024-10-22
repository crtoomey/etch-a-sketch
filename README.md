# etch-a-sketch
An Etch-a-Sketch project from The Odin Project. 

## Pseudo code

### Function to add 256 divs (16x16 grid)
handleDivGridSetup() {\
    FOR i = 0, i < 16, i++\
        CREATE rowContainer
        ADD rowContainer to gridContainer
        FOR i = 0, i < 16, i++\
            ADD div to rowContainer
}\

CALL handleDivGridSetup();