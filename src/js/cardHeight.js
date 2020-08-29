export default function cardHeight() {
    const cards = document.querySelectorAll('.feedback__card');
    let temp = 0;
    cards.forEach(elem => {
        elem.style.height = 'auto';
        // console.log(elem.offsetHeight);
        temp = parseInt(elem.offsetHeight) > temp ? parseInt(elem.offsetHeight) : temp;
        // console.log(temp);
        elem.style.height = temp + 'px';
    });
}
