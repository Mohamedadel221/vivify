var swiper = new Swiper(".swiper-containers", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 5 },
    640: { slidesPerView: 2, spaceBetween: 5 },
    768: { slidesPerView: 3, spaceBetween: 5 },
    1024: { slidesPerView: 4, spaceBetween: 10 },
  },
  autopLay:{
    delay:3000,
  }
});
