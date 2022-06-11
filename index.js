const btTE = document.querySelector('#te');
const btTM = document.querySelector('#tm');
const btTD = document.querySelector('#td');

const btME = document.querySelector('#me');
const btMM = document.querySelector('#mm');
const btMD = document.querySelector('#md');

const btBE = document.querySelector('#be');
const btBM = document.querySelector('#bm');
const btBD = document.querySelector('#bd');

const btStart = document.querySelector('#start');
const btReset = document.querySelector('#reset');
let xis = document.querySelector('#x');
let zero = document.querySelector('#z');

btReset.style.display = 'none';

let isPlaying = false;

function iniciar() {
    isPlaying = true;
    xis.innerHTML = 0;
    zero.innerHTML = 0;

    btReset.style.display = 'block';
    btStart.style.display = 'none';
}

function resetar() {
    isPlaying = false
    btStart.style.display = 'block';
    btReset.style.display = 'none';
}

console.log(isPlaying)

function verificaClick() {
    if (isPlaying == true) {
        btTE.addEventListener('Click', () => {
            alert("Clicou")
        })
    } else {
        alert("Inicie um novo jogo!")
    }

}






