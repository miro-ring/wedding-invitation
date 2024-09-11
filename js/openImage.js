const openImage = gsap.timeline({
  scrollTrigger: {
    scrub: true,
    pin: true,
    trigger: ".page2",
    start: "0% 0%",
    end: "+=3500px",
    toggleActions: "play pause reverse reverse",
  },
});

openImage.from(".row", { height: "0%" });
openImage.to(".wedding_image", { opacity: 1 });
