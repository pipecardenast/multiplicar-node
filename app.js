const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite)
      .then(resp => console.log(`${resp}`.blue))
      .catch(err => console.log(`${err}`.red));
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
      .catch(err => console.log(err));
    break;
  default:
    console.log(`El comando ${comando} no existe`);
}
