
import Swiper from 'swiper/js/swiper.js';


export default function () {
  const photos = new Swiper('.photos__swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: true,
  });


  const banner = new Swiper('.banner__swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: true,
  });


  if (window.innerWidth < 768) {
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


    const stages = new Swiper('.stages__swiper-container', {
      parallax: true,
      speed: 600,
      pagination: {
        el: '.stages__swiper-pagination',
      },
      navigation: {
        nextEl: '.stages__swiper-button-next',
        prevEl: '.stages__swiper-button-prev',
      },
    });

    const feedback = new Swiper('.feedback__swiper-container', {
      centeredSlides: true,
      pagination: {
        el: '.feedback__swiper-pagination',
      },
      navigation: {
        nextEl: '.feedback__swiper-button-next',
        prevEl: '.feedback__swiper-button-prev',
      },
    });
  }
  else {
    const stages = new Swiper('.stages__swiper-container', {
      direction: 'horizontal',
      mousewheel: true,
      speed: 600,
      parallax: true,
      slidesPerView: 1,
    });

    const feedback = new Swiper('.feedback__swiper-container', {
      centeredSlides: true,
      pagination: {
        el: '.feedback__swiper-pagination',
      },
      navigation: {
        nextEl: '.feedback__swiper-button-next',
        prevEl: '.feedback__swiper-button-prev',
      },
    });
  }

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



  // expand menu
  const coll = document.getElementsByClassName('collapsible');
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
        if (window.innerWidth < 768)
          content.style.marginBottom = 52 + 'px';
        else if (window.innerWidth >= 768)
          content.style.marginBottom = 113 + 'px';
      }
    });
  }
}




