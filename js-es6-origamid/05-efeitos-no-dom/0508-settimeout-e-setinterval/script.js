// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// const screen = document.body;
// function changeColor() {
//     screen.classList.toggle('active');
// }

// setInterval(changeColor, 2000);


// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const start = document.querySelector('.iniciar');
const pause = document.querySelector('.pausar');
const displayTime = document.querySelector('.tempo');

start.addEventListener('click', runTime);
pause.addEventListener('click', pauseTime);
pause.addEventListener('dblclick', resetTime);

let i = 0;
let timer;

function runTime() {
    timer = setInterval(() => {
        displayTime.innerHTML = i++;
    }, 100);
    start.setAttribute('disabled', '');
}

function pauseTime() {
    clearInterval(timer);
    start.removeAttribute('disabled');
}

function resetTime() {
    displayTime.innerText = 0;
    i = 0;
}