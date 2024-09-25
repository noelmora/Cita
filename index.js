const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// Ruta para obtener una cita motivacional
app.get('/quote', async (req, res) => {
    try {
      const response = await axios.get('https://zenquotes.io/api/random');
      const quote = response.data[0].q;
      const author = response.data[0].a;
      res.json({ quote, author });
    } catch (error) {
      console.error('Error al obtener la cita:', error);
      res.status(500).json({ error: 'No se pudo obtener la cita' });
    }
  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
