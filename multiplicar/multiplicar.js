const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite=10) => {

        if (!Number(base)) {
            console.log(`El valor introducido ${base} no es un número.`);
            return;
        }

        if (!Number(limite)) {
            console.log(`El valor introducido ${base} no es un número.`);
            return;
        }

        console.log('==========================='.green);
        console.log(`==== Tabla de ${base} =====`.green);
        console.log('==========================='.green);

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
            console.log(`${base} * ${i} = ${base * i}`);  
        }
};

let crearArchivo = (base, limite=10)=>{
    return new Promise((resolve, reject )=>{

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
            // console.log(`${base} * ${i} = ${base * i}`);  
        }
        
        let nameFile = `tabla-multiplicacion-${base}-al-${limite}.txt`; 
        fs.writeFile(`tablas/${nameFile}`, data, (err) => {
            if (err) 
                resolve(err);
            else 
                resolve(nameFile);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
