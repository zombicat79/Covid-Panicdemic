"use strict";

class Game {
    constructor () {
        this.canvas = null;
        this.ctx = null;
        this.player = null;
        this.buildings = [];
        this.sanitizers = [];
        this.sanitizerShots = [];
        this.masks = [];
        this.gameIsOver = false;
        this.gameScreen = null;
        this.score = 0;
        this.scoreCounter = null;
        this.lifeUnitOne = null;
        this.lifeUnitTwo = null;
        this.lifeUnitThree = null;
    }
    start () {
        this.canvasContainer = document.querySelector('main');
        this.canvas = this.gameScreen.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        
        this.scoreCounter = document.querySelector('#score p');
        this.lifeUnitOne = document.querySelector('#healthy');
        this.lifeUnitTwo = document.querySelector('#wounded');
        this.lifeUnitThree = document.querySelector('#critical');
        
        this.containerWidth = this.canvasContainer.offsetWidth;
        this.containerHeight = this.canvasContainer.offsetHeight;
        this.canvas.setAttribute('width', this.containerWidth);
        this.canvas.setAttribute('height', this.containerHeight);

        const middleScreen = this.containerWidth / 2;
        const bottomScreen = this.containerHeight - 180;
        this.player = new Player(this.canvas, 100, 40, middleScreen, bottomScreen);
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
            // Random creation of sanitizers (enemies)
            if (Math.random () > 0.99) {
                let sanitizer = new Enemy(this.canvas, 40, Math.random() * 1300, -100);
                game.sanitizers.push(sanitizer);
            }

            //Random creation of sanitizer shots (enemies)
            if (Math.random () > 0.9 && this.sanitizers.length > 0) {
                const randomI = Math.floor(Math.random() * this.sanitizers.length)
                const randomSelectedShooter = this.sanitizers[randomI];
                let shot = new Enemy(this.canvas, 10, randomSelectedShooter.x + randomSelectedShooter.size / 2, randomSelectedShooter.y + randomSelectedShooter.size);
                game.sanitizerShots.push(shot);
            }

            //Random creation of mask blocks (TRY TO FIX BLOCKS APPEARING ON TOP OF ONE ANOTHER)
            let randomIntegerNumber = Math.floor(Math.random() * 10);
            if (Math.random () > 0.995) {
                let maskBlock = [new Enemy(this.canvas, 40, Math.random() * 1300, -100)];
                maskBlock.push(new Enemy(this.canvas, 40, maskBlock[0].x + 41, -100));
                for (let i = 1; i < randomIntegerNumber; i++) {
                    maskBlock.push(new Enemy(this.canvas, 40, maskBlock[i].x + 41, -100));
                }
                game.masks.push(maskBlock);
            }
            
            // Random creation of building blocks
            let randomNumber = Math.random();
            let lastBuilding = game.buildings.length - 1;
            if (randomNumber > 0.98 && randomNumber < 0.99) {
                let newHospitalBuilding = new Building(this.canvas, "hospital", "green", 100, Math.random() * 1300, -50, 50);
                if (lastBuilding < 0 || newHospitalBuilding.outerY + newHospitalBuilding.size + 5 < game.buildings[lastBuilding].outerY) {
                    game.buildings.push(newHospitalBuilding);
                }
            }
            if (randomNumber > 0.965 && randomNumber < 0.98) {
                let newSchoolBuilding = new Building(this.canvas, "school", "brown", 80, Math.random() * 1300, -50, 20);
                if (lastBuilding < 0 || newSchoolBuilding.outerY + newSchoolBuilding.size + 5 < game.buildings[lastBuilding].outerY) {
                    game.buildings.push(newSchoolBuilding);
                }
            }
            if (randomNumber > 0.935 && randomNumber < 0.965) {
                let newMallBuilding = new Building(this.canvas, "mall", "yellow", 120, Math.random() * 1300, -50, 10);
                if (lastBuilding < 0 || newMallBuilding.outerY + newMallBuilding.size + 5 < game.buildings[lastBuilding].outerY) {
                    game.buildings.push(newMallBuilding);
                }
            }
            if (randomNumber > 0.9 && randomNumber < 0.935) {
                let newApartmentBuilding = new Building(this.canvas, "apartment", "blue", 60, Math.random() * 1300, -50, 5);
                if (lastBuilding < 0 || newApartmentBuilding.outerY + newApartmentBuilding.size + 5 < game.buildings[lastBuilding].outerY) {
                    game.buildings.push(newApartmentBuilding);
                }
            }
            
            //Check for collisions with buildings
            game.buildings.forEach(function(element) {
                let buildingX = element.outerX;
                let buildingY = element.outerY;
                let buildingSize = element.size;
                let buildingType = element.name;
                game.player.didCollideBuildings(buildingX, buildingY, buildingSize, buildingType);
            })

            //Check for collisions with sanitizers
            game.sanitizers.forEach(function(element) {
                let sanitizerX = element.x;
                let sanitizerY = element.y;
                let sanitizerSize = element.size;
                game.player.didCollideSanitizers(sanitizerX, sanitizerY, sanitizerSize);
            })

            //Check for collisions with sanitizer shots
            game.sanitizerShots.forEach(function(element) {
                let shotX = element.x;
                let shotY = element.y;
                let shotSize = element.size;
                if (game.player.didCollideShots(shotX, shotY, shotSize)) {
                    element.y = game.containerHeight;
                    game.player.isHit = false;
                }
            })

            //Check for collisions with masks
            game.masks.forEach(function(element) {
                element.forEach(function(element) {
                    let maskX = element.x;
                    let maskY = element.y;
                    let maskSize = element.size;
                    game.player.didCollideMasks(maskX, maskY, maskSize);
                })
            })

            // Check of player being inside the screen
            game.player.handleScreenCollision();

            // Cascading movement of building blocks (elimination of elements outside of screen)
            game.buildings = game.buildings.filter(function(element) {
                return element.outerY < game.containerHeight;
            })
            game.buildings.forEach(function(element) {
                element.updatePosition();
            })

            // Cascading & horizontal movement of sanitizers (elimination of elements outside of screen)
            game.sanitizers = game.sanitizers.filter(function(element) {
                return element.y < game.containerHeight;
            })
            game.sanitizers.forEach(function(element) {
                element.updatePosition();
            })

            //Cascading movement of sanitizer shots (elimination of elements outside of screen)
            game.sanitizerShots = game.sanitizerShots.filter(function(element) {
                return element.y < game.containerHeight; 
            })
            game.sanitizerShots.forEach(function(element) {   
                element.updateBulletPosition();
            })

            //Cascading movement of mask blocks (elimination of elements outside of screen)
            game.masks.forEach(function(element) {
                element.forEach(function(element) {
                    element.updateMasksPosition();
                })
            })

            // Animation frame refreshment
            game.ctx.fillStyle = "white";
            game.ctx.fillRect(0, 0, game.containerWidth, game.containerHeight);
            game.buildings.forEach(function(element) {
                element.draw();
            })
            game.sanitizerShots.forEach(function(element) {
                element.draw();
            })
            game.masks.forEach(function(element) {
                element.forEach(function(element) {
                    element.drawMasks();
                })
            })
            game.player.draw();
            game.sanitizers.forEach(function(element) {
                element.draw();
            })

            if (this.gameIsOver === false) {
                window.requestAnimationFrame(loop);
            }
            else {
                this.gameOver();
            }
        }.bind(this);
        window.requestAnimationFrame(loop);
    };

    gameOver () {
        if (this.gameIsOver === true) {
            endGame();
        }  
    };

    updateGameStats () { //PENDING
        this.scoreCounter.innerHTML = this.score;
        if (this.player.lives < 700) {
            this.lifeUnitThree
        }
        if (this.player.lives < 300) {

        }
    };

}