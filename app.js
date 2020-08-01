const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        //  console.log(argv.base);
        //  console.log(argv.limite);
        //  return;
        crearArchivo(argv.base, argv.limite).then((archivo) => {
            console.log(`Archivo creado: ${colors.red(archivo)}`);
        }).catch((err) => {
            console.log(err);
        });
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

