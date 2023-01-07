let menuBody = document.querySelector('.header__menu');
let subMenu = document.querySelectorAll('.header__submenu');
let navList = document.querySelector('.header__list');
let menuBurger = document.querySelector('.header__burger');

navList.addEventListener('click', (e) => {
   if (e.target.nodeName != 'SPAN') return;
   closeAllSubMenu(e.target.nextElementSibling);
   e.target.classList.toggle('active');
   e.target.nextElementSibling.classList.toggle('header__submenu_active');
});

menuBurger.addEventListener('click', (e) => {
   e.target.classList.toggle('header__burger_active');
   menuBody.classList.toggle('header__menu_active');
   closeAllSubMenu();
   document.body.classList.toggle('lock');
});

function closeAllSubMenu(elem) {
   Array.from(subMenu).forEach((item) => {
      if (elem == item) return;
      if (item.classList.contains('header__submenu_active')) {
         item.classList.remove('header__submenu_active');
         item.previousElementSibling.classList.remove('active');
      }
   });
}