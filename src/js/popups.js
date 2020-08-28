import Swiper from 'swiper/js/swiper.js';

export default function popupMenu() {
    const popupButton = document.querySelector('.uniforms__button');
    const popupClose = document.querySelector('.popup__close-button');
    const popup = document.querySelector('.popup');
    const body = document.querySelector('body');

    let popupButtonOffset = popupButton.getBoundingClientRect();
    popup.style.top = popupButtonOffset.top + 'px';

    popupButton.addEventListener('click', function () {
        let popupButtonOffset = popupButton.getBoundingClientRect();
        popup.classList.toggle('hidden');
        popup.style.top = popupButtonOffset.top + window.outerHeight + 'px';
        body.classList.toggle('dimmed');

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

    });

    popupClose.addEventListener('click', function () {
        popup.classList.toggle('hidden');
        body.classList.toggle('dimmed');
    });

    body.addEventListener('click', function (event) {
        if (event.target == this) {
            popup.classList.toggle('hidden');
            body.classList.toggle('dimmed');
        }

    });
}
