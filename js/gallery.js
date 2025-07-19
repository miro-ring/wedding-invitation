const horizontal = document.querySelector(".section4");
const imgs = gsap.utils.toArray(".section4 > div");
const imageCounter = document.querySelector(".image-counter");

console.log(horizontal.scrollWidth);
const galleryAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: horizontal,
    start: "top top",
    end: () => "+=" + (horizontal.scrollWidth - window.innerWidth + 30) * 3,
    pin: true,
    anticipatePin: 0,
    scrub: 0.8,
    invalidateOnRefresh: true,
    // onUpdate: (self) => {
    //   const progress = self.progress;
    //   const currentIndex = Math.round(progress * (imgs.length - 1)) + 1;
    //   imageCounter.textContent = `${currentIndex} / ${imgs.length}`;
    // },
  },
});

galleryAnimation.to(imgs, {
  x: () => -(horizontal.scrollWidth - window.innerWidth + 30),
  ease: "none",
});
