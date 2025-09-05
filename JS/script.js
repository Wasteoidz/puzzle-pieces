//Model





//   View
showView()
function showView(){
    document.getElementById('app').innerHTML = /**html**/ `
    <h1 class="header">Her skal det pusles!</h1>
    <div class="board" 
        id="board" 
        ondragover="allowDrop(event)" 
        ondrop="drop(event)"
    ></div> <br/>
    <button onclick=getPieces(36)>&#127752; Enhjørning &#128052;</button>
    <button onclick=getPieces(36)>&#128571; Gabby &#128571;</button>
    <button onclick=getPieces(36)>&#128054; Paw Patrol &#128054;</button><br/><br/>
    <div class="puzzleBox" id="puzzleBox"></div>
    
    `;
}







//   Controller

function getPieces(times) {
    pieces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
    showView()
    for (let i = 0; i <times; i++) {
        document.getElementById('puzzleBox').innerHTML += `<div class="pieces">${randomPiece()}</div>`;
        document.getElementById('board').innerHTML += `<div 
                                                        id="emptyBox" 
                                                        class="emptyBox" 
                                                        ondrop="drop(event)" 
                                                        ondragover="allowDrop(event)" 
                                                        ></div>`;
        
    }    
 
}

function randomPiece() {
    let numberOfPieces = pieces.length;
    let randomPiecePosition = Math.floor(Math.random() * numberOfPieces);
    let pieceNumber = pieces[randomPiecePosition];
    pieces.splice(randomPiecePosition, 1);
    return `<img 
        src="CSS/bilder/unicorn/${pieceNumber}.jpg" 
        alt="Piece ${pieceNumber}" 
        class="piece-img"
        id="piece-${pieceNumber}"
        draggable = "true"
        ondragstart="drag(event)"
        />`;    
}


function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/plain");
    if (!ev.currentTarget.querySelector('img')) {
        ev.currentTarget.append(document.getElementById(data));
    }
}