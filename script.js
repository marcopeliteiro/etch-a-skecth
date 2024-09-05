const container = document.querySelector(".container");

function colorGen(e) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  }

function createGrid(size){
let i = 0;

let gridSize = size * size;

let squareWidth = 1000 / size;
let squareHeight = 500 / size;

/*let containerWidth = 21.6 * size;

container.style.maxWidth = `${containerWidth}px`;
*/

for(i;i <size; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0;j < size; j++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newDiv.style.width = `${squareWidth}px`;
        newDiv.style.height = `${squareHeight}px`;
        row.appendChild(newDiv);
    }
    container.appendChild(row);
}

/*for(i; i < gridSize; i++){
       let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newDiv.style.width = `${squareWidth}px`;
        newDiv.style.height = `${squareHeight}px`;
        container.appendChild(newDiv);
    }
*/   
    const squares = document.querySelectorAll(".square");

        squares.forEach(square =>{
            square.addEventListener('mouseover', (e) =>{
                colorGen(e);
                //e.target.style.backgroundColor= "rgb(" + r + "," + g + "," + b + ")";
            });
        
            square.addEventListener('mouseout', (e) =>{
                colorGen(e);
                //e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            });
        });
}


createGrid(16);


const button = document.querySelector("button");

function gridPrompt(){
    const squares = prompt("How many squares? Keep it under 100");
    if(squares >= 100){
        gridPrompt();
    }
    else{
        container.replaceChildren();
        createGrid(squares);
    }
}

button.addEventListener("click", gridPrompt);
