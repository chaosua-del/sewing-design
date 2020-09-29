export default function clientsHovers() {
    // clients hovers
    let place = document.querySelectorAll('.clients__block-name');
    let clientsDimm = document.querySelector('.clients');
    let clientsPhoto = document.querySelector('.clients__dimmed-photo');

    // console.log(place);
    place.forEach(element => {
        // console.log(element);
        element.addEventListener('mouseenter', function (event) {
            let placeOffset = element.getBoundingClientRect().top;
            let html = `<img style="max-height: 400px" src="${event.target.dataset.url}" />`;
            let clientsDimmOffset = clientsDimm.getBoundingClientRect().top;
            let offset = placeOffset - clientsDimmOffset;
            clientsPhoto.innerHTML = html;
            clientsDimm.classList.add('clients--darken');
            this.style.zIndex = '30';
            if (element.getBoundingClientRect().left > clientsDimm.clientWidth / 2) {
                clientsPhoto.style.left = 'auto';
                clientsPhoto.style.right = (clientsDimm.clientWidth - element.getBoundingClientRect().right) + 'px';
                console.log(clientsDimm.clientWidth - element.getBoundingClientRect().right);
            } else {

                clientsPhoto.style.left = this.getBoundingClientRect().left + 'px';
            }
            clientsPhoto.style.transform = 'translateX(0)';
            if (window.innerWidth >= 1450) {
                if (offset > clientsDimm.offsetHeight / 2) {
                    clientsPhoto.style.top = offset - 400 + 'px';
                } else {
                    clientsPhoto.style.top = offset + 100 + 'px';
                }
            } else {
                html = `<img style="max-height: 300px" src="${event.target.dataset.url}" />`;
                // console.log(element);
                // console.log(event.target.dataset.url);
                if (offset > clientsDimm.offsetHeight / 2) {
                    clientsPhoto.style.top = offset - 400 + 'px';
                } else {
                    clientsPhoto.style.top = offset + 70 + 'px';
                }
            }
            setTimeout(() => {
                clientsPhoto.style.zIndex = '1';
                clientsPhoto.style.opacity = '1';
                // clientsPhoto.style.display = 'block';
                clientsPhoto.style.visibility = 'visible';
            }), 100;
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
