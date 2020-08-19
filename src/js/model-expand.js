export default function modelExpand() {
  let expandButton = document.querySelectorAll('.model__button');
  expandButton.forEach((elem) => {
    elem.addEventListener('click', function () {
      if (window.innerWidth >= 768) {
        console.log('hello');
        if (event.target.classList.contains('button--close')) {
          event.target.classList.remove('button--expand', 'button--close');
          event.target.innerHTML = '+';
          // console.log(event.target);
        }
        else {
          this.classList.add('button--expand');
          this.classList.add('button--close');
          this.innerHTML = '';
        }
      }

    });
  });
}