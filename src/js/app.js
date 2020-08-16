import $ from 'jquery';
import 'lazysizes';


import page from 'page';
import forms from 'forms';
import sliders from 'sliders';
import { myMap } from 'map';

import Swiper from 'swiper/js/swiper.js';

let app = {

    // параметры, изменяемые в appConfig

    breakpoints: {
        sm: 320,
        md: 768,
        lg: 1280
    },
    media: 320,
    resizeEventName: 'app_resize',
    submitEventName: 'app_submit',
    popupLoadedEventName: 'app_popup_loaded',
    popupClosedEventName: 'app_popup_closed',
    tabChangedEventName: 'app_tab_changed',
    scrollToOffset: 200, // оффсет при скролле до элемента
    scrollToSpeed: 500, // скорость скролла 

    init: function () {
        // read config
        if (typeof appConfig === 'object') {
            Object.keys(appConfig).forEach(key => {
                if (Object.prototype.hasOwnProperty.call(app, key)) {
                    app[key] = appConfig[key];
                }
            });
        }

        app.currentID = 0;

        // Init page
        this.page = page;
        this.page.init.call(this);

        // Init page
        this.forms = forms;
        this.forms.init.call(this);

        app.checkMedia();
        app.window.on('resize', app.checkMedia);
        window.jQuery = $;
        window.app = app;

        app.document.ready(() => {
            this.initScrollTo();
        });

        // app.window.on('load', () => {
        // });

        // this.document.on(app.resizeEventName, () => {
        // });

    },

    initScrollTo: function () {
        app.document.on('click', '.js-scrollto', function () {
            let target = $(this).data('href');
            if (target) {
                let $target = $(target);
                if ($target.length) {
                    $('html, body').animate({
                        scrollTop: $target.offset().top - app.scrollToOffset
                    }, app.scrollToSpeed);
                }
            }
        });
    },

    formatPrice: function (price) {
        return this.formatNumber(price, 0, ',', ' ');
    },

    formatNumber: function (number, decimals, dec_point, thousands_sep) {
        // original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
        // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // bugfix by: Michael White (http://crestidg.com)
        let i, j, kw, kd, km;

        // input sanitation & defaults
        if (isNaN(decimals = Math.abs(decimals))) {
            decimals = 2;
        }
        if (dec_point == undefined) {
            dec_point = ',';
        }
        if (thousands_sep == undefined) {
            thousands_sep = '.';
        }

        i = parseInt(number = (+number || 0).toFixed(decimals)) + '';

        if ((j = i.length) > 3) {
            j = j % 3;
        } else {
            j = 0;
        }

        km = j
            ? i.substr(0, j) + thousands_sep
            : '';
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands_sep);
        kd = (decimals
            ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, '0').slice(2)
            : '');

        return km + kw + kd;
    },

    /**
     * Проверяет размер окна и пишет его в app.media
     * @returns void
     */
    checkMedia: function () {
        let current = app.media;
        for (let key in app.breakpoints) {
            if (app.window.outerWidth() >= app.breakpoints[key]) {
                app.media = app.breakpoints[key];
            }
            //            console.log(app.media);
        }
        if (app.media != current) {
            app.document.trigger(app.resizeEventName, { media: app.media });
        }
    },

    uniqID: function () {
        return `app_id_${app.currentID++}`;
    },

    /**
     * Функция возвращает окончание для множественного числа слова на основании числа и массива окончаний
     * param  iNumber Integer Число на основе которого нужно сформировать окончание
     * param  aEndings Array Массив слов или окончаний для чисел (1, 4, 5),
     *         например ['яблоко', 'яблока', 'яблок']
     * return String
     * 
     * https://habrahabr.ru/post/105428/
     */
    getNumEnding: function (iNumber, aEndings) {
        let sEnding, i;
        iNumber = iNumber % 100;
        if (iNumber >= 11 && iNumber <= 19) {
            sEnding = aEndings[2];
        } else {
            i = iNumber % 10;
            switch (i) {
                case (1):
                    sEnding = aEndings[0];
                    break;
                case (2):
                case (3):
                case (4):
                    sEnding = aEndings[1];
                    break;
                default:
                    sEnding = aEndings[2];
            }
        }
        return sEnding;
    },

    getKeyByValue: function (object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

};
app.init();


sliders();


