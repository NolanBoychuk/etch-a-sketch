let containerDiv = document.querySelector('#containerDiv');
function createGrid(size) {
    containerDiv.textContent = "";
    for(let i = 1 ; i < +size + 1 ; i++)  {
        let divRow = document.createElement('div');
        divRow.classList.add('rows');
        for(let a = 1; a < +size + 1 ; a++){
            let squareBox = document.createElement('div');
            squareBox.classList.add('box');
            divRow.appendChild(squareBox);
        }
        containerDiv.appendChild(divRow);
    }
    eventListener();
}

function eventListener(){
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box){
    box.addEventListener('mouseenter', function(){
        box.classList.add('background')
    })
})
}

let sizeButton = document.querySelector('#sizeButton');
sizeButton.addEventListener('click', function() {
    let gridSize = prompt("How many square per side would you like?");
    if (gridSize > 100){
        gridSize = 100;
    };
    createGrid(gridSize);
    eventListener();
})

let clearButton = document.querySelector("#clearButton");
clearButton.addEventListener('click', function(){
    let rowLen = document.querySelectorAll('.rows').length;
    createGrid(rowLen);
    eventListener();
})


createGrid(16)
