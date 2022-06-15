const modal = document.querySelector('#modalWin')
const modalWin = document.querySelector('#modalWin')
const btStart = document.querySelector('#start');
const btReset = document.querySelector('#reset');

const topLeft = document.querySelector('#te');
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

let isPlaying = false;

let game = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

modal.style.display = 'block';
let player = 'O';
let moves = 0;
btReset.style.display = 'none';
modal.style.display = 'none';

function start() {
    isPlaying = true;
    btReset.style.display = 'block';
    btStart.style.display = 'none';
    game = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    player = 'O';

}

for (const pos of position) {
    pos.addEventListener('click', function onClick() {
        if (isPlaying == false) {
            reset();
        }
        pos.innerHTML = player;
        nextPlayer();
        plays();
        winCondition();
        console.log(moves);
    });

}

function nextPlayer() {
    if (isPlaying == false) {
        player = '';
    } else if (player == 'O') {
        player = 'X';
        moves++;
    } else {
        player = 'O';
        moves++;
    }
}

function plays() {
    if (moves == 9) {
        modalWin.innerHTML = 'EMPATE!';
        modal.style.display = 'block';
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

function winCondition() {

    if (
        (topLeft.innerHTML == 'O' && topMid.innerHTML == 'O' && topRight.innerHTML == 'O')
        ||
        (midLeft.innerHTML == 'O' && midMid.innerHTML == 'O' && midRight.innerHTML == 'O')
        ||
        (botLeft.innerHTML == 'O' && botMid.innerHTML == 'O' && botRight.innerHTML == 'O')
        ||
        (topLeft.innerHTML == 'O' && midMid.innerHTML == 'O' && botRight.innerHTML == 'O')
        ||
        (topRight.innerHTML == 'O' && midMid.innerHTML == 'O' && botLeft.innerHTML == 'O')
        ||
        (topLeft.innerHTML == 'O' && midLeft.innerHTML == 'O' && botLeft.innerHTML == 'O')
        ||
        (topMid.innerHTML == 'O' && midMid.innerHTML == 'O' && botMid.innerHTML == 'O')
        ||
        (topRight.innerHTML == 'O' && midRight.innerHTML == 'O' && botRight.innerHTML == 'O')
    ) {
        zero.innerHTML + 1;
        modalWin.innerHTML = 'O Zero Ganhou!';
        modal.style.display = 'block';


    } else if (
        (topLeft.innerHTML == 'X' && topMid.innerHTML == 'X' && topRight.innerHTML == 'X')
        ||
        (midLeft.innerHTML == 'X' && midMid.innerHTML == 'X' && midRight.innerHTML == 'X')
        ||
        (botLeft.innerHTML == 'X' && botMid.innerHTML == 'X' && botRight.innerHTML == 'X')
        ||
        (topLeft.innerHTML == 'X' && midMid.innerHTML == 'X' && botRight.innerHTML == 'X')
        ||
        (topRight.innerHTML == 'X' && midMid.innerHTML == 'X' && botLeft.innerHTML == 'X')
        ||
        (topLeft.innerHTML == 'X' && midLeft.innerHTML == 'X' && botLeft.innerHTML == 'X')
        ||
        (topMid.innerHTML == 'X' && midMid.innerHTML == 'X' && botMid.innerHTML == 'X')
        ||
        (topRight.innerHTML == 'X' && midRight.innerHTML == 'X' && botRight.innerHTML == 'X')
    ) {
        xis.innerHTML++;
        modalWin.innerHTML = 'O Xis Ganhou!';
        modal.style.display = 'block';
    }
}
