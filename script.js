function calculateTime() {
    // Récupérer les valeurs entrées par l'utilisateur
    var birthday = new Date(document.getElementById('birthday-input').value + "T" + document.getElementById('time-input').value);
    var date = new Date(document.getElementById('date-input').value + "T" + document.getElementById('hour-input').value);

    // Calculer la différence en millisecondes
    var diff = date - birthday;

    // Convertir la différence en années, mois, semaines et heures
    var years = diff / (1000 * 60 * 60 * 24 * 365.25);
    var months = years * 12;
    var weeks = years * 52.1775;
    var hours = years * 8766;

    // Afficher les résultats
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Années: ' + Math.floor(years) +
                           '<br>Mois: ' + Math.floor(months) +
                           '<br>Semaines: ' + Math.floor(weeks) +
                           '<br>Heures: ' + Math.floor(hours);
}
