const modal = document.querySelector('#modalWin')
const placar = document.querySelector('#placar')
const btStart = document.querySelector('#start');
const btReset = document.querySelector('#reset');

let xis = document.querySelector('#x');
let zero = document.querySelector('#z');

xis.innerHTML = 0;
zero.innerHTML = 0;

//Pegando as posições do tabuleiro
let position = document.querySelectorAll('div.square');

placar.innerHTML = "TESTE";
modal.style.display = 'block';
let player = 'O';
let moves = 0;

let winner = false;

btReset.style.display = 'none';
modal.style.display = 'none';

let isPlaying = false;

function start() {
    isPlaying = true;
    //Retirando o botão de inicio e adicionando o do Reset para recomeçar a partida
    btReset.style.display = 'block';
    btStart.style.display = 'none';
    plays();
    winCondition();

}

function reset() {
    isPlaying = false;
    player = '';

    //Retirando o botão de reset e adicionando o do Start para reiniciar a partida
    btStart.style.display = 'block';
    btReset.style.display = 'none';
    modal.style.display = 'none';

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
        moves++;
        console.log(moves)
    } else {
        player = 'O';
        moves++;
        console.log(moves)
    }
}


for (const pos of position) {
    pos.addEventListener('click', function onClick() {
        if (winner == false) {
            pos.innerHTML = player;
            next();
        }
    });
}

function winCondition() {
    if (position[0][0] === 'O' && position[0][1] === 'O' && position[0][2] === 'O') {
        zero.innerHTML = 1;
        winner = true;
        placar.innerHTML = 'o O Ganhou!'
        console.log("O Bola Ganhou!")
    } else if (position[1][0] === 'O' && position[1][1] === 'O' && position[1][2] === 'O') {
        zero.innerHTML = 1;
        winner = true;
        placar.innerHTML = 'o O Ganhou!'
        console.log("O Bola Ganhou!")
    } else if (position[2][0] === 'O' && position[2][1] === 'O' && position[2][2] === 'O') {
        zero.innerHTML = 1;
        winner = true;
        placar.innerHTML = 'o O Ganhou!'
        console.log("O Bola Ganhou!")
    } else if (position[0][0] === 'O' && position[1][1] === 'O' && position[2][2] === 'O') {
        zero.innerHTML = 1;
        winner = true;
        placar.innerHTML = 'o O Ganhou!'
        console.log("O Bola Ganhou!")
    } else if (position[0][2] === 'O' && position[1][1] === 'O' && position[2][0] === 'O') {
        zero.innerHTML = 1;
        winner = true;
        placar.innerHTML = 'o O Ganhou!'
        console.log("O Bola Ganhou!")
    }

    if (position[0][0] === 'X' && position[0][1] === 'X' && position[0][2] === 'X') {
        xis.innerHTML = '1';
        winner = true;
        placar.innerHTML = 'o X Ganhou!'
        console.log("O Xis Ganhou!")
    } else if (position[1][0] === 'X' && position[1][1] === 'X' && position[1][2] === 'X') {
        xis.innerHTML = '1';
        winner = true;
        placar.innerHTML = 'o X Ganhou!'
        console.log("O Xis Ganhou!")
    } else if (position[2][0] === 'X' && position[2][1] === 'X' && position[2][2] === 'X') {
        xis.innerHTML = '1';
        winner = true;
        placar.innerHTML = 'o X Ganhou!'
        console.log("O Xis Ganhou!")
    } else if (position[0][0] === 'X' && position[1][1] === 'X' && position[2][2] === 'X') {
        xis.innerHTML = '1';
        winner = true;
        placar.innerHTML = 'o X Ganhou!'
        console.log("O Xis Ganhou!")
    } else if (position[0][2] === 'X' && position[1][1] === 'X' && position[2][0] === 'X') {
        xis.innerHTML = '1';
        winner = true;
        placar.innerHTML = 'o X Ganhou!'
        console.log("O Xis Ganhou!")
    }

}

function plays() {
    if (moves == 9) {
        placar.innerHTML = 'Empatou!'
        document.alert("Empatou")
    }
}
