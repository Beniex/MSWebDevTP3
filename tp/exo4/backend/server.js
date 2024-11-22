// Importation des modules nécessaires
const http = require('http');
//const { errors } = require('undici-types');
const fs= require("node:fs/promises");

// Fonction pour traiter les requêtes et les réponses
const server = http.createServer((req, res) => {
  // Ajouter des en-têtes CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permettre l'accès depuis n'importe quelle origine
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Méthodes HTTP autorisées
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // En-têtes autorisés

  if (req.method === 'OPTIONS') {
    // Répondre aux requêtes OPTIONS avant les requêtes réelles 
    res.writeHead(204);
    res.end();
    return;
  }

  // TODO : Vérifier que la méthode est POST et que l'url est '/signup'
  if (req.method =='POST' && req.url.includes('/signup')) {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // Une fois les données de la requête récupérée
    req.on('end', () => {
      const { name, email } = JSON.parse(body);
      if(name.length>3 && email.includes('@')){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: `Bienvenue, ${name}! Votre inscription est réussie.` }))
      } 
    });
  } else {
    res.writeHead(400); 
    res.end('ça fonctionne pas'); 
  }
});

// Le serveur écoute sur le port 3000
server.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});
