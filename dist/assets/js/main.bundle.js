!function(e){function n(n){for(var i,o,p=n[0],s=n[1],l=n[2],d=0,u=[];d<p.length;d++)o=p[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);for(c&&c(n);u.length;)u.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],i=!0,p=1;p<t.length;p++){var s=t[p];0!==a[s]&&(i=!1)}i&&(r.splice(n--,1),e=o(o.s=t[0]))}return e}var i={},a={0:0},r=[];function o(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=i,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)o.d(t,i,function(n){return e[n]}.bind(null,i));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/assets/js/";var p=window.webpackJsonp=window.webpackJsonp||[],s=p.push.bind(p);p.push=n,p=p.slice();for(var l=0;l<p.length;l++)n(p[l]);var c=s;r.push([5,1]),t()}({5:function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(9);\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js?")},9:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js\nvar jquery = __webpack_require__(0);\nvar jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);\n\n// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js\nvar lazysizes = __webpack_require__(6);\n\n// EXTERNAL MODULE: ./node_modules/svg4everybody/dist/svg4everybody.js\nvar svg4everybody = __webpack_require__(2);\nvar svg4everybody_default = /*#__PURE__*/__webpack_require__.n(svg4everybody);\n\n// EXTERNAL MODULE: ./node_modules/browser-detect/dist/browser-detect.es5.js\nvar browser_detect_es5 = __webpack_require__(3);\n\n// CONCATENATED MODULE: ./src/js/page.js\n//import FastClick from 'fastclick'; // incopatibility with select2\nvar page={init:function init(){var app=this;// Base components\napp.window=jquery_default()(window);app.document=jquery_default()(document);app.html=jquery_default()('html');app.body=jquery_default()('body');// App params\napp.browser=Object(browser_detect_es5[\"a\" /* default */])();app.mobile=app.browser.mobile;app.html.removeClass('no-js').addClass(app.mobile?'mobile':'desktop').addClass(app.browser.name);if(app.browser.os.indexOf('OS')===0||app.browser.os.indexOf('iOS')===0){app.html.addClass('huapple');}// svg4everybody | Init\nif(!app.mobile){svg4everybody_default()();}// FastClick | Init\n//        if (app.mobile) {\n//            FastClick.attach(document.body);\n//        }\n}};/* harmony default export */ var js_page = (page);\n// EXTERNAL MODULE: ./node_modules/inputmask/index.js\nvar inputmask = __webpack_require__(4);\nvar inputmask_default = /*#__PURE__*/__webpack_require__.n(inputmask);\n\n// CONCATENATED MODULE: ./src/js/forms.js\nvar forms_forms={init:function init(){forms_forms.app=this;this.document.ready(function(){forms_forms.initMask();});},initMask:function initMask(){var selector=document.querySelectorAll('.js-mask__tel');inputmask_default()({mask:'+7 (999) 999 99 99',showMaskOnHover:false}).mask(selector);}};/* harmony default export */ var js_forms = (forms_forms);\n// EXTERNAL MODULE: ./node_modules/swiper/js/swiper.esm.bundle.js + 2 modules\nvar swiper_esm_bundle = __webpack_require__(1);\n\n// CONCATENATED MODULE: ./src/js/sliders.js\n/* harmony default export */ var sliders = (function(){var photos=new swiper_esm_bundle[\"a\" /* default */]('.photos__swiper-container',{slidesPerView:'auto',spaceBetween:0,freeMode:true,loop:true});var benefits=new swiper_esm_bundle[\"a\" /* default */]('.benefits__swiper-container',{slidesPerView:'auto',spaceBetween:0,freeMode:true,loop:false,slidesOffsetAfter:2// centerInsufficientSlides: 'true'\n});var benefits2=new swiper_esm_bundle[\"a\" /* default */]('.benefits2__swiper-container',{slidesPerView:'auto',spaceBetween:0,freeMode:true,loop:false,slidesOffsetAfter:0// centerInsufficientSlides: 'true'\n});var banner=new swiper_esm_bundle[\"a\" /* default */]('.banner__swiper-container',{slidesPerView:'auto',spaceBetween:0,freeMode:true,loop:true});var stages=new swiper_esm_bundle[\"a\" /* default */]('.stages__swiper-container',{pagination:{el:'.stages__swiper-pagination'},navigation:{nextEl:'.stages__swiper-button-next',prevEl:'.stages__swiper-button-prev'}});var clients=new swiper_esm_bundle[\"a\" /* default */]('.clients__swiper-container',{slidesPerView:'auto',pagination:{el:'.clients__swiper-pagination'},navigation:{nextEl:'.clients__swiper-button-next',prevEl:'.clients__swiper-button-prev'}});var feedback=new swiper_esm_bundle[\"a\" /* default */]('.feedback__swiper-container',{slidesPerView:'1.1',slidesOffsetBefore:10,slidesOffsetAfter:10,pagination:{el:'.feedback__swiper-pagination'},navigation:{nextEl:'.feedback__swiper-button-next',prevEl:'.feedback__swiper-button-prev'}});var coll=document.getElementsByClassName('collapsible');// const card = document.getElementsByClassName('questions__card');\nvar i;for(i=0;i<coll.length;i++){coll[i].addEventListener('click',function(){this.classList.toggle('active');// card.classList.toggle('questions__card--active');\nvar content=this.nextElementSibling;if(content.style.maxHeight){content.style.maxHeight=null;content.style.marginBottom=0+'px';}else{content.style.maxHeight=content.scrollHeight+'px';content.style.marginBottom=52+'px';}});}});\n// CONCATENATED MODULE: ./src/js/map.js\nvar myMap=L.map('mapid').setView([56.320568,44.000775],13);L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',{attribution:'Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',maxZoom:18,id:'mapbox/streets-v11',tileSize:512,zoomOffset:-1,accessToken:'pk.eyJ1IjoiY2hhb3N1YS1kZWwiLCJhIjoiY2tkbjBqY3dqMGlmaDJxcW4xbnljb2V1aiJ9.lKJeJfZMCU8J2h9G8aMbVg'}).addTo(myMap);var greenIcon=L.icon({iconUrl:'assets/img/map-marker.png',// shadowUrl: 'leaf-shadow.png',\niconSize:[38.47,54],// size of the icon\n// shadowSize: [50, 64], // size of the shadow\niconAnchor:[22,94],// point of the icon which will correspond to marker's location\n// shadowAnchor: [4, 62],  // the same for the shadow\npopupAnchor:[-3,-76]// point from which the popup should open relative to the iconAnchor\n});L.marker([56.320568,44.000775],{icon:greenIcon}).addTo(myMap);\n// CONCATENATED MODULE: ./src/js/app.js\nfunction _typeof(obj){\"@babel/helpers - typeof\";if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}// import Swiper JS\n// import Swiper from 'swiper';\n// // import Swiper styles\n// import 'swiper/swiper-bundle.css';\nvar app_app={// параметры, изменяемые в appConfig\nbreakpoints:{sm:320,md:768,lg:1280},media:320,resizeEventName:'app_resize',submitEventName:'app_submit',popupLoadedEventName:'app_popup_loaded',popupClosedEventName:'app_popup_closed',tabChangedEventName:'app_tab_changed',scrollToOffset:200,// оффсет при скролле до элемента\nscrollToSpeed:500,// скорость скролла \ninit:function init(){var _this=this;// read config\nif((typeof appConfig===\"undefined\"?\"undefined\":_typeof(appConfig))==='object'){Object.keys(appConfig).forEach(function(key){if(Object.prototype.hasOwnProperty.call(app_app,key)){app_app[key]=appConfig[key];}});}app_app.currentID=0;// Init page\nthis.page=js_page;this.page.init.call(this);// Init page\nthis.forms=js_forms;this.forms.init.call(this);app_app.checkMedia();app_app.window.on('resize',app_app.checkMedia);window.jQuery=jquery_default.a;window.app=app_app;app_app.document.ready(function(){_this.initScrollTo();});// app.window.on('load', () => {\n// });\n// this.document.on(app.resizeEventName, () => {\n// });\n},initScrollTo:function initScrollTo(){app_app.document.on('click','.js-scrollto',function(){var target=jquery_default()(this).data('href');if(target){var $target=jquery_default()(target);if($target.length){jquery_default()('html, body').animate({scrollTop:$target.offset().top-app_app.scrollToOffset},app_app.scrollToSpeed);}}});},formatPrice:function formatPrice(price){return this.formatNumber(price,0,',',' ');},formatNumber:function formatNumber(number,decimals,dec_point,thousands_sep){// original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)\n// improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)\n// bugfix by: Michael White (http://crestidg.com)\nvar i,j,kw,kd,km;// input sanitation & defaults\nif(isNaN(decimals=Math.abs(decimals))){decimals=2;}if(dec_point==undefined){dec_point=',';}if(thousands_sep==undefined){thousands_sep='.';}i=parseInt(number=(+number||0).toFixed(decimals))+'';if((j=i.length)>3){j=j%3;}else{j=0;}km=j?i.substr(0,j)+thousands_sep:'';kw=i.substr(j).replace(/(\\d{3})(?=\\d)/g,'$1'+thousands_sep);kd=decimals?dec_point+Math.abs(number-i).toFixed(decimals).replace(/-/,'0').slice(2):'';return km+kw+kd;},/**\r\n     * Проверяет размер окна и пишет его в app.media\r\n     * @returns void\r\n     */checkMedia:function checkMedia(){var current=app_app.media;for(var key in app_app.breakpoints){if(app_app.window.outerWidth()>=app_app.breakpoints[key]){app_app.media=app_app.breakpoints[key];}//            console.log(app.media);\n}if(app_app.media!=current){app_app.document.trigger(app_app.resizeEventName,{media:app_app.media});}},uniqID:function uniqID(){return\"app_id_\".concat(app_app.currentID++);},/**\r\n     * Функция возвращает окончание для множественного числа слова на основании числа и массива окончаний\r\n     * param  iNumber Integer Число на основе которого нужно сформировать окончание\r\n     * param  aEndings Array Массив слов или окончаний для чисел (1, 4, 5),\r\n     *         например ['яблоко', 'яблока', 'яблок']\r\n     * return String\r\n     * \r\n     * https://habrahabr.ru/post/105428/\r\n     */getNumEnding:function getNumEnding(iNumber,aEndings){var sEnding,i;iNumber=iNumber%100;if(iNumber>=11&&iNumber<=19){sEnding=aEndings[2];}else{i=iNumber%10;switch(i){case 1:sEnding=aEndings[0];break;case 2:case 3:case 4:sEnding=aEndings[1];break;default:sEnding=aEndings[2];}}return sEnding;},getKeyByValue:function getKeyByValue(object,value){return Object.keys(object).find(function(key){return object[key]===value;});}};app_app.init();sliders();var block=document.querySelector('.model__buttons');var count=0;var app_i;document.addEventListener('DOMContentLoaded',function(){for(app_i=320;app_i<768;app_i+=10){count=(app_i-320)/10;if(app_i===window.innerWidth&&app_i<450){console.log(count);block.style.right=count+'%';}else if(app_i===window.innerWidth&&app_i>=450&&app_i<570){block.style.right=count/1.5+'%';}else if(app_i===window.innerWidth&&app_i>=570&&app_i<640){block.style.right=count/1.7+'%';}else if(app_i===window.innerWidth&&app_i>=640&&app_i<768){block.style.right=count/2+'%';}}});function reportWindowSize(){for(app_i=320;app_i<768;app_i+=10){count=(app_i-320)/10;if(app_i===window.innerWidth&&app_i<450){console.log(count);block.style.right=count+'%';}else if(app_i===window.innerWidth&&app_i>=450&&app_i<570){block.style.right=count/1.5+'%';}else if(app_i===window.innerWidth&&app_i>=570&&app_i<640){block.style.right=count/1.7+'%';}else if(app_i===window.innerWidth&&app_i>=640&&app_i<768){block.style.right=count/2+'%';}}}window.onresize=reportWindowSize;\n\n//# sourceURL=webpack:///./src/js/app.js_+_4_modules?")}});