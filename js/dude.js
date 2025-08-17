// man
const dude = document.querySelector(".new-man");
const head = dude.querySelector(".head");
const legs = Array.from(dude.querySelectorAll(".leg"));
const leftArm = dude.querySelector(".left-arm");
const rightArm = dude.querySelector(".right-arm");
const legBottoms = Array.from(dude.querySelectorAll(".leg-bottom"));
const armBottoms = Array.from(dude.querySelectorAll(".arm-bottom"));

gsap.set(leftArm, {
  svgOrigin: "100 -20",
});
gsap.set(rightArm, {
  svgOrigin: "100 2",
});
gsap.set(head, {
  svgOrigin: "140 -50",
});
gsap.set(armBottoms, {
  svgOrigin: "130 45",
});
gsap.set(legs, {
  svgOrigin: "100 106",
});
gsap.set(legBottoms, {
  svgOrigin: "133 184",
});

gsap.set(".bride-head", {
  svgOrigin: "100 10",
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

const halfBodyTimeline = (leg, arm) => {
  const legBottom = leg.querySelector(".leg-bottom");
  console.log(leg);
  console.log(arm);
  const armBottom = arm.querySelector(".arm-bottom");

  return gsap
    .timeline({
      repeat: -1,
      paused: true,
    })
    .fromTo(
      leg,
      {
        rotation: -20,
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
        rotation: -20,
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
        rotation: 50,
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

console.log(rightArm);
console.log(leftArm);

const backCycle = halfBodyTimeline(legs[0], rightArm);
const frontCycle = halfBodyTimeline(legs[1], leftArm);

const bodyTimeline = gsap
  .timeline({
    paused: true,
  })
  .to(
    dude,
    {
      duration: 0.25,
      y: "-=1",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    },
    0
  )
  .fromTo(
    head,
    {
      rotation: -3,
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
  .to(head, { duration: 0.5, rotation: -15 }, "end")
  .to(dude, { duration: 0.5, y: "+=50", ease: "power2.inOut" }, "end")
  .to(legs[0], { duration: 0.5, rotation: -80, ease: "sine.inOut" }, "end")
  .to(legBottoms[0], { duration: 0.5, rotation: 85, ease: "sine.inOut" }, "end")
  .to(legs[1], { duration: 0.5, rotation: 20, ease: "sine.inOut" }, "end")
  .to(legBottoms[1], { duration: 0.5, rotation: 50, ease: "sine.inOut" }, "end")
  .to(leftArm, { duration: 0.5, rotation: -60 }, "end")
  .to(armBottoms[0], { duration: 0.5, rotation: -40 }, "end")
  .to(rightArm, { duration: 0.5, rotation: -55 }, "end")
  .to(armBottoms[1], { duration: 0.5, rotation: -30 }, "end")
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

// window.addEventListener("resize", () => {
//   ScrollTrigger.refresh();
// });
