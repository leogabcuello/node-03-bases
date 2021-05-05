const argv = require ('yargs')
 

        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        
        .option('l', {
            alias: 'limite',
            type: 'number',
            demandOption: false,
            describe: 'Es el limite de la tabla de multiplicar',
            default: 10
        })  
        
        .option('v', {
            alias: 'visualizar',
            type: 'boolean',
            demandOption: false,
            default: false,
            describe: 'Es el modo de visualizar resultado'
        })

        .check((argv, options) => {
                if (isNaN(argv.b) | isNaN(argv.l) ) {
                  throw new Error("La base y el limite debe ser solo numerico")
                } else {
                  return true // tell Yargs that the arguments passed the check
                }
              })
        .help()
        .version()
        .argv;

const {multiplicar} = require("./multiplicador");

console.log(argv);

multiplicar(argv.b,argv.l,argv.v);