'use strict';
const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];
function noRepit(value, nombre, n) {
    return n.indexOf(value) === nombre;
}
const solo = names.filter(noRepit);
console.log(solo);
