// Importação do módulo express
const express = require('express');
const path = require('path');
const app = express(); // Instância do Express

const port = 3000;


app.use('/assets', express.static(path.join(__dirname, 'assets'))); // Arquivos estáticos do diretório 'assets'


app.use('/pages', express.static(path.join(__dirname, 'pages'))); // Arquivos estáticos do diretório 'pages'


app.use('/src', express.static(path.join(__dirname, 'src'))); // Arquivos estáticos do diretório 'src'


app.use('/', express.static(__dirname)); // Arquivos estáticos do diretório raiz para index.html e index.js


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
