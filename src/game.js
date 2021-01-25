"use strict";

class Game {
    constructor () {
        this.canvas = null;
        this.ctx = null;
        this.enemies = [];
        this.player = null;
        this.buildings = [];
        this.gameIsOver = false;
        this.gameScreen = null;
        this.score = 0;
    }
    start () {
        this.canvasContainer = document.querySelector('main');
        this.canvas = this.gameScreen.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        // Save reference to the score and lives elements
        this.containerWidth = this.canvasContainer.offsetWidth;
        this.containerHeight = this.canvasContainer.offsetHeight;
        this.canvas.setAttribute('width', this.containerWidth);
        this.canvas.setAttribute('height', this.containerHeight);

        const middleScreen = this.containerWidth / 2;
        const bottomScreen = this.containerHeight - 180;
        this.player = new Player(this.canvas, 3, 40, middleScreen, bottomScreen);
        this.player.draw();
        
        const boundHandleKeyInput = this.handleKeyInput.bind(this)
        document.body.addEventListener('keydown', boundHandleKeyInput);

        this.startLoop();
        
    };

    handleKeyInput(event) {
        // Using "which" property of the event to manage keyboard input
        switch(event.which) {
            case 87: //up
            case 38:
                game.player.direction = -1;
                game.player.y = game.player.y + (game.player.direction * game.player.speed);
                break;
            case 83: //down
            case 40:
                game.player.direction = 1;
                game.player.y = game.player.y + (game.player.direction * game.player.speed);
                break;
            case 65: //left
            case 37:
                game.player.direction = -1;
                game.player.x = game.player.x + (game.player.direction * game.player.speed);
                break;
            case 68: //right
            case 39:
                game.player.direction = 1;
                game.player.x = game.player.x + (game.player.direction * game.player.speed);
                break;
            }
    } 

    startLoop () {
        const loop = function () {
            if (Math.random() > 0.995) {
                let newBuilding = new Building(this.canvas, "hospital", 100, Math.random() * 1300, -50);
                let lastBuilding = game.buildings.length - 1;
                console.log(lastBuilding.outerY);
                if (lastBuilding.outerY === undefined || newBuilding.outerY + newBuilding.size < lastBuilding.outerY) {
                    game.buildings.push(newBuilding);
                }
            }
            game.player.handleScreenCollision();
            game.buildings.forEach(function(element) {
                element.updatePosition();
            })
            game.ctx.fillStyle = "white";
            game.ctx.fillRect(0, 0, game.containerWidth, game.containerHeight);
            game.player.draw();
            game.buildings.forEach(function(element) {
                element.draw();
            })
            if (this.gameIsOver === false) {
                window.requestAnimationFrame(loop);
            }
        }.bind(this);
        window.requestAnimationFrame(loop);
    };

    checkCollisions () {
    };

    gameOver () {   
    };

    updateGameStats () {      
    };

}