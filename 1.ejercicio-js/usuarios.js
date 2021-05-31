// # Ejercicio 1

// Escribe una función que devuelva un array de usuarios. De cada usuario guardaremos el username, el nombre y apellido, el sexo, el país, el email y un enlace a su foto de perfil.

// El número de usuarios a obtener se debe indicar con un parámetro de dicha función.

// Sírvete de la API: https://randomuser.me/

'use strict';

const url = 'https://randomuser.me/api?results=5';

async function getData() {
    const { results: userlist } = await (await fetch(url)).json();
    const profiles = userlist.map((user) => ({
        //ponemos otro parentesis si quyeremos que haya un return implicito
        username: user.login.username,
        nombre: user.name.first,
        apellido: user.name.last,
        sexo: user.gender,
        pais: user.country,
        email: user.email,
        foto: user.picture.medium,
    }));

    console.log(profiles);
}
getData();
