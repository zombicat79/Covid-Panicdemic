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
            
            // Random creation of building blocks
            let randomNumber = Math.random();
            let lastBuilding = game.buildings.length - 1;
            let hospitalCores = [];
            let schoolCores = [];
            let mallCores = [];
            let apartmentCores = [];
            if (randomNumber > 0.98 && randomNumber < 0.99) {
                let newHospitalBuilding = new Building(this.canvas, "hospital", "green", 100, Math.random() * 1300, -50, 5000);
                if (lastBuilding < 0 || newHospitalBuilding.outerY + newHospitalBuilding.size + 5 < game.buildings[lastBuilding].outerY) {
                    game.buildings.push(newHospitalBuilding);
                }
            }
            if (randomNumber > 0.965 && randomNumber < 0.98) {
                let newSchoolBuilding = new Building(this.canvas, "school", "brown", 80, Math.random() * 1300, -50, 2000);
                if (lastBuilding < 0 || newSchoolBuilding.outerY + newSchoolBuilding.size + 5 < game.buildings[lastBuilding].outerY) {
                    game.buildings.push(newSchoolBuilding);
                }
            }
            if (randomNumber > 0.935 && randomNumber < 0.965) {
                let newMallBuilding = new Building(this.canvas, "mall", "yellow", 120, Math.random() * 1300, -50, 1000);
                if (lastBuilding < 0 || newMallBuilding.outerY + newMallBuilding.size + 5 < game.buildings[lastBuilding].outerY) {
                    game.buildings.push(newMallBuilding);
                }
            }
            if (randomNumber > 0.9 && randomNumber < 0.935) {
                let newApartmentBuilding = new Building(this.canvas, "apartment", "blue", 60, Math.random() * 1300, -50, 500);
                if (lastBuilding < 0 || newApartmentBuilding.outerY + newApartmentBuilding.size + 5 < game.buildings[lastBuilding].outerY) {
                    game.buildings.push(newApartmentBuilding);
                }
            }
            
            //Check for collisions with buildings
            game.buildings.forEach(function(element) {
                let buildingCore = element.core;
                let buildingType = element.name;
                game.player.didCollide(buildingCore, buildingType);
            })

            // Check of player being inside the screen
            game.player.handleScreenCollision();

            // Cascading movement of building blocks
            game.buildings.forEach(function(element) {
                element.updatePosition();
            })

            // Animation frame refreshment
            game.ctx.fillStyle = "white";
            game.ctx.fillRect(0, 0, game.containerWidth, game.containerHeight);
            game.buildings.forEach(function(element) {
                element.draw();
            })
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