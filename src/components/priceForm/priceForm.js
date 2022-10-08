import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

let dpMin = new AirDatepicker('.price-form__arrival', {
   minDate: new Date(),
   autoClose: true,
   position: "bottom left",
   selectedDates: new Date('2023-03-16'),
   onSelect({date}) {
      dpMax.update({
         minDate: date
      });
      dpMin.update({
         selectedDates: new Date(date)
      });
   },
   onShow() {
      dpMin.$el.parentElement.classList.add('price-form__date-item_active'); 
   },
   onHide() {
      dpMin.$el.parentElement.classList.remove('price-form__date-item_active');
      setAmountOfDays(dpMin.opts.selectedDates, dpMax.opts.selectedDates);
   }
});

let dpMax = new AirDatepicker('.price-form__departure', {
   minDate: new Date('2023-03-16'),
   autoClose: true,
   position: "bottom right",
   selectedDates: new Date('2023-03-20'),
   onSelect({date}) {
      dpMin.update({
         maxDate: date
      });
      dpMax.update({
         selectedDates: new Date(date)
      });
   },
   onShow() {
      dpMax.$el.parentElement.classList.add('price-form__date-item_active'); 
   },
   onHide() {
      dpMax.$el.parentElement.classList.remove('price-form__date-item_active');
      setAmountOfDays(dpMin.opts.selectedDates, dpMax.opts.selectedDates);
   }
});


let totalPrice = document.querySelector('.price-form__total-price');
let daysPrice = document.querySelector('.price-form__option-days-price');
let optionPrice = parseInt(document.querySelector('.price-form__option-price').textContent);
let priceForDay = parseInt(document.querySelector('.price-form__title-price > b').textContent);
let amountOfDaysElement = document.querySelector('.price-form__option-days > span');
let amountOfDays;

function setAmountOfDays (start, end) {
   amountOfDays = Math.ceil((end - start) / 86400000);
   amountOfDaysElement.textContent = amountOfDays + ' ';
   setDaysPrice(amountOfDays, priceForDay);
   setTotalPrice();
}

function setDaysPrice (days, price) {
   daysPrice.textContent = days * price + "₽";
}

function setTotalPrice () {
   totalPrice.textContent = parseInt(daysPrice.textContent) + optionPrice + "₽";
}


let guestDropdown = document.querySelector('.price-form__guest-dropdown');
let guestTitle = document.querySelector('.price-form__guest-block > p');
let guestBlock = document.querySelector('.price-form__guest-block');
let dropdownSubmit = document.querySelector('#dropdown-btn-submit');
let dropdownReset = document.querySelector('#dropdown-btn-reset');

guestTitle.addEventListener('click', (e) => {
   guestDropdown.classList.add('price-form__guest-dropdown_active');
   guestBlock.classList.add('price-form__guest-block_active');
   guestTitle.classList.add('_active');
});

dropdownSubmit.addEventListener('click', (e) => {
   guestDropdown.classList.remove('price-form__guest-dropdown_active');
   guestBlock.classList.remove('price-form__guest-block_active');
   if (inputAdult.value != 0 && inputChildren.value != 0) {
      guestTitle.textContent = `Взрослые: ${inputAdult.value}, Дети: ${inputChildren.value}`;
   } else if (inputAdult.value != 0 && inputChildren.value == 0) {
      guestTitle.textContent = `Взрослые: ${inputAdult.value}`;
   } else if (inputAdult.value == 0 && inputChildren.value != 0) {
      guestTitle.textContent = `Дети: ${inputChildren.value}`;
   } else {
      guestTitle.textContent = `Сколько гостей`;
   }
   guestTitle.classList.remove('_active');
});

let inputAdult = document.querySelector('#adult');
let inputChildren = document.querySelector('#children');

inputAdult.previousElementSibling.disabled = true;
inputChildren.previousElementSibling.disabled = true;

let dropdownBlock = document.querySelector('.price-form__guest-block');

dropdownBlock.addEventListener('click', (e) => {
   
   if (e.target.className == 'price-form__counter-btn-plus') {
      e.target.previousElementSibling.setAttribute('value', +e.target.previousElementSibling.value + 1);
      e.target.parentElement.firstChild.disabled = false;
      dropdownReset.classList.add('_active');
   }

   if (e.target.className == 'price-form__counter-btn-minus') {
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
   let buttons = document.querySelectorAll('.price-form__counter-btn-minus');
   buttons.forEach(item => item.disabled = true);
   dropdownReset.classList.remove('_active');
});
