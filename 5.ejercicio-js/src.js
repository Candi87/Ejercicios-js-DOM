// # Ejercicio 5

// Consigue una lista con los nombres de los personajes de la serie Rick and Morty que aparecen en los episodios lanzados en el mes de enero (el año no importa).

// Utiliza llamadas a la API: 'https://rickandmortyapi.com/api/'

'use strict';
let air_date;
let name;
async function getCharacters(air_date = '') {
    const URL = `https://rickandmortyapi.com/api/episode/?air_date=${air_date}`;

    try {
        const response = await fetch(URL);
        const data = await response.json();

        const air_date = [...data.results];
        let nextPage = data.info.next;

        while (nextPage !== null) {
            const response = await fetch(nextPage);
            const data = await response.json();

            air_date.push(...data.results);

            nextPage = data.info.next;
        }

        console.log(air_date);
    } catch (error) {
        console.log(error);
    }
}

getCharacters('January');
