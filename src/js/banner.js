// export default function bannerScroll() {
//     // скролл банера
//     // let banner = document.querySelector('.banner__swiper-slide');
//     let banner2 = document.querySelector('.banner2__wrap');
//     let photos = document.querySelector('.photos__wrap');

//     // let viewportOffset = banner.getBoundingClientRect();
//     let viewportOffset2 = banner2.getBoundingClientRect();
//     let viewportOffset3 = photos.getBoundingClientRect();
//     banner.style.transform = `translateX(-${viewportOffset.top / 50}%)`;
//     photos.style.transform = `translateX(-${viewportOffset3.top / 20}%)`;
//     // let banner2 = 
//     // banner.style.transform = 'translateX(-50%)';
//     window.addEventListener('scroll', function () {
//         // let viewportOffset = banner.getBoundingClientRect();
//         let viewportOffset2 = banner2.getBoundingClientRect();
//         // let viewportOffset3 = photos.getBoundingClientRect();
//         // if (viewportOffset.top > 0 && viewportOffset.top > viewportOffset.top / 2) {
//         //   banner.style.transform = `translateX(-${viewportOffset.top / 50}%)`;
//         // }
//         // else if (viewportOffset.top > 0 && viewportOffset.top < viewportOffset.top / 2) {
//         //   banner.style.transform = `translateX(${viewportOffset.top / 50}%)`;
//         // }
//         if (viewportOffset2.top > 0 && viewportOffset2.top > viewportOffset2.top / 2) {
//             banner2.style.transform = `translateX(-${viewportOffset2.top / 50}%)`;
//             // photos.style.transform = `translateX(-${viewportOffset3.top / 30}%)`;
//         } else if (viewportOffset2.top > 0 && viewportOffset2.top < viewportOffset2.top / 2) {
//             banner2.style.transform = `translateX(${viewportOffset2.top / 50}%)`;
//             // photos.style.transform = `translateX(${viewportOffset3.top / 30}%)`;
//         }

//     });
//     if (window.innerWidth < 768) {
//         window.addEventListener('scroll', function () {
//             let viewportOffset = banner.getBoundingClientRect();
//             let viewportOffset3 = photos.getBoundingClientRect();
//             if (viewportOffset.top > 0 && viewportOffset.top > viewportOffset.top / 2) {
//                 banner.style.transform = `translateX(-${viewportOffset.top / 40}%)`;
//                 photos.style.transform = `translateX(-${viewportOffset3.top / 20}%)`;
//             } else if (viewportOffset.top > 0 && viewportOffset.top < viewportOffset.top / 2) {
//                 banner.style.transform = `translateX(${viewportOffset.top / 40}%)`;
//                 photos.style.transform = `translateX(${viewportOffset3.top / 20}%)`;
//             }
//         });
//     }
// }
