import $ from 'jquery';

export default function scrollDown() {
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

    $('.popup__button').click(function (b) {
        b.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 200
        }, 1000);
    });
}
