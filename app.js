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

// functions
function playAnimalSound(animalType) {
    if (animalType === 'dog') {
        dogSound.play();
        woofCount++;
        clickCount.textContent = `Woofs: ${woofCount}`;
    } else if (animalType === 'cat') {
        catSound.play();
        meowCount++;
        clickCount.textContent = `Meows: ${meowCount}`;
    } else if (animalType === 'horse') {
        horseSound.play();
        neighCount++;
        clickCount.textContent = `Neighs: ${neighCount}`;
    }
}

// Click events
dogCard.addEventListener('click', () => {
    playAnimalSound('dog');
});

catCard.addEventListener('click', () => {
    playAnimalSound('cat');
});

horseCard.addEventListener('click', () => {
    playAnimalSound('horse');
});

// Keydown events
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'd':
        case 'D':
            playAnimalSound('dog');
            break;
        case 'c':
        case 'C':
            playAnimalSound('cat');
            break;
        case 'h':
        case 'H':
            playAnimalSound('horse');
            break;
        default:
            break;
    }
});