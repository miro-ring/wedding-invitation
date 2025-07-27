document.addEventListener("DOMContentLoaded", function () {
  const heartItems = document.querySelectorAll(".heart_item");

  heartItems.forEach((item) => {
    let currentRotation = 0; // 각 아이템별 현재 회전 각도 추적

    item.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetMenu = document.getElementById(targetId);
      const arrow = this.querySelector(".dropdown-arrow");

      // 현재 상태에 따라 다음 회전 각도 결정
      if (this.classList.contains("active")) {
        // active → inactive: 180도 → 360도
        currentRotation += 180;
      } else {
        // inactive → active: 0도 → 180도 (또는 360도 → 540도)
        currentRotation += 180;
      }

      // 화살표 회전 적용
      arrow.style.transform = `rotate(${currentRotation}deg)`;

      // 아코디언 토글
      this.classList.toggle("active");
      targetMenu.classList.toggle("active");
    });
  });
});
