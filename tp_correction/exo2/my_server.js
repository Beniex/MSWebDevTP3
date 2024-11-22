const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/welcome') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bienvenue sur notre serveur Node.js');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page non trouvée');
  }
});

server.listen(8000, () => console.log("Serveur en écoute sur le port 3000"));
