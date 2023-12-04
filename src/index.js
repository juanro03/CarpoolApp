
const express = require('express');
const cors = require('cors');
const viajesController = require('./controllers/viajes.router.js');


const app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:4000'}));

//MiddleWars

//Rutas
//app.use('/carpool-app/viajes', viajesController.router);

//Start
app.listen(4000, () => {
    console.log(`Servidor iniciado en el puerto 4000`);
  });