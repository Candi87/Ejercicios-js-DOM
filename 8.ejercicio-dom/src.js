'use strict';

const playPauseButton = document.querySelector('.start');
const pantalla = document.querySelector('p');
const resetButton = document.querySelector('.reset');

let tiempo = 0;
let intervalo = 0;
let verificar = false;
let h = 0;
let m = 0;
let s = 0;

function cronometrar() {
    playPauseButton.addEventListener('click', iniciarContador);

    resetButton.addEventListener('click', resetearContador);
}
cronometrar();
function iniciarContador() {
    if (verificar === false) {
        intervalo = setInterval(function () {
            tiempo += 1;
            pantalla.innerHTML = tiempo;
        }, 1000);
        verificar = true;
    } else {
        verificar = false;
        clearInterval(intervalo);
    }
}
function resetearContador() {
    verificar = false;
    tiempo = 0;
    pantalla.innerHTML = tiempo;
    clearInterval(intervalo);
}
