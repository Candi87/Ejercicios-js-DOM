'use strict';
const parrafo = document.querySelectorAll('p').item(0);
let parrafoHtml = parrafo.innerHTML;
let parrafoSub = parrafoHtml.split(/[\s,\.,\"]+/);

parrafoSub.forEach((palabra) => {
    if (palabra.length > 5) {
        parrafoHtml = parrafoHtml.split(palabra).join(`<u>${palabra}</u>`);
    }
});

parrafo.innerHTML = parrafoHtml;
