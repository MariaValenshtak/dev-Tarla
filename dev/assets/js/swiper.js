window.addEventListener('DOMContentLoaded', () => {
  const swiperProduct = new Swiper('.swiper', {
    loop: true,
    speed: 500,
      centeredSlides: true,
    spaceBetween: 24,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 2.3,
      },
      1125: {
        slidesPerView: 3.4,
      },
      1500: {
        slidesPerView: 4.5,
      }
    }
  });
});
