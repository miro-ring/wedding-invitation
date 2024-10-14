gsap.to(".skip-gallery", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".section3",
    start: "top top",
    end: "top+=2000px top",
    toggleActions: "play none none reverse",
    onEnter: () => {
      gsap.to(".skip-gallery", { opacity: 1, duration: 0.3 });
    },
    onLeave: () => {
      gsap.to(".skip-gallery", { opacity: 0, duration: 0.3 });
    },
    onEnterBack: () => {
      gsap.to(".skip-gallery", { opacity: 1, duration: 0.3 });
    },
  },
});
