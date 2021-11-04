// import functions and grab DOM elements
const dogCard = document.getElementById('dog-card');
const catCard = document.getElementById('cat-card');
const horseCard = document.getElementById('horse-card');

const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');
const horseSound = document.getElementById('horse-sound');

// initialize global state



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
dogCard.addEventListener('click', ()=> {
  dogSound.play();
});

catCard.addEventListener('click', ()=> {
  catSound.play();
});

horseCard.addEventListener('click', ()=> {
  horseSound.play();
});