import dotenv from 'dotenv';
import RRPPRoutes from './Routes/RRPP.routes';
import { dbConnection } from './db';

const express = require('express');
dotenv.config();

const app = express();
const PORT = process.env.PORT;

dbConnection();

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Rutas
app.use('/api/Persons', RRPPRoutes);