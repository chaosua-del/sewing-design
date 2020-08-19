export default function clientsHovers() {
  // clients hovers
  let place = document.querySelectorAll('.clients__block-name');
  let clientsDimm = document.querySelector('.clients');
  let clientsPhoto = document.querySelector('.clients__dimmed-photo');

  // console.log(place);
  place.forEach(element => {
    // console.log(element);
    element.addEventListener('mouseenter', function () {
      // console.log(element);
      let placeOffset = element.getBoundingClientRect().top;
      let html = `<img src="assets/img/clients/poke-room.webp" />`;
      clientsPhoto.innerHTML = html;
      let clientsDimmOffset = clientsDimm.getBoundingClientRect().top;
      let offset = placeOffset - clientsDimmOffset;

      clientsPhoto.style.top = offset + 70 + 'px';
      clientsDimm.classList.add('clients--darken');
      this.style.zIndex = '30';
      setTimeout(() => {
        clientsPhoto.style.zIndex = '1';
        clientsPhoto.style.opacity = '1';
      }), 100;
      if (window.innerWidth >= 1450) {
        // console.log(this.getBoundingClientRect().left);
        clientsPhoto.style.left = this.getBoundingClientRect().left + 'px';
        clientsPhoto.style.transform = 'translateX(0)';
        clientsPhoto.style.top = offset + 100 + 'px';
      }
    });

    element.onmouseleave = function () {
      clientsDimm.classList.remove('clients--darken');
      this.style.zIndex = '0';
      setTimeout(() => {
        clientsPhoto.style.zIndex = '-1';
        clientsPhoto.style.opacity = '0';
      }), 100;

      // clientsDimm.style.height = '0';
    };
  });
}