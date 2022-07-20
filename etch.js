const etch = document.getElementById('container');

function cellDraw(){
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
            cell.addEventListener('mouseover', function colorChange(event) {
            cell.setAttribute('style', 'background-color:black;');
            
        })
})
}


function createGrid(newSize){
    for(let i=0; i < newSize*newSize; i++){
        
        let block = document.createElement('div');
        block.classList.add('cell');
        etch.appendChild(block);
        cellDraw();
    }
}

function cellChange() {
    let newSize = prompt("How long should the rows/columns be?");
    etch.innerHTML = "";
    etch.style.gridTemplateColumns = "repeat("+ parseInt(newSize) +", auto)";
    createGrid(newSize);
}

for(let i=0; i < 16*16; i++){
    
    let block = document.createElement('div');
    block.classList.add('cell');
    etch.appendChild(block);
    cellDraw();
}




