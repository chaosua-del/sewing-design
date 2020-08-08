import Swiper from 'swiper';

export default function () {
  const photos = new Swiper('.photos__swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: true,
  });

  const benefits = new Swiper('.benefits__swiper-container', {
    slidesPerView: 1.55,
    spaceBetween: 0,
    freeMode: true,
    loop: false,
    slidesOffsetAfter: 140,
    // centerInsufficientSlides: 'true'
  });

  const banner = new Swiper('.banner__swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: true,
  });

  const stages = new Swiper('.stages__swiper-container', {
    pagination: {
      el: '.stages__swiper-pagination',
    },
    navigation: {
      nextEl: '.stages__swiper-button-next',
      prevEl: '.stages__swiper-button-prev',
    },
  });

  const clients = new Swiper('.clients__swiper-container', {
    pagination: {
      el: '.clients__swiper-pagination',
    },
    navigation: {
      nextEl: '.clients__swiper-button-next',
      prevEl: '.clients__swiper-button-prev',
    },
  });
}
