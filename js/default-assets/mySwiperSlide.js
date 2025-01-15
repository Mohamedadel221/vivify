var swiper = new Swiper(".swiper-containers", {
  slidesPerView: 4,
  spaceBetween: 0,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 0 },
    640: { slidesPerView: 2, spaceBetween: 10 },
    768: { slidesPerView: 3, spaceBetween: 10 },
    1024: { slidesPerView: 4, spaceBetween: 0 },
    1600: { slidesPerView: 5, spaceBetween: 0 },
  },
  autoplay: {
    delay: 1500,
  },
  loop: true,
});
