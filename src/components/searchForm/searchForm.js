import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

let dpMin = new AirDatepicker('.search-form__arrival', {
   minDate: new Date(),
   autoClose: true,
   position: "bottom left",
   onSelect({date}) {
      dpMax.update({
         minDate: date
      })
   },
   onShow() {
      dpMin.$el.parentElement.classList.add('search-form__date-item_active'); 
   },
   onHide() {
      dpMin.$el.parentElement.classList.remove('search-form__date-item_active');
   }
});

let dpMax = new AirDatepicker('.search-form__departure', {
   minDate: new Date(),
   autoClose: true,
   position: "bottom right",
   onSelect({date}) {
      dpMin.update({
         maxDate: date
      })
   },
   onShow() {
      dpMax.$el.parentElement.classList.add('search-form__date-item_active'); 
   },
   onHide() {
      dpMax.$el.parentElement.classList.remove('search-form__date-item_active');
   }
});

let guestDropdown = document.querySelector('.search-form__guest-dropdown');
let guestTitle = document.querySelector('.search-form__guest-block > p');
let guestBlock = document.querySelector('.search-form__guest-block');
let dropdownSubmit = document.querySelector('#dropdown-btn-submit');
let dropdownReset = document.querySelector('#dropdown-btn-reset');

guestTitle.addEventListener('click', (e) => {
   guestDropdown.classList.add('search-form__guest-dropdown_active');
   guestBlock.classList.add('search-form__guest-block_active');
   guestTitle.classList.add('_active');
});

dropdownSubmit.addEventListener('click', (e) => {
   guestDropdown.classList.remove('search-form__guest-dropdown_active');
   guestBlock.classList.remove('search-form__guest-block_active');
   if (inputAdult.value != 0 && inputChildren.value != 0) {
      guestTitle.innerHTML = `Взрослые: ${inputAdult.value}, Дети: ${inputChildren.value}`;
   } else if (inputAdult.value != 0 && inputChildren.value == 0) {
      guestTitle.innerHTML = `Взрослые: ${inputAdult.value}`;
   } else if (inputAdult.value == 0 && inputChildren.value != 0) {
      guestTitle.innerHTML = `Дети: ${inputChildren.value}`;
   } else {
      guestTitle.innerHTML = `Сколько гостей`;
   }
   guestTitle.classList.remove('_active');
});

let inputAdult = document.querySelector('#adult');
let inputChildren = document.querySelector('#children');

inputAdult.previousElementSibling.disabled = true;
inputChildren.previousElementSibling.disabled = true;

let dropdownBlock = document.querySelector('.search-form__guest-block');

dropdownBlock.addEventListener('click', (e) => {
   
   if (e.target.className == 'search-form__counter-btn-plus') {
      e.target.previousElementSibling.setAttribute('value', +e.target.previousElementSibling.value + 1);
      e.target.parentElement.firstChild.disabled = false;
      dropdownReset.classList.add('_active');
   }

   if (e.target.className == 'search-form__counter-btn-minus') {
      e.target.nextElementSibling.setAttribute('value', +e.target.nextElementSibling.value - 1);
      if (e.target.nextElementSibling.value == 0) {
         e.target.parentElement.firstChild.disabled = true;
      }
      if (inputAdult.value == 0 && inputChildren.value == 0) {
         dropdownReset.classList.remove('_active');
      }
   }
});

dropdownReset.addEventListener('click', (e) => {
   inputAdult.setAttribute('value', 0);
   inputChildren.setAttribute('value', 0);
   let buttons = document.querySelectorAll('.search-form__counter-btn-minus');
   buttons.forEach(item => item.disabled = true);
   dropdownReset.classList.remove('_active');
});