const changeNavColors = () => {
    const nav = document.querySelector('.Nav');
    nav.style.backgroundColor = 'rgba(27, 20, 18, 0.7)';
  
    const navLinks = document.querySelectorAll('.Nav a');
    navLinks.forEach(link => {
      link.style.color = 'white';
    });
};
  
const handleScroll = () => {
  // 스크롤 위치를 확인
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // 원하는 스크롤 위치에 도달하면 색상 적용
  if (scrollPosition > 0) {
    changeNavColors();
  } else {
    // 스크롤 되지 않았을땐 원래 색상 적용
    const nav = document.querySelector('.Nav');
    nav.style.backgroundColor = ''; // 초기 배경색으로 변경

    const navLinks = document.querySelectorAll('.Nav a');
    navLinks.forEach(link => {
      link.style.color = ''; // 초기 글자 색상으로 변경
      link.style.backgroundColor = ''; // 초기 배경색으로 변경
    });
  }
};
  
// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', handleScroll);

// Initializing Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 40,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: { // 그물막 기능 활성화
      el: '.swiper-pagination',
      clickable: true, // 작은 네모에 클릭 기능 부여
      renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
      },
  },
});