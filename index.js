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

function verificaClick() {

    if (isPlaying == false) {
        alert("Inicie um novo Jogo!")
    } else {
        btTE.addEventListener('click', () => {
            console.log("Clicou no TE")
        })
        btTM.addEventListener('click', () => {
            console.log("Clicou no TM")
        })
        btTD.addEventListener('click', () => {
            console.log("Clicou no TD")
        })

        /*--------------------------------------------------------------*/
        btME.addEventListener('click', () => {
            console.log("Clicou no ME")
        })
        btMM.addEventListener('click', () => {
            console.log("Clicou no MM")
        })
        btMD.addEventListener('click', () => {
            console.log("Clicou no MD")
        })

        /*--------------------------------------------------------------*/
        btBE.addEventListener('click', () => {
            console.log("Clicou no BE")
        })
        btBM.addEventListener('click', () => {
            console.log("Clicou no BM")
        })
        btBD.addEventListener('click', () => {
            console.log("Clicou no BD")
        })
    }

}






