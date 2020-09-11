import $ from 'jquery';
// import mousewheel from 'libs/jquery.mousewheel.min.js';
import {
    normalize,
    clamp
} from 'utils';


export default function bannerScroll() {
    const speed = 5;
    const speed2 = 0.5;
    const speed3 = 0.2;
    const photos = $('#photos1');
    const photos2 = $('#photos2');
    const banner = $('#banner2');

    window.addEventListener('scroll', event => {
        let viewportOffset3 = document.getElementById('photos1').getBoundingClientRect();
        const percentage = normalize(viewportOffset3.top, -(photos.innerHeight() * speed), Math.round(photos.offset().top));
        const percentageClamped = clamp(percentage, 0, 1);
        console.log(percentageClamped);
        photos.css('transform', `translateX(${-percentageClamped * 100}%)`);


        let viewportOffset2 = document.getElementById('photos2').getBoundingClientRect();
        const percentage2 = normalize(viewportOffset2.top, -(photos2.innerHeight() * speed2), Math.round(photos2.offset().top));
        const percentageClamped2 = clamp(percentage2, 0, 1);
        console.log(percentageClamped);
        photos2.css('transform', `translateX(${-percentageClamped2 * 50}%)`);


        let viewportOffset = document.getElementById('banner2').getBoundingClientRect();
        const percentage3 = normalize(viewportOffset.top, -(banner.innerHeight() * speed3), Math.round(banner.offset().top));
        const percentageClamped3 = clamp(percentage3, 0, 1);
        // console.log(percentageClamped);
        banner.css('transform', `translateX(${-percentageClamped3 * 50}%)`);


    });






}
