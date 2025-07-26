// 화면 캡처 방지
if (window.outerHeight - window.innerHeight > 200) {
  document.body.style.display = "none";
}

// 화면 크기 변경 감지
window.addEventListener("resize", function () {
  if (window.outerHeight - window.innerHeight > 200) {
    document.body.style.display = "none";
  }
});

// 키보드 단축키 방지
document.addEventListener("keydown", function (e) {
  if (e.key === "PrintScreen" || (e.ctrlKey && e.key === "p")) {
    e.preventDefault();
    return false;
  }
});

// 우클릭 방지
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  return false;
});
