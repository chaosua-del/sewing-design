import Swiper from 'swiper/js/swiper.js';


export default function () {
    const photos = new Swiper('.photos__swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        loop: true,
    });




    if (window.innerWidth < 768) {
        const banner = new Swiper('.banner__swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
            loop: true,
        });

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
        });

        document.querySelector('.stages__card--second').addEventListener('mouseleave', () => {
            stages.mousewheel.disable();
        });

        document.querySelector('.stages__card--third').addEventListener('mouseleave', () => {
            stages.mousewheel.enable();
        });

        document.querySelector('.stages__card--first').addEventListener('mouseleave', () => {
            stages.mousewheel.enable();
        });
    }
    if (window.innerWidth >= 1450) {
        const feedback = new Swiper('.feedback__swiper-container', {
            loop: false,
            slidesPerView: 'auto',
            freeMode: true
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
