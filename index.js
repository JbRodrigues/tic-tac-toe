let topLeft = document.querySelector('#te');
topLeft.innerHTML = "";
let topMid = document.querySelector('#tm');
topMid.innerHTML = "";
let topRight = document.querySelector('#td');
topRight.innerHTML = "";

let midLeft = document.querySelector('#me');
midLeft.innerHTML = "";
let midMid = document.querySelector('#mm');
midMid.innerHTML = "";
let midRight = document.querySelector('#md');
midRight.innerHTML = "";

let botLeft = document.querySelector('#be');
botLeft.innerHTML = "";
let botMid = document.querySelector('#bm');
botMid.innerHTML = "";
let botRight = document.querySelector('#bm');
botRight.innerHTML = "";

const btStart = document.querySelector('#start');
const btReset = document.querySelector('#reset');

let xis = document.querySelector('#x');
let zero = document.querySelector('#z');

let game = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];

let player = 'O';

btReset.style.display = 'none';

let isPlaying = false;

function start() {
    isPlaying = true;
    xis.innerHTML = 0;
    zero.innerHTML = 0;

    btReset.style.display = 'block';
    btStart.style.display = 'none';
}

function reset() {
    isPlaying = false
    btStart.style.display = 'block';
    btReset.style.display = 'none';
    
    topLeft.innerHTML = "";
    topMid.innerHTML = "";
    topRight.innerHTML = "";

    midLeft.innerHTML = "";
    midMid.innerHTML = "";
    midRight.innerHTML = "";

    botLeft.innerHTML = "";
    botMid.innerHTML = "";
    botRight.innerHTML = "";
    
}

function verificaClick() {

    if (isPlaying == false) {
        alert("Inicie um novo Jogo!")
    } else {
       let btn = document.querySelector('#te');
       btn.innerHTML = "O"
    }
}
