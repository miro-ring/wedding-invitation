const introTextAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro_texts",
    start: "0% 0%",
    end: "+=2706px",
    scrub: true,
    pin: true,
    anticipatePin: 1,
  },
});

introTextAnimation
  .from(".intro_text.t1", { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
  .from(".intro_text.t2", { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
  .from(".intro_text.t3", { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
  .from(".intro_text.t4", { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
  .from(".intro_text.t5", { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
  .from(".intro_text.t6", { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
  .from(".intro_text.t7", { autoAlpha: 0, duration: 1, y: 50 }, "+=1");

function setVhProperty() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// 초기 설정
setVhProperty();
