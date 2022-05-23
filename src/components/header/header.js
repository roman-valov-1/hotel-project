const menuBody = document.querySelector('.header__menu');
const subMenu = document.querySelectorAll('.header__submenu');

document.querySelector('.header__list').onclick = function(event) {
   console.log(event);
   if (event.target.nodeName != 'SPAN') return;
   closeAllSubMenu();
   event.target.nextElementSibling.classList.toggle('header__submenu_active');
}; 

function closeAllSubMenu() {
   Array.from(subMenu).forEach(item => item.classList.remove('header__submenu_active'));
}

document.querySelector('.header__burger').onclick = function(event) {
   document.body.classList.toggle('_lock');
   event.target.classList.toggle('header__burger_active');
   menuBody.classList.toggle('header__menu_active');
};