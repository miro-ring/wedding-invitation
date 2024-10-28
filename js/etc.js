gsap.from(".come", {
  scrollTrigger: {
    trigger: ".section4",
    start: "top 200px",
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
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1,
});
