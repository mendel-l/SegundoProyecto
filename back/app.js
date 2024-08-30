const express = require('express');
const app = express();
const db = require('./config/database');

app.use(express.json());

const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);

db.authenticate()
  .then(() => console.log('Conexión a la base de datos establecida...'))
  .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Servidor corriendo en el puerto ${PORT}`));
