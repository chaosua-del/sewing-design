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
                    let counter = parseInt($(event.target).css("margin-left"));
                    console.log(counter);
                    let interval = setInterval(() => {
                        if (counter <= -(parseInt($(event.target).css("width"))) / 1.8)
                            clearInterval(interval);
                        else {
                            counter -= 10;
                            event.target.style.marginLeft = `${counter}px`;
                        }

                    }, 15);
                    event.target.addEventListener('mouseleave', function (event) {
                        event.target.classList.remove('banner__wrap--active');
                        clearInterval(interval);
                    });
                } else if (event.clientX < window.innerWidth / 2) {
                    let counter = parseInt($(event.target).css("margin-left"));
                    let interval = setInterval(() => {
                        if (counter >= 0)
                            clearInterval(interval);
                        else {
                            counter += 10;
                            event.target.style.marginLeft = `${counter}px`;
                        }

                    }, 15);
                    event.target.addEventListener('mouseleave', function (event) {
                        event.target.classList.remove('banner__wrap--active');
                        clearInterval(interval);
                    });
                }

            });
        });


    }


}
