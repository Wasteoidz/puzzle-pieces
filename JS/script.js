//Model
let theBoard;
let pieces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];





//   View
showView()
function showView(){
    document.getElementById('app').innerHTML = /**html**/ `
    <h1 class="header">Her skal det pussles!</h1>
    <div class="board" id="board"></div> <br/>
    <button onclick=getPieces(36)>Start Spill</button>
    
    
    
    
    
    
    
    `;
}







//   Controller

function getPieces(times) {
    showView()
    for (let i = 0; i <times; i++) {
        document.getElementById('board').innerHTML += `<div class="pieces">${randomPiece()}</div>`;
    }    
 
}

function randomPiece() {
    let numberOfPieces = pieces.length;
    let randomPiecePosition = Math.floor(Math.random() * numberOfPieces);
    let randomPieces = pieces[randomPiecePosition];
    return randomPieces;

}