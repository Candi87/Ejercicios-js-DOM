// # Ejercicio 5

// Consigue una lista con los nombres de los personajes de la serie Rick and Morty que aparecen en los episodios lanzados en el mes de enero (el año no importa).

// Utiliza llamadas a la API: 'https://rickandmortyapi.com/api/'

const API_URL = 'https://rickandmortyapi.com/api/character/';

const getCharacters = async () => {
    try {
        const result = await fetch(API_URL).then((result) => result.json());
        return result;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

(async () => {
    const nombresAPI = await getCharacters();
    if (nombresAPI) {
        const nombres = nombresAPI.results.map((element) => element.name);
        console.log(nombres);
    }
})();
