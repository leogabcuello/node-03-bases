const color = require ('colors');
const fs = require('fs');
const {logica} = require ("./logica");

const multiplicar = (base, limite, visualizar) =>{

    resultado = logica(base, limite);
    if (visualizar)
       console.log(resultado);
    const nombreArchivo = `tablas/tabla-del-${base}.txt`;
    fs.writeFileSync(`${nombreArchivo}`,resultado, (err) =>{
        if (err) throw err;
        console.log(`el archivo ${nombreArchivo} fue creado`.rainbow);
    });

}

module.exports = {multiplicar};