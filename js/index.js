import "./introText.js";
import "./dude.js";
import "./particles.js";
import "./openImage.js";
import "./gallery.js";
import "./etc.js";
import "./kakaomap.js";
import "./preventCapture.js";
import "./skyHeight.js";
import "./heartList.js";
import "./copyText.js";

let swiperThumbs = new Swiper(".gallery-thumbs", {
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
