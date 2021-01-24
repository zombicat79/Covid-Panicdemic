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
        
        document.body.addEventListener('keydown', this.handleKeyInput);

        this.startLoop();
        
    };

    handleKeyInput(event) {
        // Using "which" property of the event to manage keyboard input
        switch(event.which) {
            case 87:
                game.player.direction = -1;
                game.player.y = game.player.y + (game.player.direction * game.player.speed);
                break;
            case 83:
                game.player.direction = 1;
                game.player.y = game.player.y + (game.player.direction * game.player.speed);
                break;
            case 65:
                game.player.direction = -1;
                game.player.x = game.player.x + (game.player.direction * game.player.speed);
                break;
            case 68:
                game.player.direction = 1;
                game.player.x = game.player.x + (game.player.direction * game.player.speed);
                break;
            case 38:
                this.player.direction = -1;
                console.log('up!');
                break;
            case 40:
                this.player.direction = 1;
                console.log('down!');
                break;
            case 37:
                this.player.direction = -1;
                console.log('left!');
                break;
            case 39:
                this.player.direction = 1;
                console.log('right!');
                break;
            }
    } 

    startLoop () {
        const loop = function () {
            // game.player.handleScreenCollision();
            game.ctx.fillStyle = "white";
            game.ctx.fillRect(0, 0, game.containerWidth, game.containerHeight);
            game.player.draw();
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