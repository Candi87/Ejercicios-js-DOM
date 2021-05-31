// # Ejercicio 2

// Crea un programa que imprima cada 5 segundos el tiempo desde la ejecución del mismo. Formatea el tiempo para que se muestren los segundos, los minutos, las horas y los días desde la ejecución.

'use strict';

function crono(seconds, minutes, hours, days) {
    setInterval(() => {
        if (seconds >= 0) {
            seconds += 5;
        }

        if (seconds > 59) {
            seconds = 0;
            minutes++;
        }

        if (minutes > 59) {
            minutes = 0;
            hours++;
        }

        if (hours > 24) {
            hours = 0;
            days++;
        }

        console.log(days, hours, minutes, seconds);
    }, 5000);
}
crono(0, 0, 0, 0);
