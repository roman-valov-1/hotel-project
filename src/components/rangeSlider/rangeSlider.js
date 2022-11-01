let minPricePointer = document.querySelector('#minPricePointer');
let maxPricePointer = document.querySelector('#maxPricePointer');
let slider = document.querySelector('.range-slider__line-container');
let sliderInnerLine = document.querySelector('.range-slider__line-inner');

let minPriceInput = document.querySelector('#minPrice');
let maxPriceInput = document.querySelector('#maxPrice');

minPriceInput.setAttribute('value', 0 + '₽');
maxPriceInput.setAttribute('value', 20000 + '₽');
minPriceInput.disabled = true;
maxPriceInput.disabled = true;

let minValueInput = 0;
let maxValueInput = 20000;
let availableValueInput = maxValueInput - minValueInput;
let valueCoefficient = availableValueInput / (
   maxPricePointer.getBoundingClientRect().left + 8 - minPricePointer.getBoundingClientRect().left + 8 
);

minPricePointer.onmousedown = function (e) {
   e.preventDefault();

   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);

   function onMouseMove(e) {
      let sliderCoords = slider.getBoundingClientRect();
      let maxPricePointerCoords = maxPricePointer.getBoundingClientRect();
      let newLeft = e.clientX  - sliderCoords.left;
      
      if (newLeft < 0) {
         newLeft = 0;
      }
      
      let rightEdge = maxPricePointerCoords.left - sliderCoords.left;

      if (newLeft > rightEdge) {
         newLeft = rightEdge;
      }

      minPriceInput.setAttribute('value', Math.round(newLeft * valueCoefficient) + '₽');

      minPricePointer.style.left = newLeft + 'px';
      sliderInnerLine.style.left = newLeft + 'px';
      sliderInnerLine.style.width = slider.offsetWidth - newLeft - 
         (sliderCoords.right - maxPricePointerCoords.left - 8) + 'px';
   }

   function onMouseUp(e) {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
   }
};

maxPricePointer.onmousedown = function (e) {
   e.preventDefault();

   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);

   function onMouseMove(e) {
      let sliderCoords = slider.getBoundingClientRect();
      let minPricePointerCoords = minPricePointer.getBoundingClientRect();
      let newRight = sliderCoords.right - e.clientX;
      
      if (newRight < 0) {
         newRight = 0;
      }
      
      let leftEdge = slider.offsetWidth - (minPricePointerCoords.right - sliderCoords.left);

      if (newRight > leftEdge) {
         newRight = leftEdge;
      }

      maxPriceInput.setAttribute('value', maxValueInput - Math.round(newRight * valueCoefficient) + '₽');

      maxPricePointer.style.right = newRight + 'px';
      sliderInnerLine.style.width = slider.offsetWidth - 
         (minPricePointerCoords.right - sliderCoords.left - 8) - newRight + 'px';
   }

   function onMouseUp(e) {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
   }
};


