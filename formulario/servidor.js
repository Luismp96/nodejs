//PARTE 4 MONGO DB Y NODE JS

//PARA IMPORTAR MODULO (HTTP EN ESTE CASO)
var servidor = require('http');
const { parse } = require('path');

//MODULO QUERY STRING
var procesador = require('querystring');

//CREAMOS SERVIDOR (puerto 8080)
servidor.createServer(function(req,res){

    //ESCRIBIMOS EN EL HTML
    res.writeHead(200,{'Content-Type':'text/html'});

    //MEDIANTE SWITCH DECIDIMOS DEPENDIENDO DE LA URL:
    switch(req.url){

        //AÑADIMOS FORMULARIO EN INICIO
        case "/":
            res.write(`
                <form action="/procesa" method="POST">
                
                    Introduce Nombre Usuario: <input type="text" name="nombre"><br>
                    Introduce Contrasena: <input type="password" name="contrasena"><br>
                    Introduce E-Mail: <input type="email" name="email"><br>
                    Introduce Localidad: <input type="text" name="localidad"><br>
                    <input type="submit">

                </form>
            `)
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
            })
            break;
        default:
            res.write("Pagina No Encontrada");
            break;
    }  
    
    res.end("");

}).listen(8080)