function setVhProperty() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// 초기 설정
setVhProperty();
