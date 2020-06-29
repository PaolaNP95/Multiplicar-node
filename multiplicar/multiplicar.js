//requireds
const fs = require('fs');
const colors = require('colors');

//limite=10 para que sea un valor por defecto
let listarTabla = (base, limite = 10) => {
    console.log('==========================='.green);
    console.log(`=====TABLA DE ${base}======`.green);
    console.log('==========================='.green);

    for (let index = 1; index <= limite; index++) {
        console.log(`${base}*${index}=${base*limite}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introductido '${base}' no es un número`);
            return;
        } else {

        }
        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}`)
        });

    })

}

module.exports = { //exportar fucniones para ser utilizadas en otros archivos
    crearArchivo,
    listarTabla,
}