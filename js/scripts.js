let menuButton = document.querySelector('.menu-button');
let menuIcon = document.querySelector('.menu-icon');
let menuIconTop = document.querySelector('.menu-icon-top');
let menuIconBottom = document.querySelector('.menu-icon-bottom');

const title = document.querySelector('h1');
const navbar = document.querySelector('.navbar');

//LISTENERS

menuButton.addEventListener('click', function() {
    let dropdownItems = document.getElementById("dropdownItems");
    if (dropdownItems.style.display === "block") {
        dropdownItems.style.display = "none";
        menuIcon.style.opacity = '1';
        menuIconTop.classList.remove('close');
        menuIconBottom.classList.remove('close');
    } else {
        dropdownItems.style.display = "block";
        menuIcon.style.opacity = '0';
        menuIconTop.classList.add('close');
        menuIconBottom.classList.add('close');
    }
});

// window.addEventListener('resize', function() {
//     const titulo = document.getElementById('titulo');
//     if (window.innerWidth <= 600) {
//         titulo.textContent = 'M.PÁDEL'; /* Cambia el texto cuando la pantalla es menor o igual a 600px */
//     } else {
//         titulo.textContent = 'MARBELLA PÁDEL'; /* Vuelve al texto original si es mayor a 600px */
//     }
//     if (window.innerHeight <= 500) {
//         titulo.style.fontSize = '30px'; /* Cambia el texto cuando la pantalla es menor o igual a 500px */
//     } else {
//         titulo.style.fontSize = '48px';  /* Vuelve al texto original si es mayor a 600px */
//     }
// });

// navbar.addEventListener('click', adjustTitlePosition);

//FUNCTIONS

// function adjustTitlePosition() {
//     const isOpen = document.getElementById("dropdownItems").style.display === "block";
//     const content = document.querySelector('.content');

//     if (isOpen && window.innerWidth > 600 && window.innerHeight > 500) {
//         content.style.top = '8%'; /* Alinea con el menú cuando está abierto */
//         content.style.left = '50%'; /* Alinea con el menú cuando está abierto */
//     } else {
//         content.style.top = '50%'; /* Vuelve al centro cuando está cerrado */
//         content.style.left = '50%'; /* Alinea con el menú cuando está abierto */
//     }
// }





