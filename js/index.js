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

let swiperCards = new Swiper(".gallery-cards", {
  loop: true,
  loopedSlides: 5,
  // cssMode 제거하여 이미지 preload가 원활하게 작동하도록 함
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // 이미지 preload 설정
  preloadImages: true,
  updateOnImagesReady: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  // 부드러운 전환을 위한 설정
  speed: 300,
  // lazy loading 비활성화 (모든 이미지 즉시 로드)
  lazy: false,
  // 다음/이전 슬라이드도 미리 준비
  slidesPerView: 1,
  slidesPerGroup: 1,
  // 이미지가 로드될 때까지 대기
  waitForTransition: true,
  // 슬라이드 변경 시 이미지 상태 체크
  on: {
    slideChangeTransitionStart: function () {
      // 현재 슬라이드의 이미지가 로드되었는지 확인
      const activeSlide = this.slides[this.activeIndex];
      const img = activeSlide.querySelector("img");
      if (img && !img.complete) {
        img.addEventListener(
          "load",
          () => {
            this.update();
          },
          { once: true }
        );
      }
    },
    imagesReady: function () {
      this.update();
    },
  },
});

console.log(swiperCards);

let swiperThumbs = new Swiper(".gallery-thumbs", {
  loop: true,
  loopedSlides: 5,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,
  // 썸네일도 이미지 preload 설정
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

console.log(swiperCards);

swiperThumbs.controller.control = swiperCards;
swiperCards.controller.control = swiperThumbs;
