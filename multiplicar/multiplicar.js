const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor ingresado ${base}, para la base, no es un número`);
      return;
    }
    if (!Number(limite)) {
      reject(`El valor ingresado ${limite}, para el límite, no es un número`);
      return;
    }

    let data = '';

    console.log('==================='.green);
    console.log(`Esta es la tabla del ${base}`.green);
    console.log('==================='.green);

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    resolve(data);
  });
}

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor ingresado ${base}, para la base, no es un número`);
      return;
    }
    if (!Number(limite)) {
      reject(`El valor ingresado ${limite}, para el límite, no es un número`);
      return;
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) { 
        console.log('====================================');
        console.log(`Something went wrong ${err}`);
        console.log('====================================');
        reject(err);
      } else {
        resolve(`tabla-${base}.txt`);
      }
    });
  });
}

module.exports = {
  crearArchivo,
  listarTabla
};
