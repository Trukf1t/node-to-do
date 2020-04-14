const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        //console.log('Crear por hacer');
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        //console.log('Listar por hacer');
        let listado = toDo.getListado();
        for (let tarea of listado) {
            console.log(colors.green('=======Por hacer========'));
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log(colors.green('========================'));
        }
        break;
    case 'actualizar':
        //console.log('Actualizar una tarea por hacer');
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}