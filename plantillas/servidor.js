//PARTE 4 MONGO DB Y NODE JS
const { parse } = require('path');

//PARA IMPORTAR MODULO (HTTP EN ESTE CASO)
var servidor = require('http');
//MODULO FILE SYSTEM -> leer y escribir archivos
var archivos = require('fs');
var ruta = require('url');
//MODULO QUERY STRING
var procesador = require('querystring');

//MODULO MYSQL
var mysql = require('mysql');


//CONEXION
var conexion = mysql.createConnection({
    host:"localhost",
    user: "nodejs",
    password:"nodejs",

    //SE AÑADE DATABASE (nodejs)
    database:"nodejs"
});

//CREAMOS SERVIDOR (puerto 8080)
servidor.createServer(function(req,res){

    //ESCRIBIMOS EN EL HTML
    res.writeHead(200,{'Content-Type':'text/html'});

    //PARSEAMOS RUTA REQUEST
    var rutacompleta = ruta.parse(req.url,true);

    //MEDIANTE SWITCH DECIDIMOS DEPENDIENDO DE LA URL:
    archivos.readFile('cabecera.html',function(err,data){
        res.write(data);

        switch(req.url){

            //AÑADIMOS FORMULARIO EN INICIO
            case "/":
                //LEEMOS UN HTML INICIO
                archivos.readFile('inicio.html',function(err,data){
                    res.write(data);
                });
                break;
            case "/sobremi":
                archivos.readFile('sobremi.html',function(err,data){
                    res.write(data);
                });
                break;
            case "/registro":
                archivos.readFile('registro.html',function(err,data){
                    res.write(data);
                });
                break;
            case "/procesa":
    
                //FORMATEAMOS URL
                let datos = '';
                req.on('data',parte=>{
                    datos += parte.toString();
                })
    
                req.on('end',()=>{
                    //A JSON
                    var cadena = datos;
                    var procesado = procesador.parse(cadena);
                    console.log(procesado);
                    console.log("Hemos procesado los datos a una QueryString");
                })

                break;
            case "/blog":

                // QUITAMOS DOCUMENTO .HTML FIJO POR LO OBTENIDO EN MYSQL
                /*archivos.readFile('blog.html',function(err,data){
                    res.write(data);
                });*/
                
                //CONECTAR CON BBDD
                conexion.connect(function(err){

                    console.log("Conectado");
                    //PETICION QUERY
                    conexion.query(`SELECT * FROM jugadores
                    `,function(err,result,fields){
                        if (err) throw err;
                        console.log(result);
                        
                        //RECORREMOS RESULTADOS
                        for(let i=0;i<result.lenght;i++){
                            console.log(result[i]);
                        }

                    })

                });

                break;
            default:
                res.end("Pagina No Encontrada");
                break;
        }  
    
        archivos.readFile('piedepagina.html',function(err,data){
            res.write(data);
        });


    });
    

    var fecha = new Date();

    if (req.url != "/favicon.ico"){

        archivos.appendFile("registro.txt", "Nuevo Registro: " +"\n", function(err){
            if(err) throw err;
        }) 
        //ESCRIBIMOS SOBRE LO QUE HAY EN FICHERO
        //COMPLETAMOS CON MAS INFO DE LA REQUEST
        //GUARDAMOS LA URL
        archivos.appendFile("registro.txt",rutacompleta.host + "," + rutacompleta.pathname + "," + rutacompleta.search + "," + req.url +"\n", function(err){
            if(err) throw err;
            console.log("Se graba ruta OK en fichero registro.txt");
        }) 
        
        //GRABAMOS DATOS DE LA FECHA
        archivos.appendFile("registro.txt", fecha.getFullYear() + "," + (fecha.getMonth() + 1) + "," + fecha.getDate() + "," + fecha.getHours() + ":" + fecha.getMinutes() +"\n", function(err){
            if(err) throw err;
            console.log("Se graba fecha y hora OK en fichero registro.txt");
        }) 
    }
    

}).listen(8080)