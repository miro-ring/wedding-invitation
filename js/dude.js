// man
const dude = document.querySelector(".dude");
const head = dude.querySelector(".head");
const legs = Array.from(dude.querySelectorAll(".leg"));
const arms = Array.from(dude.querySelectorAll(".arm"));
const legBottoms = Array.from(dude.querySelectorAll(".leg-bottom"));
const armBottoms = Array.from(dude.querySelectorAll(".arm-bottom"));

// woman
const dudeWoman = document.querySelector(".dude-woman");
const headWoman = dudeWoman.querySelector(".head-woman");
const hairWoman = dudeWoman.querySelector(".hair-woman");
const legsWoman = Array.from(dudeWoman.querySelectorAll(".leg-woman"));
const armsWoman = Array.from(dudeWoman.querySelectorAll(".arm-woman"));
const legBottomsWoman = Array.from(
  dudeWoman.querySelectorAll(".leg-bottom-woman")
);
const armBottomsWoman = Array.from(
  dudeWoman.querySelectorAll(".arm-bottom-woman")
);

gsap.set(arms, {
  svgOrigin: "180 58",
});
gsap.set(head, {
  svgOrigin: "180 45",
});
gsap.set(armBottoms, {
  svgOrigin: "178 118",
});
gsap.set(legs, {
  svgOrigin: "177 145",
});
gsap.set(legBottoms, {
  svgOrigin: "171 220",
});

gsap.set(headWoman, {
  svgOrigin: "180 45",
});
gsap.set(hairWoman, {
  svgOrigin: "180 45",
});

gsap.set(".left-front-arm", {
  svgOrigin: "116 36",
});

gsap.set(".left-bottom-arm", {
  svgOrigin: "120 20",
});

gsap.set(".left-front-hand", {
  svgOrigin: "118 38",
});

gsap.set(".bride-head", {
  svgOrigin: "100 10",
});

const halfBodyTimeline = (leg, arm) => {
  const legBottom = leg.querySelector(".leg-bottom");
  const armBottom = arm.querySelector(".arm-bottom");

  return gsap
    .timeline({
      repeat: -1,
      paused: true,
    })
    .fromTo(
      leg,
      {
        rotation: -25,
      },
      {
        duration: 0.5,
        rotation: 15,
        ease: "sine.inOut",
      },
      0
    )
    .to(
      leg,
      {
        duration: 0.25,
        rotation: -25,
        ease: "sine.in",
      },
      ">"
    )
    .to(
      legBottom,
      {
        duration: 0.25,
        rotation: 15,
        ease: "sine.inOut",
      },
      0.25
    )
    .to(
      legBottom,
      {
        duration: 0.25,
        rotation: 80,
        ease: "sine.in",
      },
      ">"
    )
    .to(
      legBottom,
      {
        duration: 0.25,
        rotation: 0,
        ease: "sine.out",
      },
      ">"
    )
    .fromTo(
      arm,
      {
        rotation: -12,
      },
      {
        duration: 0.5,
        rotation: 12,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 1,
      },
      0
    )
    .fromTo(
      armBottom,
      {
        rotation: -15,
      },
      {
        duration: 0.5,
        rotation: 10,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 1,
      },
      0
    );
};

const backCycle = halfBodyTimeline(legs[0], arms[1]);
const frontCycle = halfBodyTimeline(legs[1], arms[0]);

const bodyTimeline = gsap
  .timeline({
    paused: true,
  })
  .to(
    dude,
    {
      duration: 0.25,
      y: "-=4",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    },
    0
  )
  .fromTo(
    head,
    {
      rotation: -10,
    },
    {
      duration: 0.25,
      rotation: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    },
    0
  );

const numberOfCycles = Math.ceil((3 * window.innerWidth) / window.innerHeight);

const scrollTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scrub: true,
    start: "0% 0%",
    end: "100% 100%",
  },
});

scrollTimeline
  .fromTo(
    bodyTimeline,
    {
      time: 0.7,
    },
    {
      time: 0.75 + numberOfCycles,
    },
    0
  )
  .fromTo(
    backCycle,
    {
      time: 1.0,
    },
    {
      time: 1.05 + numberOfCycles,
    },
    0
  )
  .fromTo(
    frontCycle,
    {
      time: 0.5,
    },
    {
      time: 0.55 + numberOfCycles,
    },
    0
  )
  .to(head, { duration: 0.5, rotation: -25 }, "end")
  .to(dude, { duration: 0.5, y: "+=50", ease: "power2.inOut" }, "end")
  .to(legs[0], { duration: 0.5, rotation: -80, ease: "sine.inOut" }, "end")
  .to(legBottoms[0], { duration: 0.5, rotation: 85, ease: "sine.inOut" }, "end")
  .to(legs[1], { duration: 0.5, rotation: 20, ease: "sine.inOut" }, "end")
  .to(legBottoms[1], { duration: 0.5, rotation: 50, ease: "sine.inOut" }, "end")
  .to(arms[0], { duration: 0.5, rotation: -60 }, "end")
  .to(armBottoms[0], { duration: 0.5, rotation: -40 }, "end")
  .to(arms[1], { duration: 0.5, rotation: -55 }, "end")
  .to(armBottoms[1], { duration: 0.5, rotation: -30 }, "end")
  // woman
  .to(headWoman, { duration: 0.2, rotation: 10 }, "-=0.2")
  .to(hairWoman, { duration: 0.2, rotation: 10 }, "-=0.2")
  .to(armsWoman[0], { duration: 0.2, rotation: -20 }, "-=0.2")
  .to(armBottomsWoman[0], { duration: 0.2, rotation: -130 }, "-=0.2")
  .to(armsWoman[1], { duration: 0.2, rotation: -40 }, "-=0.2")
  .to(armBottomsWoman[1], { duration: 0.2, rotation: -120 }, "-=0.2")

  .to(".left-bottom-arm", { duration: 0.2, rotation: 35 }, "-=0.2")
  .to(".left-front-arm", { duration: 0.2, rotation: 55 }, "-=0.2")
  .to(".left-front-hand", { duration: 0.2, rotation: 55 }, "-=0.2")
  .to(".bride-head", { duration: 0.2, rotation: -15 }, "-=0.2");

const scrollTimeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scrub: true,
    start: "top center", // section1의 상단이 화면 중앙에 왔을 때
    end: "bottom center", // section1의 하단이 화면 중앙에 왔을 때
    onEnter: () => {
      gsap.to(".animation-container", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    },
    onLeave: () => {
      gsap.to(".animation-container", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    onEnterBack: () => {
      gsap.to(".animation-container", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(".animation-container", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
  },
});

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
