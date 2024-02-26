//PARTE 3 MONGO DB Y NODE JS
//1.4 -> ESCRIBIMOS HTML DESDE NODE JS

//PARA IMPORTAR MODULO (HTTP EN ESTE CASO)
var servidor = require('http');

//CREAMOS SERVIDOR (puerto 80)
servidor.createServer(function(req,res){

    //ESCRIBIMOS EN EL HTML
    res.writeHead(200,{'Content-Type':'text/html'});

    //SALIDA POR PANTALLA
    //SE AÑADE ETIQUETA HTML
    res.write("<h1>Hola Mundo desde Node.js</h1>");

    res.write(`
        <ul>
            <li><a href='/'></a>Inicio</li>
            <li><a href='/sobremi'></a>Sobre Mi</li>
            <li><a href='/contacto'></a>Contacto</li>
        </ul>
    `)

    //MEDIANTE SWITCH DECIDIMOS DEPENDIENDO DE LA URL:
    switch(req.url){
        case "/":
            res.end("Estas en la Pagina Principal");
            break;
        case "/sobremi":
            res.end("Estas en la Pagina Sobre Mi");
            break;
        case "/contacto":
            res.end("Estas en la Pagina Contacto");
            break;
        default:
            res.end("Pagina No Encontrada");
            break;
    }

    console.log("Alguien ha cargado la Web");


}).listen(8080)