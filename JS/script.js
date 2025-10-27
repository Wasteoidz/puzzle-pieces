//Model
const spill = document.getElementById('app');
let currentPuzzleFolder = null;




//   View
showView()
function showView(){
    spill.innerHTML = /*html*/ `
    <div class="game">
        <div class="board" 
        id="board" 
        ondragover="allowDrop(event)" 
        ondrop="drop(event)">
            <h1 class="tempText"id="tempPuzzleText"> &#127775;Her skal det pusles! &#127775;</h1>
        </div>
        <div class="puzzleBox" id="puzzleBox">
            <h1 class="tempText" id="tempBoxText">&#128525; Her er puslebitene &#128525;</h1>
        </div> <br/>
    </div> 
    
    <div class="pusleKnapper"> 
        <div class="pusleKnapperV">
            <button class="knapp" onclick="getPieces(36,'legoFriends')">😀Lego Friends😀</button>
            <button class="knapp" onclick="getPieces(36,'bluey')">&#128062 Bluey &#128062</button>
            <button class="knapp" onclick="getPieces(36,'peppaPig')">&#128055 Peppa Gris &#128055</button>
            <button class="knapp" onclick="getPieces(36,'gabby')">&#128571; Gabby &#128571;</button>
            <button class="knapp" onclick="getPieces(36,'pawPatrol')">&#128054; Paw Patrol &#128054;</button>

            <button class="knapp" onclick="getPieces(36,'minions')">&#129535; Minions &#129535;</button>
            <button class="knapp" onclick="getPieces(36,'moana')">&#128131; Vaiana &#127821;</button>
            <button class="knapp" onclick="getPieces(36,'frost')">&#10052; Frost &#10052;</button>
            <button class="knapp" onclick="getPieces(36,'olaf')">&#9924; Olaf &#9924;</button>
            <button class="knapp" onclick="getPieces(36,'biler')">&#128664; Biler &#128664;</button>

            <button class="knapp" onclick="getPieces(36,'fantorangen')">🧡 Fantorangen 🐘</button>
            <button class="knapp" onclick="getPieces(36,'fantus')">💜 Fantus 🐘</button>
            <button class="knapp" onclick="getPieces(36,'pivi')">🩵 Pivi 🐘</button>
            <button class="knapp" onclick="getPieces(36,'gabby2')">&#128571; Gabby 2 &#128571;</button>
            <button class="knapp" onclick="getPieces(36,'pawPatrol2')">&#128054; Paw Patrol 2 &#128054;</button>
        </div>
        <div class="jukseKnapp">
            <button class="knappJ" onclick="compleetePuzzle()"><h2>🔏</h2></button>
        </div>
        <div class="pusleKnapperH">
            <button class="knapp" onclick="getPieces(36,'minions2')">&#129535; Minions2 &#129535;</button>
            <button class="knapp" onclick="getPieces(36,'sabeltann')">🏴‍☠️Kaptein Sabeltann🏴‍☠️</button>
            <button class="knapp" onclick="getPieces(36,'gds')">Gjør Det Sjøl!</button>
            <button class="knapp" onclick="getPieces(36,'mlp')">🌈My little Pony🦄</button>
            <button class="knapp" onclick="getPieces(36,'legoFriends2')">😀Lego Friends 2😀</button>
    
            <button class="knapp" onclick="getPieces(36,'unicorn')">🌈Enhjørning🦄</button>
            <button class="knapp" onclick="getPieces(36,'unicorn2')">🌈Enhjørning 2🦄</button>
            <button class="knapp" onclick="getPieces(36,'unicorn3')">🌈Enhjørning 3🦄</button>
            <button class="knapp" onclick="getPieces(36,'unicorn4')">🌈Enhjørning 4🦄</button>
            <button class="knapp" onclick="getPieces(36,'unicorn5')">🌈Enhjørning 5🦄</button>

            <button class="knapp" onclick="getPieces(36,'liloStitch')">🌴Lilo & Stitch💙</button>
            <button class="knapp" onclick="getPieces(36,'mlp2')">🌈My little Pony 2🦄</button>
            <button class="knapp" onclick="getPieces(36,'liloStitch2')">🌴Lilo & Stitch 2💙</button>
            <button class="knapp" onclick="getPieces(36,'mumintrollet')">⛄Mumintrollet 🤍</button>
            <button class="knapp" onclick="getPieces(36,'paladin')">❤️‍🔥Pappa Spill❤️‍🔥</button>
        </div>
    </div>
    `;
}





//   Controller

