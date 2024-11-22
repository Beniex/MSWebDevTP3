### Exercice 1

1. Installer node.js
https://nodejs.org/en/download/prebuilt-installer

2. Le fichier my_server.js est donné

3. Ouvrir un terminal à la racine du projet.
Si vous avez ouvert le dossier avec Visual Studio, utiliser le terminal de VSC.

4. Dans le terminal, écrire la commande suivante :
node .\exo1\my_server.js

5. Ouvrir un nouveau terminal, puis :
curl http://localhost:8000 

6. Ouvrir un navigateur et aller sur http://localhost:8000

7. ctrl+c dans le terminal du serveur permet d'arreter le serveur


En plus : 
- essayer de changer le port d'écoute 
- ouvrir le navigateur, puis la console et observer les en-têtes de la requête
- changer la méthode requestListener par : 
function requestListener(_request, response) {
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify({ message: "I'm OK" }));
}
et observer les changements dans l'en-tête de la requête.