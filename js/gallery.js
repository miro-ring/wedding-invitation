new Swiper(".gallery-thumbs", {
  loop: true,
  loopedSlides: 10,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,
  preloadImages: true,
  updateOnImagesReady: true,
  watchSlidesProgress: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
