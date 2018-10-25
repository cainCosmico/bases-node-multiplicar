//Requires
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite=10) => {
	return new Promise( (resolve, reject) => {
		if (!Number(base)) {
			reject(`${base} no es un número `)
			return;
		} else if (!Number(limite)) {
			reject(`${limite} no es un numero`);
			return;
		}
		let data = '';
		for (var i=0; i<limite; i++) {
			data += `${base} * ${i+1} = ${base*(i+1)}\n`;
		}

		fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
		  if (err) reject(err)
		  else resolve(`tabla-${ base }.txt`)
		});
	})
}

let listarBase = (base, limite) => {
	for (var i=0; i<limite; i++) {
		console.log(`${base} * ${i+1} = ${base*(i+1)}`);
	}
}

module.exports = {
	crearArchivo,
	listarBase
}
