export default function modelExpand() {
    const expandButton = document.querySelectorAll(".model__button");
    const expandClose = document.querySelectorAll(".model__button-close");
    expandButton.forEach((elem) => {
        elem.addEventListener("click", function (event) {
            // if (window.innerWidth >= 768) {
            //     // console.log('hello');
            //     if (event.target.classList.contains('button--close')) {
            //         event.target.classList.remove('button--expand', 'button--close');
            //         event.target.innerHTML = '+';
            //         // console.log(event.target);
            //     } else {
            //         expandButton.forEach((elem) => {
            //             if (elem != event.target) {
            //                 elem.classList.remove('button--expand', 'button--close');
            //                 elem.innerHTML = '+';
            //             }

            //         });
            //         event.target.classList.add('button--expand');
            //         event.target.classList.add('button--close');
            //         // .style.display = 'block';
            //         event.target.innerHTML = ``;
            //     }
            // }

            expandButton.forEach((elem) => {
                elem.classList.remove("model__button--active");
            });
            elem.classList.add("model__button--active");
            // elem.classList.add("model__button--active");
            console.log(event.target);
            if (event.target.classList.contains("model__button-close")) {
                elem.classList.remove("model__button--active");
                console.log("sdsd");
            }

            // console.log(event.target.dataset.name);
            let name = event.target.dataset.name;
            const modelTitle = document.querySelector(".model__info-title");
            const modelSubtitle = document.querySelector(
                ".model__info-subtitle"
            );
            modelTitle.style.opacity = "0";
            modelSubtitle.style.opacity = "0";
            setTimeout(function () {
                switch (name) {
                    case "shoulder":
                        modelTitle.innerHTML = "100 % ХЛОПОК ПРОЧНОГО ПЛЕТЕНИЯ";
                        modelSubtitle.innerHTML =
                            "Натуральная дышащая ткань —  комфорт в любое время года";
                        break;
                    case "pocket":
                        modelTitle.innerHTML =
                            "ПОШИВ АРМИРОВАННЫМИ&nbsp;НИТКАМИ";
                        modelSubtitle.innerHTML =
                            "Лавсановая нить и хлопковая оплетка обеспечат устойчивость моделей";
                        break;
                    case "robe":
                        modelTitle.innerHTML = "ШИРОКАЯ ЦВЕТОВАЯ&nbsp;ПАЛИТРА";
                        modelSubtitle.innerHTML =
                            "150+ цветовых решений напрямую от зарубежных производителей";
                        break;
                    case "loop":
                        modelTitle.innerHTML = "ПОВЫШЕННАЯ ИЗНОСОСТОЙКОСТЬ";
                        modelSubtitle.innerHTML =
                            "Ткани специального плетения методом Канвас";
                        break;
                    case "neck":
                        modelTitle.innerHTML =
                            "ТОЛЬКО НАТУРАЛЬНАЯ КОЖА ДЛЯ КРЕПЛЕНИЙ";
                        modelSubtitle.innerHTML =
                            "Натуральная кожа гарантирует долговечность, надежность и презентабельный вид";
                        break;
                }
                modelTitle.style.opacity = "1";
                modelSubtitle.style.opacity = "1";
            }, 200);
        });
    });
}
