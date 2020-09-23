import $ from 'jquery';
import Swiper from 'swiper/js/swiper.js';
import mousewheel from 'libs/jquery.mousewheel.min.js';

export default function () {



    if (window.innerWidth < 768) {


        const model = new Swiper('.model__swiper-container', {
            parallax: true,
            speed: 600,
            pagination: {
                el: '.model__swiper-pagination',
            },
            navigation: {
                nextEl: '.model__swiper-button-next',
                prevEl: '.model__swiper-button-prev',
            },
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

        const clients = new Swiper('.clients__swiper-container', {
            parallax: true,
            speed: 600,
            slidesPerView: 'auto',
            pagination: {
                el: '.clients__swiper-pagination',
            },
            navigation: {
                nextEl: '.clients__swiper-button-next',
                prevEl: '.clients__swiper-button-prev',
            },
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



    }

    if (window.innerWidth < 1250) {
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
    }

    if (window.innerWidth >= 768) {
        const banner = new Swiper('.banner__swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: false,
            loop: false,
        });

        banner.destroy();




        const stages = new Swiper('.stages__swiper-container', {
            direction: 'horizontal',
            mousewheel: true,
            speed: 600,
            parallax: true,
            slidesPerView: 1,
            on: {
                slideChangeTransitionEnd: function () {
                    if (stages.isEnd) {

                        // console.log('down');
                        stages.mousewheel.disable();

                    } else if (stages.isBeginning) {

                        stages.mousewheel.disable();
                    }
                }
            }
        });

        // const stagesWrapper = $('.stages__swiper-wrapper');
        const stagesContainer = $('.stages__swiper-container');

        stages.mousewheel.disable();

        let canAnimateScroll = true;

        // window.addEventListener('scroll', event => {
        //     console.log($('.stages__swiper-container').offset().top - $(window).scrollTop(), stagesContainer.getBoundingClientRect().top);
        //     let stagesTop = $('.stages__swiper-container').offset().top - $(window).scrollTop();
        // });
        window.addEventListener('scroll', event => {
            const stagesOffsetTop = document.querySelector('.stages__swiper-container').getBoundingClientRect().top;
            const stagesHeight = stagesContainer.height();

            const stagesRange = 300;
            const stagesCenter = (stagesOffsetTop - window.innerHeight / 2) + stagesHeight / 2;
            // const stagesInRange = stagesCenter < stagesRange && stagesCenter > -stagesRange;
            const stagesInRange = stagesOffsetTop + stagesHeight < window.innerHeight && stagesOffsetTop > 0;

            if (stagesInRange && canAnimateScroll) {
                stages.mousewheel.enable();

                $([document.documentElement, document.body]).animate({
                    scrollTop: stagesContainer.offset().top
                });
                canAnimateScroll = false;
            }

            if (!stagesInRange) {
                canAnimateScroll = true;
            }
        });

        // $('.stages__swiper-container').on('mouseenter', (event) => {
        //     setTimeout(function () {
        //         $('.stages__card--third').mousewheel(function (turn, delta) {
        //             if (delta == 1) {
        //                 slideScroll = false;
        //                 // stages.mousewheel.enable();
        //             } else {
        //                 slideScroll = true;
        //                 $('body').removeClass('overflow-hidden');
        //                 stages.mousewheel.disable();
        //             }
        //         });

        //         $('.stages__card--first') {
        //             if (delta == 1) {
        //                 $('body').removeClass('overflow-hidden');
        //                 stages.mousewheel.disable();
        //                 slideScroll = true;
        //             } else {
        //                 // stages.mousewheel.enable();
        //                 slideScroll = false;
        //             }
        //         });
        //     }, 200);

        //     // window.addEventListener('scroll', event => {
        //     //     console.dir();
        //     //     // event.preventDefault();
        //     // });

        // });


        // popup.mousewheel(function(turn, delta) {

        //     if (delta == 1) {
        //         popup.ontouchend = function(e){ return true; }

        //     } else {
        //         console.log('hi');
        //     }

        //     return false;
        // console.log($(window).scrollTop(), popup.height(), popup.height() - $(window).scrollTop());
        //   });

    }
    if (window.innerWidth >= 1450) {
        const feedback = new Swiper('.feedback__swiper-container', {
            loop: false,
            slidesPerView: 'auto',
            freeMode: false,

            // pagination: false,
        });
        feedback.pagination.update();
        // feedback.update();
    } else if (window.innerWidth < 1450) {


        const feedback = new Swiper('.feedback__swiper-container', {
            slidesPerView: 'auto',
            loop: false,
            // setWrapperSize: true,
            updateOnWindowResize: false,
            spaceBetween: 10,
            // slidesOffsetBefore: 25,
            slidesOffsetAfter: 40,

            pagination: {
                el: '.feedback__swiper-pagination',
            },
            navigation: {
                nextEl: '.feedback__swiper-button-next',
                prevEl: '.feedback__swiper-button-prev',
            }
            // breakpoints: {
            //   768: {
            //     slidesOffsetAfter: 350
            //   }
            // }
        });
        feedback.pagination.update();
        // feedback.update();
        feedback.translateTo(document.querySelector('.feedback__swiper-slide').style.width, 300);

    }




    //   addEventListener('mouseleave', (event) => {
    //   console.log(event.target);
    //   stages.mousewheel.enable();
    // });

}
