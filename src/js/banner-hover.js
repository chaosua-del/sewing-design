import $ from 'jquery';

export default function bannerHover() {
    // banner hovers
    if (window.innerWidth >= 1250) {

        let bannerWrap = document.querySelectorAll('.banner__wrap');
        let bannerSlide = document.querySelector('.banner__swiper-slide');
        bannerWrap.forEach((elem) => {
            elem.addEventListener('mouseenter', (event) => {
                event.target.classList.add('banner__wrap--active');
                if (event.clientX > window.innerWidth / 2) {
                    


                    $(event.target).animate({

                        marginLeft: '5000px',

                    }, 10000);

                    let interval = setInterval(() => {

                        if (parseInt($(event.target).css('margin-left')) >= -20) {
                            $(event.target).stop();
                            // console.log('hello');
                            clearInterval(interval);
                        }

                    }, 100);

                    event.target.addEventListener('mouseleave', function (event) {
                        event.target.classList.remove('banner__wrap--active');
                        // 
                        $(event.target).stop();
                    });
                } else if (event.clientX < window.innerWidth / 2) {
                    $(event.target).animate({

                        marginLeft: '-5000px',

                    }, 10000);

                    let interval = setInterval(() => {


                        if (parseInt($(event.target).css('margin-left')) <= -parseInt($(event.target).css('width')) / 2) {
                            $(event.target).stop();
                            // console.log('hello');
                            clearInterval(interval);
                        }

                    }, 0);
                }

            });

          

        });


    }

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
