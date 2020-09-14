const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea pro hacer',
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea',
};

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualizar elemento por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}