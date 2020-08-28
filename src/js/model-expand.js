export default function modelExpand() {
    let text = {
        neck: 'neck',
        shoulder: 'shouler'
    }
    let expandButton = document.querySelectorAll('.model__button');
    expandButton.forEach((elem) => {
        elem.addEventListener('click', function () {
            if (window.innerWidth >= 768) {
                // console.log('hello');
                if (event.target.classList.contains('button--close')) {
                    event.target.classList.remove('button--expand', 'button--close');
                    event.target.innerHTML = '+';
                    // console.log(event.target);
                } else {
                    expandButton.forEach((elem) => {
                        if (elem != event.target) {
                            elem.classList.remove('button--expand', 'button--close');
                            elem.innerHTML = '+';
                        }

                    });
                    event.target.classList.add('button--expand');
                    event.target.classList.add('button--close');
                    // .style.display = 'block';
                    event.target.innerHTML = ``;
                }
            }

        });
    });
}
