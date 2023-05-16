let radioItems = document.querySelectorAll('.registration-form__radio-button ~ span');
let radioInputFemale = document.querySelector('#female');
let radioInputMale = document.querySelector('#male');
let switchLabel = document.querySelector('.registration-form__switch ~ label');
let switchInput = document.querySelector('#switch');

Array.from(radioItems).forEach( (item) => {
   item.addEventListener('keyup', (e) => {
      if (e.code != "Enter") return;

      if (e.target.innerText == "Женщина") {
         radioInputFemale.checked = true;
      } else {
         radioInputMale.checked = true;
      }
   });
});

switchLabel.addEventListener('keyup', (e) => {
   if (e.code != "Enter") return;
   
   if (switchInput.checked == false) {
      switchInput.checked = true;
   } else {
      switchInput.checked = false;
   }
});