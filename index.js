const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/song', async (req, res) => {
  try {
    const response = await fetch('http://82.145.63.6:6627/currentsong?sid=1');
    const song = await response.text();
    res.send(song.trim());
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error al obtener la canción');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
