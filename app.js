//npm init -y
//npm i express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//Configuracion
//Busque en la carpeta public el index.html
app.use(express.static('public') );

app.get('*',(req,res)=>{
    res.send('En teoria 404.html');
})
//Corriendo el proceso de servidor
app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto: ',port);
})
