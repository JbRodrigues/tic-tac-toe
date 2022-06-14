const modal = document.querySelector('#modalWin')
const modalWin = document.querySelector('#modalWin')
const btStart = document.querySelector('#start');
const btReset = document.querySelector('#reset');

let topLeft = document.querySelector('#te');
const topMid = document.querySelector('#tm');
const topRight = document.querySelector('#td');

const midLeft = document.querySelector('#me');
const midMid = document.querySelector('#mm');
const midRight = document.querySelector('#md');

const botLeft = document.querySelector('#be');
const botMid = document.querySelector('#bm');
const botRight = document.querySelector('#bd');

let xis = document.querySelector('#x');
let zero = document.querySelector('#z');

xis.innerHTML = 0;
zero.innerHTML = 0;


let position = document.querySelectorAll('div.square');

modal.style.display = 'block';
let player = 'O';
let moves = 0;
btReset.style.display = 'none';
modal.style.display = 'none';

let isPlaying = false;

function start() {
    isPlaying = true;
    btReset.style.display = 'block';
    btStart.style.display = 'none';

    for (const pos of position) {
        pos.addEventListener('click', function onClick() {
            pos.innerHTML = player;
            nextPlayer();
            plays();
            winCondition();
        });
    }
}

function reset() {
    isPlaying = false;
    player = '';
    moves = 0;
    btStart.style.display = 'block';
    btReset.style.display = 'none';
    modal.style.display = 'none';

    for (let index = 0; index < position.length; index++) {
        position[index].innerHTML = "";
    }

}

function nextPlayer() {
    if (isPlaying == false) {
        player = '';
    } else if (player == 'O') {
        player = 'X'
        moves++;
        console.log(moves)
    } else {
        player = 'O';
        moves++;
        console.log(moves)
    }
}

function winCondition() {

    for (const pos of position) {

        if (
            (pos.innerHTML[0][0] === 'O' && pos.innerHTML[0][1] === 'O' && pos.innerHTML[0][2] === 'O')
            ||
            (pos.innerHTML[1][0] === 'O') &&( pos.innerHTML[1][1] === 'O') && (pos.innerHTML[1][2] === 'O')
            ||
            (pos.innerHTML[2][0] === 'O') && (pos.innerHTML[2][1] === 'O') && (pos.innerHTML[2][2] === 'O')
        ) {
            zero.innerHTML++;
            modalWin.innerHTML = 'o ZERO Ganhou!'
            

        } else if (
            (pos.innerHTML[0][0] === 'X' && pos.innerHTML[0][1] === 'X' && pos.innerHTML[0][2] === 'X')
            ||
            (pos.innerHTML[1][0] === 'X' && pos.innerHTML[1][1] === 'X' && pos.innerHTML[1][2] === 'X')
            ||
            (pos.innerHTML[2][0] === 'X' && pos.innerHTML[2][1] === 'X' && pos.innerHTML[2][2] === 'X')
        ) {
            xis.innerHTML++;
            modalWin.innerHTML = 'O XIS Ganhou!'
        }
    }
}

function plays() {
    if (moves == 9) {
        modal.style.display = 'block';
        modalWin.innerHTML = 'Empatou!';
    }
}


