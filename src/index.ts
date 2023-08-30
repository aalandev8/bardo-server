import RRPPSchema from './Models/RRPP';
import dotenv from 'dotenv';

const express = require('express');
const mongoose = require('mongoose');
dotenv.config();

const app = express();
const URL = process.env.URL;
const PORT = process.env.PORT;

// Conexión a la base de datos MongoDB
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});