// ScrollTrigger 전역 설정
ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize", // resize 추가
  // ignoreMobileResize: true, // 제거 - 모든 리사이즈 이벤트 허용
});

gsap.from(".come", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top 60%", // 뷰포트의 80% 지점에서 시작
    toggleActions: "play reverse play reverse",
    refreshPriority: -1, // 낮은 우선순위
    fastScrollEnd: true, // 빠른 스크롤 최적화
    markers: true,
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".location", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top 55%", // 일관된 퍼센트 값
    toggleActions: "play reverse play reverse",
    refreshPriority: -1,
    fastScrollEnd: true,
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from("#map", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top 40%", // 일관된 퍼센트 값
    toggleActions: "play reverse play reverse",
    refreshPriority: -1,
    fastScrollEnd: true,
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".map_links_wrapper", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top 30%", // 일관된 퍼센트 값
    toggleActions: "play reverse play reverse",
    refreshPriority: -1,
    fastScrollEnd: true,
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".parking_tip_container", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top 20%", // 일관된 퍼센트 값
    toggleActions: "play reverse play reverse",
    refreshPriority: -1,
    fastScrollEnd: true,
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".parking_tip_text_container", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top 10%", // 일관된 퍼센트 값
    toggleActions: "play reverse play reverse",
    refreshPriority: -1,
    fastScrollEnd: true,
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".come_tip_container", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top 0%", // 일관된 퍼센트 값
    toggleActions: "play reverse play reverse",
    refreshPriority: -1,
    fastScrollEnd: true,
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".come_tip_text_container", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top -10%", // 일관된 퍼센트 값
    toggleActions: "play reverse play reverse",
    refreshPriority: -1,
    fastScrollEnd: true,
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".line", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top -25%", // 일관된 퍼센트 값
    toggleActions: "play reverse play reverse",
    refreshPriority: -1,
    fastScrollEnd: true,
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".heart", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top -40%", // 일관된 퍼센트 값
    toggleActions: "play reverse play reverse",
    refreshPriority: -1,
    fastScrollEnd: true,
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".heart_list", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top -50%", // 일관된 퍼센트 값
    toggleActions: "play reverse play reverse",
    refreshPriority: -1,
    fastScrollEnd: true,
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".blessing_text", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top -50%", // 일관된 퍼센트 값
    toggleActions: "play reverse play reverse",
    refreshPriority: -1,
    fastScrollEnd: true,
  },
  opacity: 0,
  y: 50,
  duration: 1,
});
