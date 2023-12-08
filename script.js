//let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };

// const sr = ScrollReveal({
//     distance: '60px',
//     duration: 2500,
//     reset: true,
// });



// Pour les couleurs (thèmes claire et sombre)
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        // Thème sombre
        root.style.setProperty('--bg-color', '#000000');
        root.style.setProperty('--main-color', '#356c5c');
        root.style.setProperty('--2nd-main-color', '#ffffffcc');
        root.style.setProperty('--text-color', '#ffffff');
    } else {
        // Thème clair
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--main-color', '#0055a5');
        root.style.setProperty('--2nd-main-color', '#000000cc');
        root.style.setProperty('--text-color', '#000000');
    }
});
