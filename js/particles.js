const canvas = document.querySelector(".confetti-canvas");
const myConfetti = confetti.create(canvas, { resize: true }); // canvas 크기 자동 조절
let isConfettiActive = true; // Confetti 애니메이션이 실행 중인지 확인하는 플래그

const randomInRange = (min, max) => Math.random() * (max - min) + min;

const startConfetti = () => {
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  let skew = 1;

  const frame = () => {
    if (!isConfettiActive) return; // Confetti가 중단되면 더 이상 새로운 confetti 생성 안 함

    skew = Math.max(0.8, skew - 0.001);

    myConfetti({
      particleCount: 1,
      startVelocity: 0,

      origin: {
        x: Math.random(),
        y: Math.random() * skew - 0.2,
      },
      colors: ["#FFC0CB"],
      shapes: ["circle"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });

    requestAnimationFrame(frame);
  };

  frame(); // 애니메이션 루프 시작
};

startConfetti(); // Confetti 애니메이션 시작

window.addEventListener("scroll", () => {
  if (window.scrollY >= 2000 && isConfettiActive) {
    isConfettiActive = false; // Confetti 애니메이션 중단 (새로운 파티클 생성 중지)
  }
});
