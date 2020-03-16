
// Requerimos el modulo express
const express = require('express');
//devuelve un objeto que en realidad es mi servidor
const app = express(); 
//unde directorios y devuelve si esta en windows o en linux
const path=require('path');
//crear la conexion antes de que el servidor empiece a escuchar
const utilsDB = require('./db/utils');
//settings
app.set('port',5000);
app.set('views',path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');

//routes
app.use(require('./routes/index.js'));

//statics files
// el navegador puede acceder a esta carpeta para obtener archivos multimedia
app.use(express.static(path.join(__dirname,'public')));
//listening the server
utilsDB.connectDB(function(err,db){
    if(err){
        console.log('error connection to DB');
    }else{
        app.listen(5000, ()=>{
            console.log('Server on port 5000');
        })
    }
    
})
