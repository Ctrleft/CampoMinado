const mineSweeper = document.getElementById('mineSweeper');
const rows = 10;
const cols = 10;
let flagNumber = 0;
let gameStarted = false;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const square = document.createElement('div');
    square.className = 'square';
    mineSweeper.appendChild(square);

    let isFlagged = false;

    square.addEventListener('click', () => {
      if (!isFlagged) {
        if (!gameStarted) {
          startGame(); 
        }
        const randomNumber = Math.floor(Math.random() * 4 + 1);
        square.textContent = randomNumber;
      }
      isFlagged = true;
    });

    square.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      if (!isFlagged && flagNumber < 10) {
        square.textContent = '🚩';
        flagNumber++;
        isFlagged = true;
      } else if (isFlagged) {
        square.textContent = '';
        flagNumber--;
        isFlagged = false;
      }
    });
  }
}

// Time and Score

var sec = 0;
var min = 0;
var gameTimeElement = document.getElementById('gameTime');
var timerInterval;

function twoZero(zero) {
  if (zero < 10) {
    return '0' + zero;
  } else {
    return zero;
  }
}

function startTimer() {
  gameTimeElement.innerHTML = 'Tempo: 00:00';
  timerInterval = setInterval(seconds, 1000);
}

function seconds() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  }
  gameTimeElement.innerHTML = 'Tempo: ' + twoZero(min) + ':' + twoZero(sec);
}

var score = 0;
var gameScoreElement = document.getElementById('gameScore');
var scoreInterval;

function startScore() {
  gameScoreElement.innerHTML = 'Pontos: 000';
  scoreInterval = setInterval(incrementScore, 1000);
}

function incrementScore() {
  score++;
  gameScoreElement.innerHTML = 'Pontos: ' + theZeros(score, 3);
}

function theZeros(number, length) {
  var numberScore = String(number);
  while (numberScore.length < length) {
    numberScore = '0' + numberScore;
  }
  return numberScore;
}

// Menu

const helpIcon = document.getElementById('helpIcon');
const helpBtn = document.querySelector('.menuBox.helpBox');
const closeBtnHelp = document.querySelector('.menuBox.helpBox .closeBtn');

const settingsIcon = document.getElementById('settingsIcon');
const configBtn = document.querySelector('.menuBox.configBox');
const closeBtnConfig = document.querySelector('.menuBox.configBox .closeBtn');

let isHelpMenuOpen = false;
let isConfigMenuOpen = false;

helpIcon.addEventListener('click', () => {
   if (!isHelpMenuOpen && !isConfigMenuOpen) {
       openMenu(helpBtn);
       isHelpMenuOpen = true;
   }
});

settingsIcon.addEventListener('click', () => {
   if (!isConfigMenuOpen && !isHelpMenuOpen) {
       openMenu(configBtn);
       isConfigMenuOpen = true;
   }
});

closeBtnHelp.addEventListener('click', () => {
   closeMenu(helpBtn);
   isHelpMenuOpen = false;
});

closeBtnConfig.addEventListener('click', () => {
   closeMenu(configBtn);
   isConfigMenuOpen = false;
});

function openMenu(menu) {
    closeAllMenus();
    menu.style.display = 'block';
}

function closeMenu(menu) {
    menu.style.display = 'none';
}

function closeAllMenus() {
    const openMenus = document.querySelectorAll('.menuBox');
    openMenus.forEach(menu => {
        menu.style.display = 'none';
    });
}

function startGame() {
  startTimer();
  startScore();
  gameStarted = true;
}

var resetHits = function() {
  sec = 0;
  min = 0;
  score = 0;
  flagNumber = 0;
  resetBtn();
  resetBoard(); 
}

function resetBoard() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.textContent = '';
    square.classList.remove('flagged'); 
  });

  clearInterval(timerInterval); 
  clearInterval(scoreInterval);
  gameTimeElement.innerHTML = 'Tempo: 00:00';
  gameScoreElement.innerHTML = 'Pontos: 000';
  gameStarted = false; 
}

function resetBtn() {
  sec = 0;
  min = 0;
  score = 0;
  flagNumber = 0;

  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.textContent = '';
    square.classList.remove('flagged');
  });
}

const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', resetBoard);