document.getElementById("form-inscription").addEventListener("submit", function(event) {
    const inputs = this.querySelectorAll("input, select");
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.classList.add("error"); // Met un bord rouge à la case vide
        valid = false;
      } else {
        input.classList.remove("error"); // Enlève le rouge si rempli
      }
    });

    if (!valid) {
      event.preventDefault(); // Empêche l'envoi du formulaire
      alert("Veuillez remplir tous les champs !");
    }
  });