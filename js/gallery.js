const xValue = 630 - window.innerWidth;

const gallery = gsap.timeline({
  scrollTrigger: {
    scrub: true,
    pin: true,
    trigger: ".section3",
    start: "0% 0%",
    end: "+=1000px",
    toggleActions: "play pause reverse reverse",
  },
});
gallery.set(".col-2", { x: -xValue });
gallery.set(".col-4", { x: -xValue });

gallery.to(".col-1", { x: -xValue }, 0);
gallery.to(".col-2", { x: 0 }, 0);
gallery.to(".col-3", { x: -xValue }, 0);
gallery.to(".col-4", { x: 0 }, 0);
