new Swiper(".gallery-thumbs", {
  loop: true,
  loopedSlides: 18,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,
  preloadImages: false, // 이미지 미리 로드 비활성화 (성능 개선)
  lazy: true, // lazy loading 활성화
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
