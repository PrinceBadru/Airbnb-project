const menuBtn = document.querySelector('.mobile');
const navMenu = document.querySelector('.nav-menu');

const mobileMenu = () => {
 menuBtn.classList.toggle('active')
 navMenu.classList.toggle('active')
}

const closeMenu = () => {
    navMenu.classList.toggle('active')  
}