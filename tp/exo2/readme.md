### Exercice 2

Dans la fonction createServer(), on veut vérifier si l'url cherche la ressource '/welcome', sinon on renvoie un message d'erreur

1. l'url est récupérable à l'aide de 'req.url'

2. utiliser la méthode string.includes('el') pour vérifier si l'url contient '/welcome'

3. Si l'url contient '/welcome', renvoyer le code 200 et un message de bienvenue

4. Sinon, renvoyer le code 404 et un message d'erreur

5. Dans le terminal, écrire la commande suivante :
node .\exo2\my_server.js


En plus :
- ajouter une nouvelle route '/random' qui renvoie un nombre aléatoire
