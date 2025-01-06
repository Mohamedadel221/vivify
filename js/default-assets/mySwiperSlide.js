var swiper = new Swiper(".swiper-containers", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 5 },
    640: { slidesPerView: 3, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 30 },
  },
  autopLay:{
    delay:3000,
  }
});
