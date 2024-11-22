### Exercice 4

L'objectif est de soumettre un formulaire depuis un front au serveur pour inscrire un utilisateur, le valider en amont, puis afficher à l'utilisateur qu'il est inscrit.

1. Regarder le code du fichier '/frontend/html/index.html'.
Observer les identifiants du formulaire et du paragraphe de réponse

2. Regarder le code du fichier '/frontend/script/script.js'
- Observer l'utilisation de fetch pour questionner le serveur
- Identifier la méthode utilisée, le header et le body

3. Regarder le code du fichier '/backend/script/server.js'

4. Dans le fichier '/frontend/script/script.js'
- Récuperer la valeur des champs du formulaire
- Afficher le message recu du serveur dans le paragraphe 'responseMessage'
- En cas d'erreur, afficher le message dans le même paragraphe  

5. Dans le fichier '/backend/script/server.js':
- Vérifier que l'url est '/signup' et que la méthode est POST (req.method, req.url)
    - L'envoi du message d'accueil si l'url est bonne est déjà rédigé :
    - Compléter l'envoi d'un message d'erreur 404 sinon
- Tester votre code en allant sur 'localhost:3000/signup', et en completant le formulaire
- Tester votre code en allant sur 'localhost:3000/', un message d'erreur doit apparaitre


- Si l'url de la requête est bonne, on veut maintenant valider les paramètres reçus.
    - Vérifier si le nom (variable name) a plus de 3 charactères et que l'email contient un @
    - Si les informations ne sont pas bonnes, envoyer un message d'erreur; code 400
- Tester votre code en completant correctement le formulaire
- Tester votre code en completant le formulaire avec des erreurs 

### Pour tester votre code : 

1. Dans un terminal, depuis la racine, lancer le serveur :
'node .\exo3\backend\server.js'

2. Dans un navigateur, aller sur 'localhost:3000/signup' 