// позиционирование кнопок в блоке model
// const block = document.querySelector('.model__buttons');
// let count = 0;
// let i;

document.addEventListener('DOMContentLoaded', function () {

    // for (i = 320; i < 768; i += 10) {
    //     count = (i - 320) / 10;
    //     if (i < 450) {
    //         // console.log(count);
    //         block.style.right = count + '%';
    //     }
    //     else if (i >= 450 && i < 570) {
    //         block.style.right = count / 2 + '%';
    //     }
    //     else if (i >= 570 && i < 640) {
    //         block.style.right = count / 2.3 + '%';
    //     }
    //     else if (i >= 640 && i < 768) {
    //         block.style.right = count / 2.5 + '%';
    //     }
    // }


    // function reportWindowSize() {

    //     for (i = 320; i < 768; i += 10) {
    //         count = (i - 320) / 10;
    //         if (i === window.innerWidth && i < 450) {
    //             // console.log(count);
    //             block.style.right = count + '%';
    //         }
    //         else if (i === window.innerWidth && i >= 450 && i < 570) {
    //             block.style.right = count / 1.5 + '%';
    //         }
    //         else if (i === window.innerWidth && i >= 570 && i < 640) {
    //             block.style.right = count / 1.7 + '%';
    //         }
    //         else if (i === window.innerWidth && i >= 640 && i < 768) {
    //             block.style.right = count / 2 + '%';
    //         }
    //     }
    // }

    // window.onresize = reportWindowSize;


    // скролл банера
    let banner = document.querySelector('.banner__wrap');
    let banner2 = document.querySelector('.banner2__wrap');

    let viewportOffset = banner.getBoundingClientRect();
    let viewportOffset2 = banner2.getBoundingClientRect();
    banner.style.transform = `translateX(-${viewportOffset.top / 50}%)`;
    banner2.style.transform = `translateX(-${viewportOffset2.top / 50}%)`;
    // let banner2 = 
    // banner.style.transform = 'translateX(-50%)';
    window.addEventListener('scroll', function () {
        let viewportOffset = banner.getBoundingClientRect();
        let viewportOffset2 = banner2.getBoundingClientRect();
        if (viewportOffset.top > 0 && viewportOffset.top > viewportOffset.top / 2) {
            banner.style.transform = `translateX(-${viewportOffset.top / 50}%)`;
        }
        else if (viewportOffset.top > 0 && viewportOffset.top < viewportOffset.top / 2) {
            banner.style.transform = `translateX(${viewportOffset.top / 50}%)`;
        }
        else if (viewportOffset2.top > 0 && viewportOffset2.top > viewportOffset2.top / 2) {
            banner2.style.transform = `translateX(-${viewportOffset2.top / 50}%)`;
        }
        else if (viewportOffset2.top > 0 && viewportOffset2.top < viewportOffset2.top / 2) {
            banner2.style.transform = `translateX(${viewportOffset2.top / 50}%)`;
        }

    });


    // clients hovers
    let place = document.querySelectorAll('.clients__block-name');
    let clientsDimm = document.querySelector('.clients__dimmed');
    let clientsPhoto = document.querySelector('.clients__dimmed-photo');

    console.log(place);
    place.forEach(element => {
        console.log(element);
        element.onmouseover = function () {
            console.log(element);
            let placeOffset = element.getBoundingClientRect().top;
            let html = `<img src="assets/img/clients/poke-room.webp" />`;
            clientsPhoto.innerHTML = html;
            let clientsDimmOffset = clientsDimm.getBoundingClientRect().top;
            let offset = placeOffset - clientsDimmOffset;
            if (offset < clientsDimm.offsetHeight / 2) {
                clientsPhoto.style.top = offset - 300 + 'px';
            }
            else {
                clientsPhoto.style.top = offset - 900 + 'px';
            }
            clientsPhoto.style.opacity = '1';
            this.style.zIndex = '20';
            clientsDimm.style.zIndex = '19';
            clientsDimm.style.opacity = '1';
            // clientsDimm.style.height = '100%';
        };
        element.onmouseleave = function () {
            // clientsDimm.style.opacity = '0';
            clientsDimm.style.zIndex = '0';
            this.style.zIndex = '0';
            clientsPhoto.style.opacity = '0';
            // clientsDimm.style.height = '0';
        };
    });
    // for (i = 0; i < place.length; i++) {

    // }

    // модалка
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

});






