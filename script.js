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
        console.log(pos)
        nextPlayer();
        winCondition();

        /*
                if (game[0][0] == '') {
                    game[0][0] = player;
                    topLeft.innerHTML = player;
                    moves++;
        
        
                }
                if (topMid.innerHTML == '') {
                    game[0][1] = player;
                    topLeft.innerHTML = player;
                    moves++;
                }
                if (topRight.innerHTML == '') {
                    game[0][2] = player;
                    topLeft.innerHTML = player;
                    moves++;
                }
        
                if (midLeft.innerHTML == '') {
                    game[1][0] = player;
                    topLeft.innerHTML = player;
                    moves++;
                }
                if (midMid.innerHTML == '') {
                    game[1][1] = player;
                    topLeft.innerHTML = player;
                    moves++;
                }
                if (midRight.innerHTML == '') {
                    game[1][2] = player;
                    topLeft.innerHTML = player;
                    moves++;
                }
        
                if (botLeft.innerHTML == '') {
                    game[2][0] = player;
                    topLeft.innerHTML = player;
                    moves++;
                }
        
                if (botMid.innerHTML == '') {
                    game[2][1] = player;
                    topLeft.innerHTML = player;
                    moves++;
                }
        
                if (botRight.innerHTML == '') {
                    game[2][2] = player;
                    topLeft.innerHTML = player;
                    moves++;
                }
        
                if (moves == 9) {
                    modal.style.display = 'block';
                    modalWin.innerHTML = 'Empatou!';
                }
                winCondition();
                */
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
    ) {
        xis.innerHTML + 1;
        modalWin.innerHTML = 'O Xis Ganhou!';
        modal.style.display = 'block';
    }
}
