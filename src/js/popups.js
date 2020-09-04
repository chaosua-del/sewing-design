import Swiper from 'swiper/js/swiper.js';
import $ from 'jquery';

export default function popupMenu() {
    const popupButton = $('.uniforms__button');
    const popupClose = $('.popup__close-button');
    const popup = $('.popup');
    const popupFixed = $('.popup__close-fixed');
    const popupDimm = $('.popup__dimm');
    // инициализуем слайдеры
    const sliderModel = new Swiper('.sliderModel__swiper-container', {
        freeMode: false,
        loop: false,
        pagination: {
            el: '.sliderModel__swiper-pagination',
        },
        navigation: {
            nextEl: '.sliderModel__swiper-button-next',
            prevEl: '.sliderModel__swiper-button-prev',
        },
    });

    if (window.innerWidth < 768) {
        const sliderPopup = new Swiper('.popup__swiper-container', {
            freeMode: false,
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 0,
            pagination: {
                el: '.popup__swiper-pagination',
            },
            navigation: {
                nextEl: '.popup__swiper-button-next',
                prevEl: '.popup__swiper-button-prev',
            },
        });
    }


    $(window).on('scroll', function () {
        // console.log('gg');

        if (popupFixed.offset().top >= $('.popup__model-wrap').offset().top && popupFixed.offset().top < $('.popup').height()) {
            popupFixed.css('opacity', '1');
        } else {
            popupFixed.css('opacity', '0');
        }

    });

    popupButton.on('click', function () {

        popup.fadeIn();
        popupDimm.fadeIn();
        // body.classList.toggle('dimmed');

    });


    popupClose.on('click', function () {
        popup.fadeOut();
        popupDimm.fadeOut();
        // body.classList.toggle('dimmed');
    });



    popupDimm.on('click', function (event) {
        if (event.target == this) {
            popup.fadeOut();
            popupDimm.fadeOut();

        }

    });

    $('.uniforms__card').on('click', () => {
        popup.fadeIn();
    });

    $('.uniforms__title').on('click', () => {
        popup.fadeIn();
    });

    $('.hero__button').on('click', event => {
        $('.modalForm').fadeIn('fast');
        // console.log('asdsadsa');
    });

    $('.header__contacts-button').on('click', event => {
        $('.modalForm').fadeIn('fast');
        // console.log('asdsadsa');
    });
    // console.log($('.modalForm__close'));

    $('.modalForm__close').on('click', event => {
        $('.modalForm').fadeOut('fast');
    });
}
