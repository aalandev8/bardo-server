import dotenv from 'dotenv';
import PeopleRoutes from './Routes/People.routes';
import { dbConnection } from './db';
import cors from 'cors';

const express = require('express');
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(cors());


dbConnection();

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Rutas
app.use('/api/v1', PeopleRoutes);