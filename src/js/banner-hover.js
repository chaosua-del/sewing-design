import $ from 'jquery';
// import marquee from 'jquery.marquee.min.js'
window.jQuery = $;
// window.app = app;


export default function bannerHover() {
    // $mq.marquee('pause');
    // banner hovers

    // location.reload();
    window.$mq = window.$('.banner__wrap2').marquee({
        //speed in milliseconds of the marquee
        duration: 10000,
        //gap in pixels between the tickers
        gap: 50,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'right',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true,
        startVisible: true
    });
    window.$mq.marquee('pause');


    let bannerWrap = document.querySelectorAll('.banner__wrap2');
    let bannerSlide = document.querySelector('.banner__swiper-slide');
    let bannerTitle = document.querySelectorAll('.banner__title');

    // bannerTitle.forEach(elem => {
    //     elem.addEventListener('mouseover', event => {
    //         event.target.style.color = '#FFFFFF';
    //     });
    //     elem.addEventListener('mouseout', event => {
    //         event.target.style.color = 'transparent';
    //     });
    // });

    bannerWrap.forEach((elem) => {
        elem.addEventListener('mousemove', (event) => {
            elem.classList.add('banner__wrap--active');
            // if (event.clientX > window.innerWidth / 2) {
            window.$mq.marquee('resume');
            // window.$mq.marquee('start');

            // $(event.target).animate({

            //     marginLeft: '5000px',

            // }, 10000);

            // let interval = setInterval(() => {

            //     if (parseInt($(event.target).css('margin-left')) >= -20) {
            //         $(event.target).stop();
            //         // console.log('hello');
            //         clearInterval(interval);
            //     }

            // }, 100);

            // event.target.addEventListener('mouseleave', function (event) {
            //     event.target.classList.remove('banner__wrap--active');
            //     // 
            //     $(event.target).stop();
            // });
            // } else if (event.clientX < window.innerWidth / 2) {
            //     console.log('half2');
            //     window.$mq.marquee({
            //         duration: 10000,
            //         //gap in pixels between the tickers
            //         gap: 50,
            //         //time in milliseconds before the marquee will start animating
            //         delayBeforeStart: 0,
            //         //'left' or 'right'
            //         direction: 'left',
            //         //true or false - should the marquee be duplicated to show an effect of continues flow
            //         duplicated: true,
            //         startVisible: true
            //     });
            // window.$mq = window.$('.banner__wrap').marquee({
            //     //speed in milliseconds of the marquee
            //     duration: 10000,
            //     //gap in pixels between the tickers
            //     gap: 50,
            //     //time in milliseconds before the marquee will start animating
            //     delayBeforeStart: 0,
            //     //'left' or 'right'
            //     direction: 'right',
            //     //true or false - should the marquee be duplicated to show an effect of continues flow
            //     duplicated: true,
            //     startVisible: true
            // });

            // $(event.target).animate({

            //     marginLeft: '-5000px',

            // }, 10000);

            // let interval = setInterval(() => {


            //     if (parseInt($(event.target).css('margin-left')) <= -parseInt($(event.target).css('width')) / 2) {
            //         $(event.target).stop();
            //         // console.log('hello');
            //         clearInterval(interval);
            //     }

            // }, 0);
            // }

        });

        elem.addEventListener('mouseleave', (event) => {
            event.target.classList.remove('banner__wrap--active');
            window.$mq.marquee('pause');
        });

    });



    //  else {
    //     window.$mq = window.$('.banner__wrap').marquee({
    //         //speed in milliseconds of the marquee
    //         duration: 10000,
    //         //gap in pixels between the tickers
    //         gap: 50,
    //         //time in milliseconds before the marquee will start animating
    //         delayBeforeStart: 0,
    //         //'left' or 'right'
    //         direction: 'right',
    //         //true or false - should the marquee be duplicated to show an effect of continues flow
    //         duplicated: true,
    //         startVisible: true
    //     });
    //     window.$mq.marquee('destroy');
    // }

    const photosDimm = document.querySelectorAll('.photos__dimm');

    $('.photos__swiper-slide').on('mouseenter', event => {
        // console.log('hello');
        photosDimm.forEach(elem => {
            // console.log(elem);
            elem.style.backgroundColor = '#FFFFFF';
        });
        event.target.style.backgroundColor = 'transparent';
    });

    $('.photos__swiper-slide').on('mouseleave', event => {
        // console.log('hello');
        photosDimm.forEach(elem => {
            // console.log(elem);
            elem.style.backgroundColor = 'transparent';
        });
        // event.target.style.backgroundColor = 'transparent';
    });




}
