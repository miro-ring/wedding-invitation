// ScrollTrigger 전역 설정
ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", // resize 제거
  ignoreMobileResize: true, // 모바일 리사이즈 무시
});

gsap.from(".come", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top 320px", // 더 일찍 시작하도록 증가
    toggleActions: "play reverse play reverse",
    refreshPriority: -1, // 낮은 우선순위
    fastScrollEnd: true, // 빠른 스크롤 최적화
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".location", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top 300px", // 350px → 300px로 조정
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
    start: "top 280px", // 150px → 250px로 조정
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
    start: "top 250px", // 140px → 200px로 조정
    toggleActions: "play reverse play reverse",
    refreshPriority: -1,
    fastScrollEnd: true,
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

// 하단 요소들을 하나의 타임라인으로 묶어서 최적화
const bottomElementsTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top -175px", // 중간값으로 조정
    toggleActions: "play reverse play reverse",
    refreshPriority: -1,
    fastScrollEnd: true,
  },
});

bottomElementsTimeline
  .from(".tip_container", { opacity: 0, y: 50, duration: 1 }, 0)
  .from(".tip_text_container", { opacity: 0, y: 50, duration: 1 }, 0.1)
  .from(".line", { opacity: 0, y: 50, duration: 1 }, 0.2)
  .from(".heart", { opacity: 0, y: 50, duration: 1 }, 0.3)
  .from(".heart_list", { opacity: 0, y: 50, duration: 1 }, 0.4);
