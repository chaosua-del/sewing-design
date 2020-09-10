export default function cardHeight() {
    const cards = document.querySelectorAll('.feedback__card');
    const container = document.querySelector('.feedback__swiper-container');
    let temp = 0;
    cards.forEach(elem => {
        elem.style.height = 'auto';
        // console.log(elem.offsetHeight);
        temp = parseInt(elem.offsetHeight) > temp ? parseInt(elem.offsetHeight) : temp;
        // console.log(temp);

        cards.forEach(elem => {
            window.innerWidth >= 1450 ? container.style.height = temp + 'px' : container.style.height = temp + 200 + 'px'
            // container.style.height = temp + 200 + 'px';
            elem.style.height = temp + 'px';
        });


    });
}
