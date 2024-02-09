const express = require('express');


// Crear servidor de express
const app = express();


app.get('/', ( req, res ) => {

    res.json({
        ok: true
    });
});


// Escuchar peticiones
app.listen( 4000, () => {
    console.log(`Server on port ${ 4000 }`);
});