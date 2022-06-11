const btTE = document.querySelector('#te');
const btStart = document.querySelector('#start');
const btReset = document.querySelector('#reset');
let xis = document.querySelector('#x');
let zero = document.querySelector('#z');


btReset.style.opacity = 0;
btReset.setAttribute('disabled', true)

function verificaClick(){
    alert("Clicou")
}


function iniciar(){
     xis.innerHTML = "0";
     zero.innerHTML = "0";
     
     btStart.style.backgroundColor = "#FF0F0F";
     btStart.innerHTML = "RESETAR";


     


}

function resetar(){
    btStart.setAttribute('disabled', false)
    btStart.style.opacity = 1;
}
