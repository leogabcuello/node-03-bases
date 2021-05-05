const argv = require('yargs').argv;

        // .option('b', {
        //     alias: 'base',
        //     type: 'number',
        //     demandOption: true,
        //     describe: 'Es la base de la tabla de multiplicar'
        // })
// 
        // .argv;

const {multiplicar} = require("./multiplicador");
console.log(argv);

multiplicar(base);