document.getElementById('signupForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // TODO : Récuperer les champs du formulaire dans les variables name et email.
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;


    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      });

      // Récupère la réponse du serveur dans une variable result  
      const result = await response.json();
      
      // TODO : Afficher le message de réponse du serveur. Pour récuperer le message : result.message

      document.getElementById("responseMessage").textContent = result.message; 
    } catch (error) {

      document.getElementById("responseMessage").textContent = result.message; 
      // TODO : Afficher une message d'erreur 
    }
  });
