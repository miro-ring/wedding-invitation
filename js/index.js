import "./introText.js";
import "./dude.js";
import "./particles.js";
import "./gallery.js";
import "./kakaomap.js";
import "./preventCapture.js";
import "./skyHeight.js";
import "./heartList.js";
import "./copyText.js";
import "./callText.js";

// 쿼리 파라미터 체크 - type=2인 경우 section2 제거하고 section2-2 표시, 확대 허용
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type");

  if (type === "2") {
    // section2 제거
    const section2 = document.querySelector(".section2");
    if (section2) section2.remove();

    // section2-2 표시 (display:none 제거)
    const section2_2 = document.querySelector(".section2-2");
    if (section2_2) section2_2.style.display = "block";

    // 확대 허용 (user-scalable=yes로 변경)
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, user-scalable=yes, viewport-fit=cover, interactive-widget=resizes-content"
      );
    }
  }
});
