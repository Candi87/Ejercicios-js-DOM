'use strict';

const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerHTML = `
    <li></li>`;
    ul.prepend(li);
    function getRandom(max) {
        return Math.round(Math.random() * max);
    }

    setInterval(() => {
        li.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(
            255
        )}, ${getRandom(255)})`;
    }, 1000);
});
