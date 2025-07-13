const openImage = gsap.timeline({
  scrollTrigger: {
    scrub: true,
    pin: true,
    markers: true,
    trigger: ".rows",
    start: "0% 0%",
    end: "+=3500px",
    toggleActions: "play pause reverse reverse",
  },
});

openImage.from(".corner-radius", { borderRadius: "0 0 0 0" });
openImage.from(".row", { height: "0%" }, "<");
openImage.to(".wedding_image", { opacity: 1 });
