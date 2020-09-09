import Swiper from 'swiper/js/swiper.js';
import $ from 'jquery';
import mousewheel from 'libs/jquery.mousewheel.min.js';

export default function popupMenu() {
    const popupButton = $('.uniforms__button');
    const popupClose = $('.popup__close-button');
    const popup = $('.popup');
    const popupFixed = $('.popup__close-fixed');
    const popupDimm = $('.popup__dimm');

    function initPopup() {

        $(window).on('scroll', function () {
            // console.log('gg');

            if (popupFixed.offset().top >= $('.popup__model-wrap').offset().top && popupFixed.offset().top < $('.popup').height()) {
                popupFixed.css('opacity', '1');
            } else {
                popupFixed.css('opacity', '0');
            }

            if ($(window).scrollTop() >= popup.height() && window.innerWidth < 1450) {
                $('.content').css('display', 'none');
                $('.header').css('display', 'none');
                $('.footer').css('display', 'none');
                // popup.css('top', '0');
                

            } else if($(window).scrollTop() < popup.height() && window.innerWidth < 1450) {
                $('.content').css('display', 'block');
                $('.header').css('display', 'block');
                $('.footer').css('display', 'block');
            }

         
        });

        popup.fadeIn();
        popupDimm.fadeIn();
        popup.css('top', $(window).scrollTop());

        if (popupFixed.offset().top >= $('.popup__model-wrap').offset().top && popupFixed.offset().top < $('.popup').height()) {
            popupFixed.css('opacity', '1');
        } else {
            popupFixed.css('opacity', '0');
        }

        // body.classList.toggle('dimmed');
        console.log($(window).scrollTop());

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
    }



    function showAll() {
        $('.content').css('display', 'block');
        $('.header').css('display', 'block');
        $('.footer').css('display', 'block');
        // popup.css('top', '0');
        $(window).off('scroll');
    }


    popupButton.on('click', function () {
        initPopup();
    });


    popupClose.on('click', function () {
        popup.fadeOut();
        popupDimm.fadeOut();
        showAll();
        // body.classList.toggle('dimmed');
    });



    popupDimm.on('click', function (event) {
        if (event.target == this) {
            popup.fadeOut();
            popupDimm.fadeOut();
            showAll();

        }

    });

    $('.uniforms__card').on('click', () => {
        initPopup();
    });

    $('.uniforms__title').on('click', () => {
        initPopup();
    });

    $('.hero__button').on('click', event => {
        modalShow();
    });

    $('.header__contacts-button').on('click', event => {
        modalShow();
    });

    $('.header__button').on('click', event => {
        modalShow();
    });

    $('.footer__contacts-button').on('click', event => {
        modalShow();
    });

    $('.stages__card-button').on('click', event => {
        modalShow();
    });

    $('.modalForm__close').on('click', event => {
        modalHide();
    });

    document.querySelector('.modalForm').addEventListener('click', event => {
        if(event.target.classList.contains('modalForm')) {
            // console.log('hello');
            modalHide();
        } 
    });

    function modalShow() {
        $('.modalForm').fadeIn('fast');
        $('body').css('overflow', 'hidden');
    }

    function modalHide() {
        $('.modalForm').fadeOut('fast');
        $('body').css('overflow', 'visible');
    }

}
