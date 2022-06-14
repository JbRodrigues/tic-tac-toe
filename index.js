const btStart = document.querySelector('#start');
const btReset = document.querySelector('#reset');

let xis = document.querySelector('#x');
let zero = document.querySelector('#z');

xis.innerHTML = 0;
zero.innerHTML = 0;

let position = document.querySelectorAll('div.square');

let player = 'O';

btReset.style.display = 'none';

let isPlaying = false;

function start() {
    isPlaying = true;
    //declarando os valores dos campos
    for (let index = 0; index < position.length; index++) {
        position[index].innerHTML = "";
    }

    btReset.style.display = 'block';
    btStart.style.display = 'none';
}

function reset() {
    isPlaying = false
    btStart.style.display = 'block';
    btReset.style.display = 'none';

    //resetando todos os campos para 'zero'
    for (let i = 0; i < game.length; i++) {
        game[i][i] = '';
    }
}

function verificaClick() {

    if (isPlaying == false) {
        alert("Inicie um novo Jogo!")
    } else {

    }
}
