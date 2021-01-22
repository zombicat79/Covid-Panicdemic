# Covid Panicdemic

## Description

2020 will always be remembered for being "the year of the pandemic" (we still have to see what 2021 brings us). One of the most powerful lessons that this exceptional event taught us might be our actual vulnerability as a species, and the easiness with which nature can bring us to our knees.

In this game, the player will take the role of the COVID-19 virus trying to wipe out humanity (or at least make sick as much people as possible). The action will kick off with the player-character (the virus) flying over a background (much in the style of classic [1942](https://en.wikipedia.org/wiki/1942_(video_game)) game) that will depict an urban landscape. Random blocks representing buildings will come cascading down from the top op the screen, and the player will have to catch them (contaminate them) in order to score as much points as possible. Human countermeasures such as masks, sanitizers and vaccines, will try to prevent the player from succeeding in their mission.



## MVP

- A **player-led virus main character,** should be able to move around in all four directions, covering the entirety of the game screen (except the header). 
- **Blocks representing buildings** should appear randomly on the top of the screen, and then come down all the way to the bottom. Upon capture by the player's character (the virus), score points should be added on the player's account shown on the header. Score would vary depending on different classes of buldings (school, hospital, shopping mall, etc.) being captured (contaminated).
- **2 types of enemies** (or antiviral measures) should try to prevent the player from succeeding:
  1. **Masks:** should appear randomly on the screen and hinder the player's movements by blocking passage.
  2. **Sanitizers:** should appear either alone or packed in squadrons, moving horizontally while descending. Should be able to shoot (disinfectant) and substract one of the player's life points upon being hit.
- The game should be over whenever the player lost all 3 points of life shown on the header.
- There should be no ending to the game as long as the player kept al least one point of life in his/her counter.
- Final score by the end of the game should be recorded on the end screen (if on the ranking top positions).



## Backlog

1. Add advanced styling and nice graphics (covers & titles, backgrounds and active game elements)
2. Add an additional type of enemy:
   - **Vaccines:** would appear every now and then after a certain amount of time has elapsed. They would actively track the player's position and go for it (seek & destroy). They would kill instantly on touch. After some further amount of time, if the player had survived the chase, vaccines would disappear.
3. Add the possibility to make life tokens appear on screen and get a life boost if caught.
4. Add an additional "City selection" screen between the "Start" screen and the "Game" screen, where the player would be given the option to choose which city to contaminate. The name of the choosen city would be portrayed on the "Game" screen header.
5. Add "Insert coin" buttons and credit counters both on the "Start" screen and the "End" screen, thus simulating the typical functioning of classic game arcade coin-operated machines.
6. Add background music and sound FX.



## Data structure

1. index.html
2. styles.css
3. main.js
4. game.js
5. player.js
6. enemies.js
7. buildings.js



### 1. index.html

Contains the most basic static HTML.

### 2. styles.css

Contains the CSS styles that will be applied to the dynamic HTML elements created and managed through JavaScript.

### 3. main.js

Contains the JavaScript functions that manage the flow of the game and the transition between different screens and states.

#### Methods:

`buildDom(){`

`createSplashScreen() {}`

`removeSplashScreen() {}`

`createGameScreen() {}`

`removeGameScreen() {}`

`createGameOverScreen() {}`

`removeGameOverScreen() {}`

`startGame() {}`

`endGame() {}`

### 4. game.js

Contains the main Game class, which will serve as the blueprint for the game object.

#### Properties:

`canvas`

`ctx`

`player`

`enemies`

`gameIsOver`

`gameScreen`

`score`

#### Methods:

`start() {}`

`startLoop() {}`

`checkCollisions() {}`

`gameOver() {}`

`updateGameStats() {}`

### 5. player.js

Contains the Player class, which will serve as the blueprint for the mainPlayer object.

#### Properties:

`canvas`

`ctx`

`lives`

`size`

`x`

`y`

`direction`

`speed`

#### Methods:

`setDirection(direction) {}`

`handleScreenCollision() {}`

`removeLife() {}`

`draw() {}`

`didCollide(obstacle) {}`

### 6. enemies.js

Contains the Enemies class, which will serve as the blueprint for the different types of enemies that will appear on the game.

#### Properties:

`canvas`

`ctx`

`size`

`x`

`y`

`speed`

#### Methods:

`draw() {}`

`updatePosition() {}`

`isInsideScreen() {}`

### 7. buildings.js

Contains the Buildings class, which will serve as the blueprint for the different types of buldings the player will have to contaminate

#### Properties:

`canvas`

`ctx`

`x`

`y`

`speed`

#### Methods:

`draw() {}`

`updatePosition() {}`

`isInsideScreen() {}`



## States and states transition

1. SPLASH SCREEN

   This is the initial screen to be displayed upon loading. It shows the title of the game, some background cover and the buttons to get started.

   Managed through the following functions:

   Initial load of the game (or replay):

   - `function createSplashScreen {}`

   Transition to the "Game Screen":

   -  `function removeSplashScreen {}` 

     

2. GAME SCREEN

   This is the main screen where all action will take place.

   Managed through the following functions:

   Start of game (player starts to play):

   `function createGameScreen() {}`

   Game over (player gets killed)r:

   `function removeGameScreen(){}`

   

3. END SCREEN

   This is the farewell screen where the players are given feedback about their performance and get the option to replay.

   Managed through the following functions:

   Game over (player gets killed and sees results - high score):

   `function createGameOverScreen() {}`

   Replay (player decides to try again):

   `function removeGameOverScreen() {}`

   `function createSplashScreen() {}`

   

## Tasks

This are the tasks needed in order to complete a functioning version of the game (in order of priority):

1. Create the project and the file structure

2. Create basic HTML skeleton

3. Link all the necessary files

4. Code function `buildDom() {}` to be able to dynamically manipulate the DOM

5. Create the 3 screens of the game (including buttons)

6. Add CSS styiling

7. Outline the functions that will manage transitions and the start & end of the game

   `createSplashScreen() {}`

   `removeSplashScreen() {}`

   `createGameScreen () {}`

   `removeGameScreen () {}`

   `createGameOverScreen () {}`

   `removeGameOverScreen () {}`

   `startGame() {}`

   `endGame() {}`

8. Code functions for creating/removing the splash screen.

9. Add the event listener to create the start game screen when the page loads

10. Code functions for creating/removing the game screen.

11. Code function to start game.

12. Add eventListener on "Start button" to start game.

13. Create the different JavaScript classes that will manage the different objects of the game (Game, Player, Enemies, Buildings)

14. Create all the objects needed for the game(pandemicGame, virus, mask, sanitizer, disinfectantShot, hospital, school, shoppingMall, appBlock)

15. Code method that will iniate every new game (class Game) and add it to the startGame method in main file

16. Create methods for movement of the player

17. Create methods for movement of the enemies

18. Create methods to update the position of buldings

19. Create methods to check for collisions

20. Create methods to update on status of different elements

21. Create the game loop (animation frame)

22. Add event listeners on keydown for player input

23. Create gameOver that will manage the end of the game

24. Create function to manage replay

    

## Links

### Trello

https://trello.com/b/hduulqXw/covid-panicdemic-ironhack

### Git

https://github.com/zombicat79/Covid-Panicdemic

### Slides

[https://miro.com/app/board/o9J_lXuKUDA=/](