const fs = require('fs');
const {logica} = require ("./logica");

const multiplicar = (base) =>{

    resultado = logica(base);
    fs.writeFileSync(`tablas/tabla-del-${base}`,resultado);

}

module.exports = {multiplicar};