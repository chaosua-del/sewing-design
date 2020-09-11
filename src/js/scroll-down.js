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

    // var $win = $(window);
    // var $marker = $('#marker');

    // //отслеживаем событие прокрутки страницы
    // $(window).on('scroll', () => {
    //     if ($(window).scrollTop() + $(window).height() >= $('.stages').offset().top && $(window).scrollTop() + $(window).height() >= $('.stages').offset().top - $('.stages').innerHeight()) {
    //         console.log('sd');

    //     }
    // });
    //   //Складываем значение прокрутки страницы и высоту окна, этим мы получаем положение страницы относительно нижней границы окна, потом проверяем, если это значение больше, чем отступ нужного элемента от верха страницы, то значит элемент уже появился внизу окна, соответственно виден
    //   if($win.scrollTop() + $win.height() >= $marker.offset().top) {
    //     $('#message').html('виден'); //выполняем действия если элемент виден
    //   }else{
    //     $('#message').html('не виден'); //выполняем действия если не элемент виден

}
