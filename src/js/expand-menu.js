export default function expandMenu() {
  // expand menu
  const coll = document.getElementsByClassName('collapsible');
  let i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
      this.classList.toggle('active');
      // card.classList.toggle('questions__card--active');
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.marginBottom = 0 + 'px';
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        if (window.innerWidth < 768)
          content.style.marginBottom = 52 + 'px';
        else if (window.innerWidth >= 768 && window.innerWidth < 1450)
          content.style.marginBottom = 113 + 'px';
        else if (window.innerWidth >= 1450)
          content.style.marginBottom = 54 + 'px';
      }
    });
  }
}