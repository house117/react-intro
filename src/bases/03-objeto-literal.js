const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zipcode: 68120,
        lat: 14.2323,
        lng: 34.912192
    }
};



const persona2 = { ...persona };
console.log( persona );

persona2.nombre = 'Peter';

console.log(persona2);