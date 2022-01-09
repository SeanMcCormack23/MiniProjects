const carouselImages = document.querySelector('.carousel-images');
const carouselBtns = document.querySelectorAll('.btn');
const noOfImages = document.querySelectorAll('.carousel-images img').length;
let imageIndex = 1;
//used to set starting point
let translateX = 0;
//movement along horizontal axis

carouselBtns.forEach(button => {
  button.addEventListener('click', event => {
    // console.log('clicked');
    if (event.target.id === 'previous') {
      
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== noOfImages) {
        imageIndex++;
        translateX -= 300;
      }
    }
    carouselImages.style.transform = `translateX(${translateX}px)`;

  });
});