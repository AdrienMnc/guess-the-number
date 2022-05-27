function reprendreLaPartie(essai) {
  let min = 1;
  let max = 10;
  let random = Math.floor(Math.random() * (max - min)) + min;
  let utilisateur;
  let jouer = "oui";

  while ((jouer = "oui")) {
    for (let essai = 3; essai >= 0; essai--) {
      utilisateur = prompt(
        `Veuillez saisr un nombre entre 1 et 10, vous avez ${essai} essai.`
      );
      if (utilisateur > random) {
        alert(` Le nombre saisi est trop grand, il te reste ${essai} essai!`);
      } else if (utilisateur < random) {
        alert(` Le nombre saisi est trop petit, il te reste ${essai} essai!`);
      } else if (utilisateur == random) {
        alert(" Bravo, tu as trouvé.");
      } else if (essai == 0) {
        alert(" PERDU!! Retente ta chance");
      }
    }

    if (essai == 0) {
      alert("PERDU!! Retente ta chance");
    } else {
      false;
    }
  }
}
// NOTE POUR CE WEEK END > FAIRE EN SORTE QUE PERDU FONCTIONNE > METTRE UN RESTART Game >

reprendreLaPartie();