function getPieces(times, puzzleFolder) {
    currentPuzzleFolder = puzzleFolder;
    pieces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
    showView()
    document.getElementById('tempPuzzleText').style.display = "none";
    document.getElementById('tempBoxText').style.display = "none";
    for (let i = 0; i <times; i++) {
        document.getElementById('puzzleBox').innerHTML += `<div class="emptyBox">${randomPiece(puzzleFolder)}</div>`;
        document.getElementById('board').innerHTML += `<div 
                                                        class="emptyBox" 
                                                        ondrop="drop(event)" 
                                                        ondragover="allowDrop(event)" 
                                                        ></div>`;
        
    }    
 
}

function checkPuzzle() { //work in progress//
    const boardPieces = document.querySelectorAll("#board .piece-img");
    if (boardPieces.length === 36 &&
        Array.from(boardPieces).every((piece, index) => piece.id === `piece-${index + 1}`)) 
        { document.getElementById('puzzleBox').innerHTML += `
                        <h1 class="tempText">🤩Bra jobba!🤩</h1>
            `;
        }
    }


function compleetePuzzle() { 
    if (currentPuzzleFolder==null) {
    } else {
    document.getElementById('board').innerHTML = "";
    document.getElementById('puzzleBox').innerHTML = `
        <h1 class="tempText" id="tempBoxText">😁Slik skal det se ut😁</h1>
        `;

    for (let pieceNumber = 1; pieceNumber <= 36; pieceNumber++) {
        document.getElementById('board').innerHTML += `
        <div class="emptyBox">
            <img 
                src="CSS/Bilder/${currentPuzzleFolder}/${pieceNumber}.jpg" 
                alt="Piece ${pieceNumber}" 
                class="piece-img"
                id="piece-${pieceNumber}"
                draggable="true"
                ondragstart="drag(event)"
            />
        </div>`;
    }
    }
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


//Drag og drop funskjoner//
function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text/plain");
    if (!ev.currentTarget.querySelector('img')) {
        ev.currentTarget.append(document.getElementById(data));
    }

}














// ---- Touch-støtte, rykende fersk fra chatGPT ---- //
let draggedPiece = null;
let ghostPiece = null;
let offsetX = 0;
let offsetY = 0;
let startX = 0;
let startY = 0;

document.addEventListener("touchstart", function (e) {
    const target = e.target.closest(".piece-img");
    if (target) {
        draggedPiece = target;

        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;

        const rect = target.getBoundingClientRect();
        offsetX = touch.clientX - rect.left;
        offsetY = touch.clientY - rect.top;

        // Ghost
        ghostPiece = target.cloneNode(true);
        ghostPiece.style.position = "fixed";
        ghostPiece.style.left = (touch.clientX - offsetX) + "px";
        ghostPiece.style.top = (touch.clientY - offsetY) + "px";
        ghostPiece.style.width = rect.width + "px";
        ghostPiece.style.height = rect.height + "px";
        ghostPiece.style.opacity = "0.7";
        ghostPiece.style.pointerEvents = "none";
        ghostPiece.style.zIndex = "9999";
        document.body.appendChild(ghostPiece);

        e.preventDefault(); // stop scrolling
    }
}, { passive: false });

document.addEventListener("touchmove", function (e) {
    if (!ghostPiece) return;
    const touch = e.touches[0];
    ghostPiece.style.left = (touch.clientX - offsetX) + "px";
    ghostPiece.style.top = (touch.clientY - offsetY) + "px";
    e.preventDefault();
}, { passive: false });

function cleanupGhost() {
    if (ghostPiece) ghostPiece.remove();
    ghostPiece = null;
    draggedPiece = null;
}

document.addEventListener("touchend", function (e) {
    if (!draggedPiece || !ghostPiece) return;

    const touch = e.changedTouches[0];
    const dx = Math.abs(touch.clientX - startX);
    const dy = Math.abs(touch.clientY - startY);

    // 1. Hvis bare et trykk (ikke dra) → ikke flytt
    if (dx < 50 && dy < 50) {
        cleanupGhost();
        return;
    }

    // 2. Sjekk dropTarget
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);

    // 3. Tillat kun dropp på en TOM emptyBox
    if (dropTarget && dropTarget.classList.contains("emptyBox") && !dropTarget.querySelector("img")) {
        dropTarget.appendChild(draggedPiece);
    }
    // ❌ Hvis ikke: gjør INGENTING → brikken blir stående der den var

    cleanupGhost();
});
document.addEventListener("touchcancel", cleanupGhost);
