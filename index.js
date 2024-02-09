const express = require('express');
require('dotenv').config();

// Crear servidor de express
const app = express();

app.use( express.static('public'));

// app.get('/', ( req, res ) => {

//     res.json({
//         ok: true
//     });
// });


// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Server on port ${ process.env.PORT }`);
});