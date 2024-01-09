let navbar = document.querySelector('.navbar');


document.addEventListener('DOMContentLoaded', function () {
    // Récupérez les boutons et ajoutez des écouteurs d'événements
    const switchFr = document.getElementById('switch-fr');
    const switchEn = document.getElementById('switch-en');

    switchFr.addEventListener('click', function () {
        switchLanguage('fr');
    });

    switchEn.addEventListener('click', function () {
        switchLanguage('en');
    });

    function switchLanguage(lang) {
        // Active le bouton correspondant
        switchFr.classList.remove('active');
        switchEn.classList.remove('active');
        document.querySelector(`#switch-${lang}`).classList.add('active');

        // Affiche/cache les éléments correspondants
        const frElements = document.querySelectorAll('.fr');
        const enElements = document.querySelectorAll('.en');

        if (lang === 'fr') {
            frElements.forEach(element => element.style.display = 'block');
            enElements.forEach(element => element.style.display = 'none');
        } else {
            frElements.forEach(element => element.style.display = 'none');
            enElements.forEach(element => element.style.display = 'block');
        }
    }
});

function toggleButton(buttonId) {
    var buttons = document.querySelectorAll('.btn_fr, .btn_en');
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });

    var clickedButton = document.getElementById(buttonId);
    clickedButton.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    // Ajoutez un gestionnaire d'événements pour chaque lien de la barre de navigation
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function () {
            // Supprimez la classe "active" de tous les liens
            document.querySelectorAll('.navbar a').forEach(link => {
                link.classList.remove('active');
            });
            // Ajoutez la classe "active" au lien actuel
            link.classList.add('active');
        });
    });
});
