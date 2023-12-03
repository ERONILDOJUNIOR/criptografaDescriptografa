const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Define o diretório de arquivos estáticos (CSS, JS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define a rota para renderizar a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
