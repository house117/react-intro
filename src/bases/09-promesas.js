import { getHeroeById } from './bases/08-imp-exp';

//const { getHeroeById } = require("./bases/08-imp-exp");

/* const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        //console.log('2 segundos después');
        //resolve();
        const heroe = getHeroeById(2);
        resolve(heroe);
        //reject('No se pudo encontrar el héroe');
    }, 2000)
}); */

/* promesa.then((heroe) => {
    console.log('heroe', heroe);
})
.catch(err => console.warn( err ));  */

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log('2 segundos después');
            //resolve();
            const heroe = getHeroeById(id);
            if(heroe) resolve(heroe);
            reject("No se encontró un héroe");
            //resolve(heroe);
            //reject('No se pudo encontrar el héroe');
        }, 2000)
    });
}

getHeroeByIdAsync(1).then( console.log )
.catch(console.warn);