document.addEventListener("DOMContentLoaded", function () {
  const copyButtons = document.querySelectorAll(".copy_button");
  copyButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation(); // 부모 요소의 클릭 이벤트 방지

      // data-copy 속성에서 복사할 텍스트 가져오기
      const textToCopy = this.dataset.copy;

      if (!textToCopy) {
        console.error("복사할 텍스트가 없습니다.");
        return;
      }

      // 클립보드에 복사
      navigator.clipboard.writeText(textToCopy).then(() => {
        showCopySuccess(this);
      });
    });
  });
});

function showCopySuccess(button) {
  // 원래 SVG 아이콘 저장
  // const originalIcon = button.querySelector(".copy_icon");
  // const checkIcon = button.querySelector(".check_icon");

  // // 복사 아이콘 숨기기
  // originalIcon.style.display = "none";

  // // 체크 아이콘 보이기
  // checkIcon.style.display = "block";

  window.alert("복사되었습니다.");

  // 3초 후 원래 상태로 복원
  // setTimeout(() => {
  //   originalIcon.style.display = "block";
  //   checkIcon.style.display = "none";
  // }, 3000);
}
