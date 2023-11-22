//Archivo de configuración para la base de datos

//Importar el modulo mysql
const mysql = require('mysql')
//crendo la conexion cn mysql
const conexion = mysql.createConnection({
    hots: 'localhost',
    user: 'root',
    password: '1234',
    database: 'hospital'
})

conexion.connect( function (error) {
   if(error){
    console.log(`ocurrio un error en la conexion ${error}`)
    return; 
   }else{
        console.log('conexion exitosa')
    }
})
module.exports ={conexion}
