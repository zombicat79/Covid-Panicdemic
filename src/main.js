"use strict";

let game;
let preScreen;
let splashScreen;
let instructionsPopup;
let gameScreen;
let gameOverScreen;


// Images
const sanitizerImage = document.createElement('img');
sanitizerImage.src = 'img/sanitizer.png';
const shotImage = document.createElement('img');
shotImage.src = 'img/waterdrop.png';
const hospitalImage = document.createElement('img');
hospitalImage.src = 'img/Hospital.png'
const schoolImage = document.createElement('img');
schoolImage.src = 'img/School.png'
const mallImage = document.createElement('img');
mallImage.src = 'img/Mall.png'
const apartmentImage = document.createElement('img');
apartmentImage.src = 'img/House.png'


// Sound
const startMusic = document.querySelector('#start-music');
const gameMusic = document.querySelector('#game-music');
const endMusic = document.querySelector('#end-music');
const shotSound = document.querySelector('#shot');
const hitSound = document.querySelector('#hit');
const tokenSound = document.querySelector('#token');
const failSound = document.querySelector('#gameover-voice');


// HTML DYNAMIC DOM CONSTRUCTOR
function buildDom (html) {
 let newElement = document.createElement("div");
 newElement.innerHTML = html;
 return newElement;
}


// SCREEN GENERATORS
function createPreScreen () {
    preScreen = buildDom(`
    <main>
        <div id="alert-screen">
            <p class="alert-text">This site is not available for mobile devices.</p>
            <p class="alert-text">Please use a desktop computer to access its content.</p>

            <a href="https://zombiecat.dev/" target="_blank" class="branding-pack branding-pack--alert">
                <h1 class="branding-heading">Zombiecat</h1>
                <img class="branding-img" src="./img/zombiecat-trans-logo.png">
            </a>
        </div>

        <div id="pre-screen">
            <img id="mask" src="./img/wearyourmask.png">
            <h2 id="warning">Please wear your mask before playing this game</h2>

            <a href="https://zombiecat.dev/" target="_blank" class="branding-pack branding-pack--intro">
                <h1 class="branding-heading">Zombiecat</h1>
                <img class="branding-img" src="./img/zombiecat-trans-logo.png">
            </a>
        </div>
    </main>`);
    document.body.appendChild(preScreen);

    const maskButton = document.querySelector('#mask');
    maskButton.addEventListener('click', function () {
        createSplashScreen();
    })  
}

function createSplashScreen () {
    removePreScreen();
    splashScreen = buildDom(`
    <main id="splash">
        <a href="https://zombiecat.dev/" target="_blank" class="branding-pack branding-pack--cover">
            <img class="branding-img" src="./img/zombiecat-trans-logo.png">
            <h1 class="branding-heading">Zombiecat</h1>
        </a>

        <p id="game-instructions" onclick="showInstructions();">Check game instructions</p>
        <img id="title" src="./img/game_title.png">
        <button class="arcade-button">
            <img src="./img/start.png">
        </button>
    </main>`);
    document.body.appendChild(splashScreen);

        startMusic.currentTime = 1;
        startMusic.volume = 0.2;
        startMusic.play(); 
    
    const startButton = document.querySelector('.arcade-button');
    startButton.addEventListener('click', startGame);       
}

function createInstructionsPopup () {
    document.getElementById("splash").style.filter = "brightness(0.4)";
    instructionsPopup = buildDom(`
    <aside id="instructions">
        <div class="popup-closer">
            <p id="infect-prompt" style="display: none">Go Infect!</p>
            <p onclick="removeInstructions();">X</p>
        </div>
        
        <div class="popup-content">
            <div class="content-block">
                <p>Take the role of the <span class="bold-text">COVID-19</span> virus, as the pandemic sweeps through a random city inhabited by millions of inadvertent negligent humans.</p>
                <img id="virus-img" src="./img/virus.png">
            </div>
            <div class="content-block">
                <p>Use the following sets of keyboard buttons to move around and infect as many buildings as possible:</p>
                <img id="keyboard-img" src="./img/keyboard.png">
            </div>
            <div class="content-block">
                <p><span class="bold-text">Hospitals</span> will get you the most points!</p>
                <div id="building-wrapper">
                    <img class="building-img" src="./img/School.png">
                    <img class="building-img" src="./img/House.png">
                    <img class="building-img" src="./img/Hospital.png">
                    <img class="building-img" src="./img/Mall.png">
                </div>
            </div>
            <div class="content-block">
                <p>Avoid all contact with <span class="bold-text">sanitizers</span> and their relentless shooting!</p>
                <img id="sanitizer-img" src="./img/sanitizer.png">
            </div>
        </div>
    </aside>`);
    document.body.appendChild(instructionsPopup);

    const infectPrompt = document.getElementById("infect-prompt");
    const xCloser = document.querySelector(".popup-closer p+p");
    xCloser.addEventListener("mouseover", function() {
        infectPrompt.style.display = "block";
    })
    xCloser.addEventListener("mouseout", function() {
        infectPrompt.style.display = "none";
    })
}

