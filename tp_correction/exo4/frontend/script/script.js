document.getElementById('signupForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      });

      const result = await response.json();
      
      // Affiche le message de réponse du serveur
      document.getElementById('responseMessage').innerText = result.message;
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      document.getElementById('responseMessage').innerText = 'Erreur lors de l\'inscription. Veuillez réessayer.';
    }
  });
