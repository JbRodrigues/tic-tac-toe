const btStart = document.querySelector('#start');
const btReset = document.querySelector('#reset');

let xis = document.querySelector('#x');
let zero = document.querySelector('#z');

xis.innerHTML = 0;
zero.innerHTML = 0;

//Pegando as posições do tabuleiro
let position = document.querySelectorAll('div.square');

let player = 'O';

btReset.style.display = 'none';

let isPlaying = false;

function start() {
    isPlaying = true;
    //Retirando o botão de inicio e adicionando o do Reset para recomeçar a partida
    btReset.style.display = 'block';
    btStart.style.display = 'none';

    for (const pos of position) {
        pos.addEventListener('click', function onClick() {
            if (pos.innerHTML == '') {
                pos.innerHTML = player;
                next();
            }
        });
    }

}

function reset() {
    isPlaying = false;
    player = '';

    //Retirando o botão de reset e adicionando o do Start para reiniciar a partida
    btStart.style.display = 'block';
    btReset.style.display = 'none';

    //declarando os valores dos campos do tabuleiro como sendo vazios para iniciar o jogo.
    for (let index = 0; index < position.length; index++) {
        position[index].innerHTML = "";
    }

}

function next() {
    if (isPlaying == false) {
        player = '';
    } else if (player == 'O') {
        player = 'X'
    } else {
        player = 'O';
    }
}