'use strict';

let decimal = 363;
let decimalABinario = decimal.toString(2);

console.log(decimal, decimalABinario);

function binarioToDecimal(numeroBin) {
    let numeroDecimal = 0;
    const contadorBinario = numeroBin.length;

    for (let i = 0; i < contadorBinario; i++) {
        let posicion = contadorBinario - 1 - i;
        let potencia = 2 ** i;
        numeroDecimal += numeroBin[posicion] * potencia;
    }
    return numeroDecimal;
}

console.log(binarioToDecimal('101101011'));
