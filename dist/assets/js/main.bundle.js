!function(e){function t(t){for(var o,s,a=t[0],p=t[1],l=t[2],d=0,u=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(o in p)Object.prototype.hasOwnProperty.call(p,o)&&(e[o]=p[o]);for(c&&c(t);u.length;)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var p=n[a];0!==i[p]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={0:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/js/";var a=window.webpackJsonp=window.webpackJsonp||[],p=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=p;r.push([5,1]),n()}({5:function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(9);\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js?")},9:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js\nvar jquery = __webpack_require__(1);\nvar jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);\n\n// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js\nvar lazysizes = __webpack_require__(6);\n\n// EXTERNAL MODULE: ./node_modules/svg4everybody/dist/svg4everybody.js\nvar svg4everybody = __webpack_require__(2);\nvar svg4everybody_default = /*#__PURE__*/__webpack_require__.n(svg4everybody);\n\n// EXTERNAL MODULE: ./node_modules/browser-detect/dist/browser-detect.es5.js\nvar browser_detect_es5 = __webpack_require__(3);\n\n// CONCATENATED MODULE: ./src/js/page.js\n//import FastClick from 'fastclick'; // incopatibility with select2\nvar page={init:function init(){var app=this;// Base components\napp.window=jquery_default()(window);app.document=jquery_default()(document);app.html=jquery_default()('html');app.body=jquery_default()('body');// App params\napp.browser=Object(browser_detect_es5[\"a\" /* default */])();app.mobile=app.browser.mobile;app.html.removeClass('no-js').addClass(app.mobile?'mobile':'desktop').addClass(app.browser.name);if(app.browser.os.indexOf('OS')===0||app.browser.os.indexOf('iOS')===0){app.html.addClass('huapple');}// svg4everybody | Init\nif(!app.mobile){svg4everybody_default()();}// FastClick | Init\n//        if (app.mobile) {\n//            FastClick.attach(document.body);\n//        }\n}};/* harmony default export */ var js_page = (page);\n// EXTERNAL MODULE: ./node_modules/inputmask/index.js\nvar inputmask = __webpack_require__(4);\nvar inputmask_default = /*#__PURE__*/__webpack_require__.n(inputmask);\n\n// CONCATENATED MODULE: ./src/js/forms.js\nvar forms_forms={init:function init(){forms_forms.app=this;this.document.ready(function(){forms_forms.initMask();});},initMask:function initMask(){var selector=document.querySelectorAll('.js-mask__tel');inputmask_default()({mask:'+7 (999) 999 99 99',showMaskOnHover:false}).mask(selector);}};/* harmony default export */ var js_forms = (forms_forms);\n// EXTERNAL MODULE: ./node_modules/swiper/js/swiper.js\nvar swiper = __webpack_require__(0);\nvar swiper_default = /*#__PURE__*/__webpack_require__.n(swiper);\n\n// CONCATENATED MODULE: ./src/js/sliders.js\n/* harmony default export */ var sliders = (function(){var photos=new swiper_default.a('.photos__swiper-container',{slidesPerView:'auto',spaceBetween:0,freeMode:true,loop:true});var banner=new swiper_default.a('.banner__swiper-container',{slidesPerView:'auto',spaceBetween:0,freeMode:true,loop:true});if(window.innerWidth<768){var benefits=new swiper_default.a('.benefits__swiper-container',{slidesPerView:'auto',spaceBetween:0,freeMode:true,loop:false,slidesOffsetAfter:2// centerInsufficientSlides: 'true'\n});var benefits2=new swiper_default.a('.benefits2__swiper-container',{slidesPerView:'auto',spaceBetween:0,freeMode:true,loop:false,slidesOffsetAfter:0// centerInsufficientSlides: 'true'\n});var clients=new swiper_default.a('.clients__swiper-container',{slidesPerView:'auto',pagination:{el:'.clients__swiper-pagination'},navigation:{nextEl:'.clients__swiper-button-next',prevEl:'.clients__swiper-button-prev'}});var stages=new swiper_default.a('.stages__swiper-container',{parallax:true,speed:600,pagination:{el:'.stages__swiper-pagination'},navigation:{nextEl:'.stages__swiper-button-next',prevEl:'.stages__swiper-button-prev'}});}else{var _stages=new swiper_default.a('.stages__swiper-container',{direction:'horizontal',mousewheel:true,speed:600,parallax:true,slidesPerView:1});}// expand menu\nvar coll=document.getElementsByClassName('collapsible');var i;for(i=0;i<coll.length;i++){coll[i].addEventListener('click',function(){this.classList.toggle('active');// card.classList.toggle('questions__card--active');\nvar content=this.nextElementSibling;if(content.style.maxHeight){content.style.maxHeight=null;content.style.marginBottom=0+'px';}else{content.style.maxHeight=content.scrollHeight+'px';if(window.innerWidth<768)content.style.marginBottom=52+'px';else if(window.innerWidth>=768)content.style.marginBottom=113+'px';}});}var feedback=new swiper_default.a('.feedback__swiper-container',{slidesPerView:1.2,loop:true,// updateOnWindowResize: false,\nspaceBetween:10,slidesOffsetBefore:20,pagination:{el:'.feedback__swiper-pagination'},navigation:{nextEl:'.feedback__swiper-button-next',prevEl:'.feedback__swiper-button-prev'},breakpoints:{420:{slidesOffsetAfter:100,slidesPerView:1.5,spaceBetween:10,slidesOffsetBefore:50},520:{slidesPerView:2},650:{slidesOffsetBefore:0},768:{slidesPerView:1.7,slidesOffsetAfter:200},920:{slidesPerView:2}}});});\n// CONCATENATED MODULE: ./src/js/map.js\n// import leaflet from 'node_modules/leaflet/dist';\nvar myMap=L.map('mapid',{center:[56.320568,44.000775],zoom:15,scrollWheelZoom:false});// .setView([], 13);\nL.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',{attribution:'Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',maxZoom:18,id:'mapbox/streets-v11',tileSize:512,zoomOffset:-1,accessToken:'pk.eyJ1IjoiY2hhb3N1YS1kZWwiLCJhIjoiY2tkbjBqY3dqMGlmaDJxcW4xbnljb2V1aiJ9.lKJeJfZMCU8J2h9G8aMbVg'}).addTo(myMap);var greenIcon=L.icon({iconUrl:'assets/img/map-marker.png',// shadowUrl: 'leaf-shadow.png',\niconSize:[38.47,54],// size of the icon\n// shadowSize: [50, 64], // size of the shadow\niconAnchor:[22,94],// point of the icon which will correspond to marker's location\n// shadowAnchor: [4, 62],  // the same for the shadow\npopupAnchor:[-3,-76]// point from which the popup should open relative to the iconAnchor\n});L.marker([56.320568,44.000775],{icon:greenIcon}).addTo(myMap);\n// CONCATENATED MODULE: ./src/js/app.js\nfunction _typeof(obj){\"@babel/helpers - typeof\";if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}var app_app={// параметры, изменяемые в appConfig\nbreakpoints:{sm:320,md:768,lg:1280},media:320,resizeEventName:'app_resize',submitEventName:'app_submit',popupLoadedEventName:'app_popup_loaded',popupClosedEventName:'app_popup_closed',tabChangedEventName:'app_tab_changed',scrollToOffset:200,// оффсет при скролле до элемента\nscrollToSpeed:500,// скорость скролла \ninit:function init(){var _this=this;// read config\nif((typeof appConfig===\"undefined\"?\"undefined\":_typeof(appConfig))==='object'){Object.keys(appConfig).forEach(function(key){if(Object.prototype.hasOwnProperty.call(app_app,key)){app_app[key]=appConfig[key];}});}app_app.currentID=0;// Init page\nthis.page=js_page;this.page.init.call(this);// Init page\nthis.forms=js_forms;this.forms.init.call(this);app_app.checkMedia();app_app.window.on('resize',app_app.checkMedia);window.jQuery=jquery_default.a;window.app=app_app;app_app.document.ready(function(){_this.initScrollTo();});// app.window.on('load', () => {\n// });\n// this.document.on(app.resizeEventName, () => {\n// });\n},initScrollTo:function initScrollTo(){app_app.document.on('click','.js-scrollto',function(){var target=jquery_default()(this).data('href');if(target){var $target=jquery_default()(target);if($target.length){jquery_default()('html, body').animate({scrollTop:$target.offset().top-app_app.scrollToOffset},app_app.scrollToSpeed);}}});},formatPrice:function formatPrice(price){return this.formatNumber(price,0,',',' ');},formatNumber:function formatNumber(number,decimals,dec_point,thousands_sep){// original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)\n// improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)\n// bugfix by: Michael White (http://crestidg.com)\nvar i,j,kw,kd,km;// input sanitation & defaults\nif(isNaN(decimals=Math.abs(decimals))){decimals=2;}if(dec_point==undefined){dec_point=',';}if(thousands_sep==undefined){thousands_sep='.';}i=parseInt(number=(+number||0).toFixed(decimals))+'';if((j=i.length)>3){j=j%3;}else{j=0;}km=j?i.substr(0,j)+thousands_sep:'';kw=i.substr(j).replace(/(\\d{3})(?=\\d)/g,'$1'+thousands_sep);kd=decimals?dec_point+Math.abs(number-i).toFixed(decimals).replace(/-/,'0').slice(2):'';return km+kw+kd;},/**\r\n     * Проверяет размер окна и пишет его в app.media\r\n     * @returns void\r\n     */checkMedia:function checkMedia(){var current=app_app.media;for(var key in app_app.breakpoints){if(app_app.window.outerWidth()>=app_app.breakpoints[key]){app_app.media=app_app.breakpoints[key];}//            console.log(app.media);\n}if(app_app.media!=current){app_app.document.trigger(app_app.resizeEventName,{media:app_app.media});}},uniqID:function uniqID(){return\"app_id_\".concat(app_app.currentID++);},/**\r\n     * Функция возвращает окончание для множественного числа слова на основании числа и массива окончаний\r\n     * param  iNumber Integer Число на основе которого нужно сформировать окончание\r\n     * param  aEndings Array Массив слов или окончаний для чисел (1, 4, 5),\r\n     *         например ['яблоко', 'яблока', 'яблок']\r\n     * return String\r\n     * \r\n     * https://habrahabr.ru/post/105428/\r\n     */getNumEnding:function getNumEnding(iNumber,aEndings){var sEnding,i;iNumber=iNumber%100;if(iNumber>=11&&iNumber<=19){sEnding=aEndings[2];}else{i=iNumber%10;switch(i){case 1:sEnding=aEndings[0];break;case 2:case 3:case 4:sEnding=aEndings[1];break;default:sEnding=aEndings[2];}}return sEnding;},getKeyByValue:function getKeyByValue(object,value){return Object.keys(object).find(function(key){return object[key]===value;});}};app_app.init();sliders();// позиционирование кнопок в блоке model\n// const block = document.querySelector('.model__buttons');\n// let count = 0;\n// let i;\ndocument.addEventListener('DOMContentLoaded',function(){// for (i = 320; i < 768; i += 10) {\n//     count = (i - 320) / 10;\n//     if (i < 450) {\n//         // console.log(count);\n//         block.style.right = count + '%';\n//     }\n//     else if (i >= 450 && i < 570) {\n//         block.style.right = count / 2 + '%';\n//     }\n//     else if (i >= 570 && i < 640) {\n//         block.style.right = count / 2.3 + '%';\n//     }\n//     else if (i >= 640 && i < 768) {\n//         block.style.right = count / 2.5 + '%';\n//     }\n// }\n// function reportWindowSize() {\n//     for (i = 320; i < 768; i += 10) {\n//         count = (i - 320) / 10;\n//         if (i === window.innerWidth && i < 450) {\n//             // console.log(count);\n//             block.style.right = count + '%';\n//         }\n//         else if (i === window.innerWidth && i >= 450 && i < 570) {\n//             block.style.right = count / 1.5 + '%';\n//         }\n//         else if (i === window.innerWidth && i >= 570 && i < 640) {\n//             block.style.right = count / 1.7 + '%';\n//         }\n//         else if (i === window.innerWidth && i >= 640 && i < 768) {\n//             block.style.right = count / 2 + '%';\n//         }\n//     }\n// }\n// window.onresize = reportWindowSize;\n// скролл банера\nvar banner=document.querySelector('.banner__wrap');var banner2=document.querySelector('.banner2__wrap');var viewportOffset=banner.getBoundingClientRect();var viewportOffset2=banner2.getBoundingClientRect();banner.style.transform=\"translateX(-\".concat(viewportOffset.top/50,\"%)\");banner2.style.transform=\"translateX(-\".concat(viewportOffset2.top/50,\"%)\");// let banner2 = \n// banner.style.transform = 'translateX(-50%)';\nwindow.addEventListener('scroll',function(){var viewportOffset=banner.getBoundingClientRect();var viewportOffset2=banner2.getBoundingClientRect();if(viewportOffset.top>0&&viewportOffset.top>viewportOffset.top/2){banner.style.transform=\"translateX(-\".concat(viewportOffset.top/50,\"%)\");}else if(viewportOffset.top>0&&viewportOffset.top<viewportOffset.top/2){banner.style.transform=\"translateX(\".concat(viewportOffset.top/50,\"%)\");}else if(viewportOffset2.top>0&&viewportOffset2.top>viewportOffset2.top/2){banner2.style.transform=\"translateX(-\".concat(viewportOffset2.top/50,\"%)\");}else if(viewportOffset2.top>0&&viewportOffset2.top<viewportOffset2.top/2){banner2.style.transform=\"translateX(\".concat(viewportOffset2.top/50,\"%)\");}});// clients hovers\nvar place=document.querySelectorAll('.clients__block-name');var clientsDimm=document.querySelector('.clients__dimmed');var clientsPhoto=document.querySelector('.clients__dimmed-photo');console.log(place);place.forEach(function(element){console.log(element);element.onmouseover=function(){console.log(element);var placeOffset=element.getBoundingClientRect().top;var html=\"<img src=\\\"assets/img/clients/poke-room.webp\\\" />\";clientsPhoto.innerHTML=html;var clientsDimmOffset=clientsDimm.getBoundingClientRect().top;var offset=placeOffset-clientsDimmOffset;if(offset<clientsDimm.offsetHeight/2){clientsPhoto.style.top=offset-300+'px';}else{clientsPhoto.style.top=offset-900+'px';}clientsPhoto.style.opacity='1';this.style.zIndex='20';clientsDimm.style.zIndex='19';clientsDimm.style.opacity='1';// clientsDimm.style.height = '100%';\n};element.onmouseleave=function(){// clientsDimm.style.opacity = '0';\nclientsDimm.style.zIndex='0';this.style.zIndex='0';clientsPhoto.style.opacity='0';// clientsDimm.style.height = '0';\n};});// for (i = 0; i < place.length; i++) {\n// }\n// модалка\nvar popupButton=document.querySelector('.uniforms__button');var popupClose=document.querySelector('.popup__close-button');var popup=document.querySelector('.popup');var body=document.querySelector('body');var popupButtonOffset=popupButton.getBoundingClientRect();popup.style.top=popupButtonOffset.top+'px';popupButton.addEventListener('click',function(){var popupButtonOffset=popupButton.getBoundingClientRect();popup.classList.toggle('hidden');popup.style.top=popupButtonOffset.top+window.outerHeight+'px';body.classList.toggle('dimmed');var sliderModel=new swiper_default.a('.sliderModel__swiper-container',{freeMode:false,loop:false,pagination:{el:'.sliderModel__swiper-pagination'},navigation:{nextEl:'.sliderModel__swiper-button-next',prevEl:'.sliderModel__swiper-button-prev'}});if(window.innerWidth<768){var sliderPopup=new swiper_default.a('.popup__swiper-container',{freeMode:false,loop:false,slidesPerView:'auto',spaceBetween:0,pagination:{el:'.popup__swiper-pagination'},navigation:{nextEl:'.popup__swiper-button-next',prevEl:'.popup__swiper-button-prev'}});}});popupClose.addEventListener('click',function(){popup.classList.toggle('hidden');body.classList.toggle('dimmed');});body.addEventListener('click',function(event){if(event.target==this){popup.classList.toggle('hidden');body.classList.toggle('dimmed');}});});\n\n//# sourceURL=webpack:///./src/js/app.js_+_4_modules?")}});