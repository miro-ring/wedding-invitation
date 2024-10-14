const horizontal = document.querySelector(".section3");
const imgs = gsap.utils.toArray(".section3 > div");
const imageCounter = document.querySelector(".image-counter");

const galleryAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: horizontal,
    start: "top top",
    end: () => "+=" + (horizontal.offsetWidth - innerWidth),
    pin: true,
    ainicipatePin: 1,
    scrub: 1,
    invalidateOnRefresh: true,
    snap: {
      snapTo: 1 / (imgs.length - 1),
      inertia: false,
      duration: { min: 1, max: 1 },
    },
    onUpdate: (self) => {
      const progress = self.progress;
      const currentIndex = Math.round(progress * (imgs.length - 1)) + 1;
      imageCounter.textContent = `${currentIndex} / ${imgs.length}`;
    },
  },
});

galleryAnimation.to(imgs, { xPercent: -100 * (imgs.length - 1), ease: "none" });
