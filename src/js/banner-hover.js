export default function bannerHover() {
  // banner hovers
  if (window.innerWidth >= 1250) {

    let bannerWrap = document.querySelectorAll('.banner__wrap');
    let bannerSlide = document.querySelector('.banner__swiper-slide');
    bannerWrap.forEach((elem) => {
      elem.addEventListener('mouseenter', (event) => {
        event.target.classList.add('banner__wrap--active');
        if (event.clientX > window.innerWidth / 2) {
          bannerSlide.style.transform = 'translateX(-30%)';
        }
        else if (bannerSlide.style.transform === 'translateX(-30%)') {
          console.log('hello');
          bannerSlide.style.transform = 'translateX(0%)';
        }

      });
      elem.addEventListener('mouseleave', event => {
        event.target.classList.remove('banner__wrap--active');
      });
    });


  }
}