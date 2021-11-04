// import functions and grab DOM elements
const dogCard = document.getElementById('dog-card');
const catCard = document.getElementById('cat-card');
const horseCard = document.getElementById('horse-card');

const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');
const horseSound = document.getElementById('horse-sound');

const clickCount = document.getElementById('click-count');

// initialize global state

let woofCount = 0;
let meowCount = 0;
let neighCount = 0;

// click events
dogCard.addEventListener('click', () => {
  dogSound.play();
  woofCount++;
  clickCount.textContent = `Woofs: ${woofCount}`;
});

catCard.addEventListener('click', () => {
  catSound.play();
  meowCount++;
  clickCount.textContent = `Meows: ${meowCount}`;
});

horseCard.addEventListener('click', () => {
  horseSound.play();
  neighCount++;
  clickCount.textContent = `Neighs: ${neighCount}`;
});

// Keydown events
document.addEventListener('keydown', (e) => {

  if (e.key === 'd' || e.key === 'D') {
    dogSound.play();
    woofCount++;
    clickCount.textContent = `Woofs: ${woofCount}`;

  } else if (e.key === 'c' || e.key === 'C') {
    catSound.play();
    meowCount++;
    clickCount.textContent = `Meows: ${meowCount}`;

  } else if (e.key === 'h' || e.key === 'H') {
    horseSound.play();
    neighCount++;
    clickCount.textContent = `Neighs: ${neighCount}`;

  }
});
