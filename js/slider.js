const slideItems = document.querySelectorAll('.slider-item');
const slideButtons = document.querySelectorAll('.slider-button');
const sliderImage = document.querySelector('.slider');

let currentItem = document.querySelector('.slider-item.slide-current');
let currentButton = document.querySelector('.slider-button.current-button');
let currentImage = 'slider-image-1';

slideButtons.forEach((e,i)=>{
    e.addEventListener('click', function (evt) {
        evt.preventDefault();
        if(currentButton!==e){
            currentItem.classList.remove("slide-current");
            currentButton.classList.remove("current-button");
            currentButton = e;
            currentItem = slideItems[i];
            e.classList.add('current-button');
            currentItem.classList.add('slide-current');
            sliderImage.classList.remove(currentImage);
            currentImage = 'slider-image-'+(i+1);
            sliderImage.classList.add(currentImage);
        }
    })
});