//Create a grid of X by Y squares
    //get grid container
    //loop X times for rows
        //create row container
        //loop Y times for columns
            //create grid 'pixel'
            //add eventlistener 'mousedown'
            //add pixel to row container
    //add row to grid container

//Create a grid of Width by Height squares
const getGrid = (width, height) => {
    //get grid container
    const gridContainer = document.querySelector(".grid-container");
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
            //add pixel to row container
            row.append(pixel);
        }
        //add row to grid container
        gridContainer.append(row);
    }
}

getGrid(16, 16);
