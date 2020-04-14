const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por realiar'
};
const completado = {
    //demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'

};

const argv = require('yargs')
    .command('crear', 'Crea la tarea por realizar', {
        descripcion
    })
    .command('actualizar', 'Actualiza la tarea por realizar', {
        descripcion,
        completado
    })
    .command('borrar', 'borra la tarea realizada', {
        descripcion
    }).help()
    .argv

module.exports = {
    argv
}