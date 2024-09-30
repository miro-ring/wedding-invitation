const canvas = document.querySelector(".confetti-canvas");
const myConfetti = confetti.create(canvas, { resize: true });
let isConfettiActive = true;
let isConfettiStopped = false;

const randomInRange = (min, max) => Math.random() * (max - min) + min;

const startConfetti = () => {
  const duration = 15 * 1000;
  let skew = 1;

  const frame = () => {
    if (!isConfettiActive) return;

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

  frame();
};

startConfetti();

window.addEventListener("scroll", () => {
  if (window.scrollY >= 2000 && isConfettiActive) {
    isConfettiActive = false;
    isConfettiStopped = true;
  }

  if (window.scrollY < 2000 && isConfettiStopped) {
    isConfettiActive = true;
    isConfettiStopped = false;
    startConfetti();
  }
});
