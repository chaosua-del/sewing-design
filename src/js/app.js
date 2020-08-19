import $ from 'jquery';
import 'lazysizes';
import validate from 'jquery.validate.min';

import page from 'page';
import forms from 'forms';
import sliders from 'sliders';
import { myMap } from 'map';
import formValidation from 'validation';
import popupMenu from 'popups';
import bannerScroll from 'banner';
import bannerHover from 'banner-hover';
import clientsHovers from 'clients';
import expandMenu from 'expand-menu';

import Swiper from 'swiper/js/swiper.js';
// import mask from 'swiper/js/swiper.js';

let app = {

    // параметры, изменяемые в appConfig

    breakpoints: {
        sm: 320,
        md: 768,
        lg: 1250
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

        app.window.on('load', () => {
            sliders();
            formValidation();
            popupMenu();
            bannerScroll();
            bannerHover();
            clientsHovers();
            expandMenu();
        });

        this.document.on(app.resizeEventName, () => {
            console.log('im resizing');
            bannerHover();
            sliders();
        });

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





document.addEventListener('DOMContentLoaded', function () {




    // for (i = 0; i < place.length; i++) {

    // }






    const headerMenuButton = document.querySelector('.header__menu-button');
    const menuClose = document.querySelector('.header__menu-close');
    const headerMenuExpand = document.querySelector('.header__menu-expand');
    // expand-menu 
    headerMenuButton.addEventListener('click', (event) => {
        // console.log('hello');
        headerMenuExpand.style.maxHeight = 504 + 'px';
        headerMenuExpand.style.paddingTop = 29 + 'px';
        event.target.style.opacity = '0';
        event.target.style.zIndex = '-3';
        menuClose.style.opacity = '1';
        menuClose.style.zIndex = '3';
    });

    menuClose.addEventListener('click', (event) => {
        headerMenuExpand.style.paddingTop = 0 + 'px';
        headerMenuExpand.style.maxHeight = 0;
        event.target.style.opacity = '0';
        event.target.style.zIndex = '-3';
        headerMenuButton.style.opacity = '1';
        headerMenuButton.style.zIndex = '3';
    });

    // scorll down
    $('.header__menu-item').click(function (b) {
        b.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    $('.footer__navigation-item').click(function (b) {
        b.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    $('.header__navigation-item').click(function (b) {
        b.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });


    let expandButton = document.querySelectorAll('.model__button');
    expandButton.forEach((elem) => {
        elem.addEventListener('click', function () {
            if (window.innerWidth >= 768) {
                console.log('hello');
                if (event.target.classList.contains('button--close')) {
                    event.target.classList.remove('button--expand', 'button--close');
                    event.target.innerHTML = '+';
                    // console.log(event.target);
                }
                else {
                    this.classList.add('button--expand');
                    this.classList.add('button--close');
                    this.innerHTML = '';
                }
            }

        });
    });

});






