const section4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section4",
    start: "top center",
    toggleActions: "play reverse play reverse",
  },
});

section4
  .from(".come", { opacity: 0, y: 50, duration: 1 })
  .from(".map", { opacity: 0, y: 50, duration: 1, delay: 0.1 })
  .from(".name-wrapper", { opacity: 0, y: 50, duration: 1, delay: 0.2 });
