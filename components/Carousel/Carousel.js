/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let images = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
]
let index = 0;

function Carousel(array){
  const carousel = document.createElement('div');
  const left = document.createElement('div');
  const img = document.createElement('img');
  const right = document.createElement('div');

  //add content
  
  left.innerText = '<';
  right.innerText = '>';
  img.src = array[index];
  console.log(img.src);

  //assign classes
  carousel.classList.add('carousel');
  left.classList.add('left-button');
  right.classList.add('right-button');

  //appending
  carousel.appendChild(left);
  carousel.appendChild(img);
  carousel.appendChild(right);

  left.addEventListener('click', ()=>{
    
    if (index === 0 ){
      //debugger;
      index = array.length-1;
      img.src = images[index];
      console.log(index)
      
    } else {
      //debugger;
      index = index - 1;
      img.src = images[index];
      console.log(index)
    }
  })
  right.addEventListener('click', ()=>{
    if (index === array.length-1 ){
      index = 0;
      img.src = images[index];
      console.log(index)
      
    } else {
      index = index + 1;
      img.src = images[index];
      console.log(index)
    }
  })
  console.log(index)

  return carousel;
}
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(Carousel(images));

