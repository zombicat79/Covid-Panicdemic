"use strict";

let game;
let splashScreen;
let gameScreen;
let gameOverScreen;

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


// HTML DYNAMIC DOM CONSTRUCTOR
function buildDom (html) {
 let newElement = document.createElement("div");
 newElement.innerHTML = html;
 return newElement;
}

// SCREEN GENERATORS
// Update inner HTML !!!
function createSplashScreen () {
    splashScreen = buildDom(`
    <main id="splash">
        <img id="title" src="./img/game_title.png">
        <button class="arcade-button">
            <img src="./img/start.png">
        </button>
    </main>`);
    document.body.appendChild(splashScreen);

    /*window.addEventListener('load', event => {
        const startMusic = document.querySelector("audio");
        startMusic.currentTime = 0;
        startMusic.volume = 0.2;
        startMusic.play();
    })*/
    
    /*const sound = new Audio();
    sound.src = 'sound/Start.mp3';
    sound.play();*/
    
    const startButton = document.querySelector('.arcade-button');
    startButton.addEventListener('click', startGame);
       
}

// Update inner HMTL !!!
function createGameScreen () {
    gameScreen = buildDom (`
    <header>
        <section id="life-container">
            <img>>
            <div id="critical" class="life-bar"></div>
            <div id="wounded" class="life-bar"></div>
            <div id="healthy" class="life-bar"></div>
        </section>
        <section id="score">
            <img>
            <p></p>
        </section>
    </header>
    <main>
        <canvas></canvas>
    </main>`);
    document.body.appendChild(gameScreen);
}

// Update inner HTML !!!
function createGameOverScreen () {
    gameOverScreen = buildDom(`
    <main id="end">
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
    </main>`);
    document.body.appendChild(gameOverScreen);

    const replayButton = document.querySelector('#replay-button');
    replayButton.addEventListener('click', function () {
        replayGame();
    })
}


// PENDING
function removeSplashScreen () {
    splashScreen.remove();
}

function removeGameScreen () {
    gameScreen.remove();
}

function removeGameOverScreen () {
    gameOverScreen.remove();
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
    insertHighScore();
    createGameOverScreen();
}

function insertHighScore () {
    const highScore = document.querySelectorAll('.points');
    console.log(highScore);
}

function replayGame () {
    removeGameOverScreen();
        //Pending game stats removal !!!
    createGameScreen();

    game = new Game();
    game.gameScreen = gameScreen;

    game.start();
}

window.addEventListener('load', createSplashScreen);
