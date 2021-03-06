const argv = require('./confi/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por_hacer');
// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea)
        break;
    case "listar":
        let listado = porHacer.getlistado()
        for (let tarea of listado) {
            console.log("============por hacer=======".green);
            console.log(tarea.descripcion);
            console.log('estado: ', tarea.completado);
            console.log("=============================".red);
        }

        break;
    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("comando no es reconocido");
}