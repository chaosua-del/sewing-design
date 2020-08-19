export default function headerMenu() {
  const headerMenuButton = document.querySelector('.header__menu-button');
  const menuClose = document.querySelector('.header__menu-close');
  const headerMenuExpand = document.querySelector('.header__menu-expand');
  // expand-menu 
  headerMenuButton.addEventListener('click', (event) => {
    // console.log('hello');
    headerMenuExpand.style.maxHeight = 504 + 'px';
    headerMenuExpand.style.paddingTop = 29 + 'px';
    event.target.style.opacity = '0';
    event.target.style.zIndex = '-3';
    menuClose.style.opacity = '1';
    menuClose.style.zIndex = '3';
  });

  menuClose.addEventListener('click', (event) => {
    headerMenuExpand.style.paddingTop = 0 + 'px';
    headerMenuExpand.style.maxHeight = 0;
    event.target.style.opacity = '0';
    event.target.style.zIndex = '-3';
    headerMenuButton.style.opacity = '1';
    headerMenuButton.style.zIndex = '3';
  });
}