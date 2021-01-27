"use strict";

let game;
let splashScreen;
let gameScreen;
let gameOverScreen;

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
        <h1>GAME OVER</h1>
        <h2>HIGH SCORE</h2>        
        <ol>
            <li>COVID-19</li>
            <li>Ebola</li>
            <li>Malaria</li>
            <li>Dengue</li>
            <li>HIV</li>
            <li>Rabies</li>
            <li>Influenza</li>
        </ol>
        <button class="arcade-button">
            <img src="img/replay.png">
        </button>
    </main>`);
    document.body.appendChild(gameOverScreen);

    const replayButton = document.querySelector('.arcade-button');
    replayButton.addEventListener('click', function () {
        removeGameOverScreen();
        //Pending game stats removal !!!
        createGameScreen();
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
    createGameOverScreen();
}

window.addEventListener('load', createSplashScreen);
