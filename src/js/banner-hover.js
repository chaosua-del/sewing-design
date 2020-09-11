import $ from 'jquery';
// import marquee from 'jquery.marquee.min.js'
import normalize from 'utils';
window.jQuery = $;
// window.app = app;



export default function bannerHover() {



    let bannerWrap = document.querySelector('.banner__wrap2');
    let bannerSlide = document.querySelector('.banner__swiper-slide');
    let bannerTitle = document.querySelectorAll('.banner__title');
    let bannerText = document.querySelector('.banner__wrap-text');

    // bannerTitle.forEach(elem => {
    //     elem.addEventListener('mouseover', event => {
    //         event.target.style.color = '#FFFFFF';
    //     });
    //     elem.addEventListener('mouseout', event => {
    //         event.target.style.color = 'transparent';
    //     });
    // });

    const speed = 100;
    let direction = 0;
    let speedMultiplier = 0;
    let nextPos = -2000;
    let canMove = false;

    let interval = setInterval(() => {
        if (!canMove) return;
        nextPos += speed * speedMultiplier * direction;
        if (nextPos <= -bannerText.scrollWidth + window.innerWidth || nextPos >= 0) {
            canMove = false;
            return;
        }
        console.log(nextPos);
        bannerText.style.transform = `translate(${nextPos}px, -50%)`;

    }, 1000 / 60);

    bannerWrap.addEventListener('mousemove', event => {
        let center = window.innerWidth / 2;
        let left = 0;
        let right = window.innerWidth;
        direction = normalize((event.clientX - center), right, left);
        speedMultiplier = Math.abs(direction);

    });

    bannerText.addEventListener('mouseenter', () => {
        canMove = true;
        bannerWrap.classList.add('banner__wrap--active');
    });

    bannerText.addEventListener('mouseleave', () => {
        canMove = false;
        bannerWrap.classList.remove('banner__wrap--active');
    });

    const photosDimm = document.querySelectorAll('.photos__dimm');

    $('.photos__swiper-slide').on('mouseenter', event => {
        // console.log('hello');
        photosDimm.forEach(elem => {
            // console.log(elem);
            elem.style.backgroundColor = '#FFFFFF';
        });
        event.target.style.backgroundColor = 'transparent';
    });

    $('.photos__swiper-slide').on('mouseleave', event => {
        // console.log('hello');
        photosDimm.forEach(elem => {
            // console.log(elem);
            elem.style.backgroundColor = 'transparent';
        });
        // event.target.style.backgroundColor = 'transparent';
    });




}
