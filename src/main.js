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
// Update button event !!!
function createSplashScreen () {
    splashScreen = buildDom(`
    <main id="splash">
        <img id="title" src="./img/game_title.png" alt="300">
        <button class="arcade-button">
            <img src="./img/start.png">
        </button>
    </main>`);
    document.body.appendChild(splashScreen);

    const startButton = document.querySelector('.arcade-button');
    startButton.addEventListener('click', function () {
        console.log("Start the game!");
    });    
}

// Update inner HMTL !!!
function createGameScreen () {
    gameScreen = buildDom (`
    <header>
        <section id="life-container">
            <img>
            <div></div>
            <div></div>
            <div></div>
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
// Update button event !!!
function createGameOverScreen () {
    gameOverScreen = buildDom(`
    <main id="end">
        <h1>GAME OVER</h1>
        <h2>HIGH SCORE</h2>        
        <ol>
            <li>TBA</li>
            <li>TBA</li>
            <li>TBA</li>
            <li>TBA</li>
            <li>TBA</li>
        </ol>
        <button class="arcade-button">
            <img src="img/replay.png">
        </button>
    </main>`);
    document.body.appendChild(gameOverScreen);

    const replayButton = document.querySelector('.arcade-button');
    replayButton.addEventListener('click', function () {
        console.log("Play again!");
    })
}


// PENDING
function removeSplashScreen () {
}

function removeGameScreen () {
}

function removeGameOverScreen () {
}

function startGame () {
}

function endGame () {
}