import Swiper from 'swiper';

export default function () {
  const photos = new Swiper('.photos__swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: true,
  });

  const benefits = new Swiper('.benefits__swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: false,
    slidesOffsetAfter: 2,
    // centerInsufficientSlides: 'true'
  });

  const benefits2 = new Swiper('.benefits2__swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: false,
    slidesOffsetAfter: 0,
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
    slidesPerView: 'auto',
    pagination: {
      el: '.clients__swiper-pagination',
    },
    navigation: {
      nextEl: '.clients__swiper-button-next',
      prevEl: '.clients__swiper-button-prev',
    },
  });

  const feedback = new Swiper('.feedback__swiper-container', {
    slidesPerView: '1.1',
    slidesOffsetBefore: 10,
    slidesOffsetAfter: 10,
    pagination: {
      el: '.feedback__swiper-pagination',
    },
    navigation: {
      nextEl: '.feedback__swiper-button-next',
      prevEl: '.feedback__swiper-button-prev',
    },
  });

  const popup = new Swiper('.popup__swiper-container', {
    pagination: {
      el: '.popup__swiper-pagination',
    },
    navigation: {
      nextEl: '.popup__swiper-button-next',
      prevEl: '.popup__swiper-button-prev',
    },
  });

  const sliderModel = new Swiper('.sliderModel__swiper-container', {
    pagination: {
      el: '.sliderModel__swiper-pagination',
    },
    navigation: {
      nextEl: '.sliderModel__swiper-button-next',
      prevEl: '.sliderModel__swiper-button-prev',
    },
  });

  const coll = document.getElementsByClassName('collapsible');
  // const card = document.getElementsByClassName('questions__card');
  let i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
      this.classList.toggle('active');
      // card.classList.toggle('questions__card--active');
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.marginBottom = 0 + 'px';
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.marginBottom = 52 + 'px';
      }
    });
  }
}
