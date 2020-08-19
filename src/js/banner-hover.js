export default function bannerHover() {
  // banner hovers
  if (window.innerWidth >= 1450) {

    let bannerWrap = document.querySelectorAll('.banner__wrap');
    bannerWrap.forEach((elem) => {
      elem.addEventListener('mouseenter', (event) => {
        event.target.classList.add('banner__wrap--active');

      });
      elem.addEventListener('mouseleave', event => {
        event.target.classList.remove('banner__wrap--active');
      });
    });


  }
}