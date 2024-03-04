
//CONECTAMOS AL SERVIDOR (hemos creado usuario y contraseña en localhost/phpmyadmin usuario: nodejs pass: nodejs)

var mysql = require ('mysql');
//npm install mysql en terminal

var conexion = mysql.createConnection({
    host:"localhost",
    user: "nodejs",
    password:"nodejs",

    //SE AÑADE DATABASE (nodejs)
    database:"nodejs"
});

//CONECTAR CON BBDD
conexion.connect(function(err){
    if(err) throw err;

    console.log("Conectado");

    //******************************* */
    //SI SE CONECTA CORRECTAMENTE -> CREAMOS BASE DE DATOS
    //******************************* */
    /*
    conexion.query('CREATE DATABASE nodejs',function(err,result){
        if (err) throw err;
        console.log("Se ha creado la BBDD 'nodejs' correctamente.");
    })*/


    //******************************* */
    //CREAMOS NUEVA TABLA EN ESA BBDD
    //CAMPOS ID, TITULO, TEXTO Y FECHA
    //******************************* */
    /*conexion.query(`CREATE TABLE jugadores
                (id INT AUTO_INCREMENT PRIMARY KEY,
                 nombre VARCHAR(50),
                 edad INT(3),
                 posicion VARCHAR(50)
                )
    
    `,function(err,result){
        if (err) throw err;
        console.log("Se ha creado la TABLA 'jugadores' correctamente.");
    }) */


    //******************************* */
    // INSERTAMOS UN REGISTRO EN LA TABLA
    //******************************* */
    conexion.query(`INSERT INTO jugadores
                VALUES(null,
                    'Sergio Ramos',
                    36,
                    'Defensa'
                )
    
    `,function(err,result){
        if (err) throw err;
        console.log("Se ha insertado registro CORRECTAMENTE en la tabla 'jugadores' .");
    }) 

    //******************************* */
    // BUSCAMOS REGISTROS EN LA TABLA
    //******************************* */
    /*conexion.query(`SELECT * FROM jugadores
    `,function(err,result,fields){
        if (err) throw err;
        console.log(result);
    }) */

    //******************************* */
    // ACTUALIZAMOS UN REGISTRO EN LA TABLA
    //******************************* */

    /*conexion.query(`UPDATE jugadores SET
                    edad = 37
                    WHERE id = 1
    `,function(err,result,fields){
        if (err) throw err;
        console.log(result);
    }) 

    conexion.query(`SELECT * FROM jugadores
    `,function(err,result,fields){
        if (err) throw err;
        console.log(result);
    }) */

    //******************************* */
    // ELIMINAMOS UN REGISTRO EN LA TABLA
    //******************************* */
    /*conexion.query(`DELETE FROM jugadores
                    WHERE id = 1
    `,function(err,result,fields){
        if (err) throw err;
        console.log(result);
    }) 

    conexion.query(`SELECT * FROM jugadores
    `,function(err,result,fields){
        if (err) throw err;
        console.log(result);
    })*/


})




