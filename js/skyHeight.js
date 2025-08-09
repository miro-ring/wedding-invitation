function setVhProperty() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  const fixedWidth = window.screen.width;
  const fixedHeight = window.screen.height;

  // CSS 변수로 고정 크기 설정
  document.documentElement.style.setProperty(
    "--fixed-width",
    `${fixedWidth}px`
  );
  document.documentElement.style.setProperty(
    "--fixed-height",
    `${fixedHeight}px`
  );
}

// 초기 설정
setVhProperty();
