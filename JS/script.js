//Model





//   View
showView()
function showView(){
    document.getElementById('app').innerHTML = /**html**/ `
        <div class="board" 
        id="board" 
        ondragover="allowDrop(event)" 
        ondrop="drop(event)"
    ><h1 id="tempPuzzleText"> &#127775;Her skal det pusles! &#127775;</h1></div> <br/>
    <button class="knapp" onclick="getPieces(36,'unicorn')">&#127752; Enhjørning &#129412;</button>
    <button class="knapp" onclick="getPieces(36,'gabby')">&#128571; Gabby &#128571;</button>
    <button class="knapp" onclick="getPieces(36,'pawPatrol')">&#128054; Paw Patrol &#128054;</button><br/><br/>
    <div class="puzzleBox" id="puzzleBox"><h1 id="tempBoxText">&#128525; Her finner du puslebitene &#128525;</h1></div>
    
    `;
}





//   Controller

function getPieces(times, puzzleFolder) {
    pieces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
    showView()
    document.getElementById('tempPuzzleText').style.display = "none";
    document.getElementById('tempBoxText').style.display = "none";
    for (let i = 0; i <times; i++) {
        document.getElementById('puzzleBox').innerHTML += `<div class="pieces">${randomPiece(puzzleFolder)}</div>`;
        document.getElementById('board').innerHTML += `<div 
                                                        id="emptyBox" 
                                                        class="emptyBox" 
                                                        ondrop="drop(event)" 
                                                        ondragover="allowDrop(event)" 
                                                        ></div>`;
        
    }    
 
}

function resetPiece() {  //finne en måte å putt biten tilbake i esken//

}

function randomPiece(puzzleFolder) {
    let numberOfPieces = pieces.length;
    let randomPiecePosition = Math.floor(Math.random() * numberOfPieces);
    let pieceNumber = pieces[randomPiecePosition];
    pieces.splice(randomPiecePosition, 1);
    return `<img 
        src="CSS/Bilder/${puzzleFolder}/${pieceNumber}.jpg" 
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



// ---- Touch-støtte, rykende fersk fra chat GPT----
let draggedPiece = null;

document.addEventListener("touchstart", function (e) {
    const target = e.target.closest(".piece-img");
    if (target) {
        draggedPiece = target;
    }
}, { passive: true });

document.addEventListener("touchend", function (e) {
    if (!draggedPiece) return;

    const touch = e.changedTouches[0];
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);

    const emptyBox = dropTarget?.closest(".emptyBox");
    const board = dropTarget?.closest("#board");

    if (emptyBox && !emptyBox.querySelector("img")) {
        // legg bare hvis boksen er tom
        emptyBox.appendChild(draggedPiece);
    } 
    else if (board && !dropTarget.closest(".pieces")) {
        // legg på brettet (uten å ødelegge esken med pieces)
        board.appendChild(draggedPiece);
    } 
    else {
        // ❌ ikke gyldig drop → sett tilbake i esken
        document.getElementById("puzzleBox").appendChild(draggedPiece);
    }

    draggedPiece = null;
});

