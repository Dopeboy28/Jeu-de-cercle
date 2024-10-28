let score = 0;
let timer = 0;
let circleSize = 30;
let interval;

// Sélection des éléments HTML
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const circle = document.getElementById('circle');
const gameArea = document.getElementById('gameArea');

// Démarre le chronomètre
function startTimer() {
  interval = setInterval(() => {
    timer++;
    timeDisplay.textContent = timer;
  }, 1000);
}

// Fonction pour générer des positions aléatoires pour le cercle
function moveCircle() {
  const areaWidth = gameArea.clientWidth;
  const areaHeight = gameArea.clientHeight;
  const maxX = areaWidth - circleSize;
  const maxY = areaHeight - circleSize;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  circle.style.width = `${circleSize}px`;
  circle.style.height = `${circleSize}px`;
  circle.style.left = `${randomX}px`;
  circle.style.top = `${randomY}px`;
}

// Fonction pour augmenter la difficulté
function increaseDifficulty() {
  if (circleSize > 10) {
    circleSize -= 2; // Réduit la taille du cercle
  }
}

// Gestion du clic sur le cercle
circle.addEventListener('click', () => {
  if (score === 0 && timer === 0) {
    startTimer(); // Démarre le chronomètre au premier clic
  }

  score++;
  scoreDisplay.textContent = score;

  if (score >= 10) {
    clearInterval(interval);
    alert(`Bravo ! Vous avez gagné en ${timer} secondes !`);
    resetGame();
  } else {
    increaseDifficulty();
    moveCircle();
  }
});

// Réinitialiser le jeu
function resetGame() {
  score = 0;
  timer = 0;
  circleSize = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timer;
  moveCircle();
}

// Initialiser le jeu
resetGame();
