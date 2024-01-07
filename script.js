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


