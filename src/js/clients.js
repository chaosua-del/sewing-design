export default function clientsHovers() {
    // clients hovers
    let place = document.querySelectorAll('.clients__block-name');
    let clientsDimm = document.querySelector('.clients');
    let clientsPhoto = document.querySelector('.clients__dimmed-photo');

    // console.log(place);
    place.forEach(element => {
        // console.log(element);
        element.addEventListener('mouseenter', function (event) {
            // console.log(element);
            let placeOffset = element.getBoundingClientRect().top;
            let html = `<img src="${event.target.dataset.url}" />`;
            clientsPhoto.innerHTML = html;

            let clientsDimmOffset = clientsDimm.getBoundingClientRect().top;
            let offset = placeOffset - clientsDimmOffset;
            // console.log(event.target.dataset.url);
            clientsPhoto.style.top = offset + 70 + 'px';
            clientsDimm.classList.add('clients--darken');
            this.style.zIndex = '30';
            setTimeout(() => {
                clientsPhoto.style.zIndex = '1';
                clientsPhoto.style.opacity = '1';
                // clientsPhoto.style.display = 'block';
                clientsPhoto.style.visibility = 'visible';
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
                clientsPhoto.style.visibility = 'hidden';
                clientsPhoto.style.opacity = '0';
                
            }), 100;

            // clientsDimm.style.height = '0';
        };
    });
}
