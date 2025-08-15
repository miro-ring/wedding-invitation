document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.querySelector(".call_button");
  const contactDropdown = document.getElementById("contactDropdown");

  contactButton.addEventListener("click", function () {
    contactDropdown.classList.toggle("active");

    // 버튼 텍스트 변경
    if (contactDropdown.classList.contains("active")) {
      contactButton.textContent = "닫기";
    } else {
      contactButton.textContent = "연락하기";
    }
  });
});
