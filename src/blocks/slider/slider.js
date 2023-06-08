export class Slider {
   constructor(sliderElement, images) {
      sliderElement.classList.add('slider');

      this.sliderContainer = document.createElement('div');
      this.sliderContainer.classList.add('slider__container');
      sliderElement.append(this.sliderContainer);

      images.forEach(image => {
         this.sliderItem = document.createElement('div');
         this.sliderItem.classList.add('slider__item');
         
         this.image = document.createElement('img');
         this.image.setAttribute('src', image);
         this.image.setAttribute('alt', "apartment's photo'");

         this.sliderItem.append(this.image);
         this.sliderContainer.append(this.sliderItem);
      });

      this.buttonPrev = document.createElement('button');
      this.buttonPrev.classList.add('slider__btn-prev');
      this.buttonPrevSvg = document.createElement('svg');
      this.buttonPrev.append(this.buttonPrevSvg);
      this.buttonPrevSvgArrow = document.createElement('use');
      this.buttonPrevSvgArrow.setAttribute('xlink:href', 'assets/sprite.svg#slider-arrow-prev');
      this.buttonPrevSvg.append(this.buttonPrevSvgArrow);
      this.sliderContainer.append(this.buttonPrev);

      this.buttonNext = document.createElement('button');
      this.buttonNext.classList.add('slider__btn-next');
      this.buttonNextSvg = document.createElement('svg');
      this.buttonNext.append(this.buttonNextSvg);
      this.buttonNextSvgArrow = document.createElement('use');
      this.buttonNextSvgArrow.setAttribute('xlink:href', 'assets/sprite.svg#slider-arrow-next');
      this.buttonNextSvg.append(this.buttonNextSvgArrow);
      this.sliderContainer.append(this.buttonNext);

      this.sliderDots = document.createElement('div');
      this.sliderDots.classList.add('slider__dots');
      this.sliderContainer.append(this.sliderDots);

      for (let i = 0; i < images.length; i++) {
         this.sliderDot = document.createElement('span');
         this.sliderDot.classList.add('slider__dot');
         this.sliderDots.append(this.sliderDot);
      }
   }
}