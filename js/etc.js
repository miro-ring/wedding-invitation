gsap.from(".come", {
  scrollTrigger: {
    trigger: ".section4",
    start: "top 200px",
    markers: true,
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".map", {
  scrollTrigger: {
    trigger: ".section4",
    start: "top 170px",
    markers: true,
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".name-wrapper", {
  scrollTrigger: {
    trigger: ".section4",
    start: "top 140px",
    markers: true,
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1,
});
