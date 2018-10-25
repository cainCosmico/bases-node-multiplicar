const argv = require('./config/yargs.js').argv;
const colors = require('colors');


const {crearArchivo, listarBase} = require('./multiplicar/multiplicar.js')

//1. informacion del equipo
//console.log(process.argv);
// let argv2 = process.argv;
// console.log(argv2);

//2. Pasar argumentos por consola
// console.log('Base: ' + argv.base);
// console.log('Limite: ' + argv.limite);

//3. Comandos
let comando = argv._[0];

switch (comando) {
	case 'listar':
		console.log('Listar');
		listarBase(argv.base, argv.limite);
		break;
		case 'crear':
		console.log('crear');
		crearArchivo(argv.base, argv.limite)
			.then( archivo => console.log(`Archivo creado ${archivo}`.green))
			.catch( err => console.log(err) );
		break	;
	default:
		console.log('Comando no reconocido');
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);
//
