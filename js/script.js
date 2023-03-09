let header = document.querySelector(".header");
let navbarElement = document.querySelectorAll(".navbar-element");
let home = document.querySelector(".homeclick");

home.addEventListener('click', () => {
    header.style.backgroundColor = 'transparent';
})

navbarElement.forEach((element) => {
    element.addEventListener('click', () => {
        header.style.backgroundColor = 'black';
    })
})

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


