// 지도 설정
const MAP_CONFIG = {
  center: new kakao.maps.LatLng(37.5408, 127.0712),
  level: 3,
  draggable: false,
};

const MARKER_CONFIG = {
  imageSrc: "../imgs/marker.png",
  imageSize: new kakao.maps.Size(50, 50),
  imageOffset: new kakao.maps.Point(10, 65),
  position: new kakao.maps.LatLng(37.5408, 127.0712),
};

const OVERLAY_CONFIG = {
  position: new kakao.maps.LatLng(37.5415, 127.07135),
  title: "스타시티아트홀 5층",
  mapLink: "https://map.kakao.com/link/map/11394059",
};

// 지도 초기화 함수
const initializeMap = () => {
  const container = document.getElementById("map");

  if (!container) {
    console.error("지도 컨테이너를 찾을 수 없습니다.");
    return;
  }

  // 지도 생성
  const map = new kakao.maps.Map(container, MAP_CONFIG);

  // 마커 이미지 생성
  const markerImage = new kakao.maps.MarkerImage(
    MARKER_CONFIG.imageSrc,
    MARKER_CONFIG.imageSize,
    { offset: MARKER_CONFIG.imageOffset }
  );

  // 마커 생성 및 지도에 표시
  const marker = new kakao.maps.Marker({
    position: MARKER_CONFIG.position,
    image: markerImage,
  });
  marker.setMap(map);

  // 커스텀 오버레이 생성
  const overlayContent = `
    <div class="customoverlay">
      <a href="${OVERLAY_CONFIG.mapLink}" target="_blank" rel="noopener noreferrer">
        <span class="title">${OVERLAY_CONFIG.title}</span>
      </a>
    </div>
  `;

  const customOverlay = new kakao.maps.CustomOverlay({
    map,
    position: OVERLAY_CONFIG.position,
    content: overlayContent,
  });

  return { map, marker, customOverlay };
};

// 지도 초기화 실행
initializeMap();
