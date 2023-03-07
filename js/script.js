//MENU DE OPCIONES
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}    

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}    

var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


// Slider productos home
var swiper = new Swiper(".categorySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    360: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },

    510: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    730: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },

    968: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    // 1024: {
    //   slidesPerView: 5,
    //   spaceBetween: 20,
    // },

    // 1300: {
    //   slidesPerView: 4,
    //   spaceBetween: 20,
    // }, 

    1700: {
      slidesPerView: 5,
      spaceBetween: 20,
    }, 
 },
});



 