// Importation des modules nécessaires
const http = require('http');

// Fonction pour traiter les requêtes et les réponses
const server = http.createServer((req, res) => {
  // Ajouter des en-têtes CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permettre l'accès depuis n'importe quelle origine
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Méthodes HTTP autorisées
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // En-têtes autorisés

  if (req.method === 'OPTIONS') {
    // Répondre aux requêtes OPTIONS avant les requêtes réelles pour le pré-vol (pre-flight request)
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/signup') {
    let body = '';

    // Récupère les données de la requête
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // Une fois les données de la requête récupérée
    req.on('end', () => {
      const { name, email } = JSON.parse(body);

      // Validation simple des données reçues
      if (name && email) {
        console.log(`Nouvel utilisateur inscrit : ${name} (${email})`);
        
        // Réponse du serveur en JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: `Bienvenue, ${name}! Votre inscription est réussie.` }));
      } else {
        // Gestion d'erreur si les données sont manquantes
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Nom et email sont requis.' }));
      }
    });
  } else {
    // Répond 404 si la route n'est pas trouvée
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route non trouvée' }));
  }
});

// Le serveur écoute sur le port 3000
server.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});
