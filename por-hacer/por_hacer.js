const fs = require('fs');


let listadoPorHacer = [];

const guardarBD = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`bd/data.json`, data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);

    })
}

const cargarBD = () => {

    try {
        listadoPorHacer = require('../bd/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }



}

let getlistado = () => {
    cargarBD();
    return listadoPorHacer;
}

let crear = (descripcion) => {
    cargarBD();

    let porHacer = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer);
    guardarBD();
    return porHacer;
}
const actualizar = (descripcion, completado = true) => {
    cargarBD();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;
    } else {
        return false;
    }
    /*{
                return tarea.descripcion === descripcion;
            })*/
}
let borrar = (descripcion) => {
    cargarBD();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarBD();
        return true;
    }

    // la forma en que yo lo hice y funciono y la anterior es la del video. 
    //
    // let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    // if (index >= 0) {
    //     listadoPorHacer.splice(index, 1);
    //     guardarBD();
    //     return true;
    // } else {
    //     return false;
    // }
}

module.exports = {
    crear,
    getlistado,
    actualizar,
    borrar
}