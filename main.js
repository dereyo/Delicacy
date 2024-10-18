var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

let body = document.querySelector('body');
let header = document.querySelector('header');
let home = document.querySelector('.home');
let categories = document.querySelector('.categories');
let products = document.querySelector('.products');
let about = document.querySelector('.about');
let customers = document.querySelector('.customers');
let footer = document.querySelector('.footer');
let dark = document.querySelector('#bbb');

dark.onclick = () => {
    console.log('meow');
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    home.classList.toggle('dark-mode');
    categories.classList.toggle('dark-mode');
    products.classList.toggle('dark-mode');
    about.classList.toggle('dark-mode');
    customers.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    dark.classList.toggle('dark-mode');
}

