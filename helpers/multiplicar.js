const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 5, hasta = 10, listar = false ) => {

    try {
        let salida, consola = '';

        for ( let i = 1; i <= hasta; i++ ) {
            salida += ` ${ base } x ${ i } = ${base * i}\n`;
            consola += ` ${ base } ${colors.green('x')} ${ i } ${colors.green('=')} ${base * i}\n`;
        }
        
        if (listar) {
            console.log("========================".green)
            console.log('   Tabla del:'.green, colors.blue(base) )
            console.log("========================".green)

            console.log(consola);
        }
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${ base }.txt creado`;
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}