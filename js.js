



const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.navbar');


toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('open');
})