function createGameScreen () {
    startMusic.volume = 0;
    startMusic.pause();
    gameScreen = buildDom (`
    <header>
        <img id="heart-img" src="img/heart.png">
        <section id="life-container">
            <div id="critical" class="life-bar"></div>
            <div id="wounded" class="life-bar"></div>
            <div id="healthy" class="life-bar"></div>
        </section>
        <section id="score-container">
            <img src="img/score.png">
            <p>0</p>
        </section>
    </header>
    <main>
        <canvas></canvas>
    </main>`);
    document.body.appendChild(gameScreen);

    gameMusic.currentTime = 0;
    gameMusic.volume = 0.2;
    gameMusic.play();
}


function createGameOverScreen () {
    gameMusic.volume = 0;
    gameMusic.pause();
    gameOverScreen = buildDom(`
    <main id="end">
        <a href="https://zombiecat.dev/" target="_blank" class="branding-pack branding-pack--end">
            <img class="branding-img" src="./img/zombiecat-trans-logo.png">
            <h1 class="branding-heading">Zombiecat</h1>
        </a>

        <div class="end-screen">
            <div id="highscore-container">
                <img id="highscore" src="img/highscore.png">        
            </div>
            <div id="ranking-container">
                <ol>
                    <li>COVID-19</li>
                    <li>Ebola</li>
                    <li>Malaria</li>
                    <li>Dengue</li>
                    <li>HIV</li>
                    <li>Rabies</li>
                    <li>Influenza</li>
                </ol>
                <ul>
                    <li class="points">100000</li>
                    <li class="points">75000</li>
                    <li class="points">60000</li>
                    <li class="points">50000</li>
                    <li class="points">40000</li>
                    <li class="points">15000</li>
                    <li class="points">10000</li>
                </ul>
            </div>
            <div id="replay-container">
                <button id="replay-button">
                    <img src="img/replay.png">
                </button>
            </div>
        </div>
    </main>`);
    document.body.appendChild(gameOverScreen);

    endMusic.currentTime = 0;
    endMusic.volume = 0.2;
    endMusic.play();

    const replayButton = document.querySelector('#replay-button');
    replayButton.addEventListener('click', function () {
        replayGame();
    })
}

function removePreScreen () {
    preScreen.remove();
}

function removeSplashScreen () {
    splashScreen.remove();
}

function removeInstructions () {
    instructionsPopup.remove();
    document.getElementById("splash").style.filter = "brightness(1)";
}

function removeGameScreen () {
    gameScreen.remove();
}

function removeGameOverScreen () {
    gameOverScreen.remove();
}

function showInstructions () {
    createInstructionsPopup();
}

function startGame () {
    removeSplashScreen();
    createGameScreen();

    game = new Game();
    game.gameScreen = gameScreen;

    game.start();
}

function endGame () {
    removeGameScreen();
    //insertHighScore();
    createGameOverScreen();
}

/*function insertHighScore () {     PENDING !!!
    const highScore = document.querySelectorAll('.points');
    console.log(highScore);
}*/

function replayGame () {
    endMusic.volume = 0;
    endMusic.pause();
    removeGameOverScreen();
    game.score = 0;
    game.player.lives = 100;
    createGameScreen();

    game = new Game();
    game.gameScreen = gameScreen;

    game.start();
}

window.addEventListener('load', createPreScreen);
