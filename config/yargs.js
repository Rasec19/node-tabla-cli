const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    description: 'Base para multiplicar',
                    demandOption: true,
                    default: 5
                })
                .option('h', {
                    alias:'hasta',
                    type:'number',
                    description:'Hasta donde se multiplicara la base',
                    demandOption: true,
                    default: 10
                })
                .option('l', {
                    alias:'listar',
                    type:'boolean',
                    description:'comando para listar tabla en consola',
                    default: false
                })
                .check( (argv, options) => {
                    if ( isNaN( argv.b )) {
                        throw 'La base tiene que ser un numero';
                    }
                    return true;
                })
                .argv;


module.exports = argv;