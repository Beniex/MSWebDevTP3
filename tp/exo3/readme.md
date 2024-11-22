### Exercice 2

Dans la fonction requestListener(), on veut vérifier si l'url cherche la ressource '/home' et renoyer la page 'index.html', sinon on renvoie un message d'erreur

1. Observer la fonction requestListener() et identifier comment le fichier index.html est lu.

3. Si l'url contient '/home', renvoyer le code 200 et le fichier 'index.html' avec response.end(contents);

4. Sinon, renvoyer le code 404 et un message d'erreur

5. Dans le terminal, depuis la racine, écrire la commande suivante :
node .\exo3\my_server.js

