"use strict";

class Player {
    constructor (canvas, lives, size, x, y) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.lives = lives;
        this.size = size;
        this.x = x;
        this.y = y;
        this.direction = 0;
        this.speed = 30;
        this.image = document.createElement('img');
        this.image.src = 'img/virus.png';
    }

    /* setDirection (direction) {
    } */  // NOT NEEDED!!!

    handleScreenCollision () {
        if (this.x <= 0 && this.direction === -1) {
            this.x = 1;
        }
        else if (this.y <= 0 && this.direction === -1) {
            this.y = 1;            
        }
        else if (this.x >= game.containerWidth - this.size && this.direction === 1) {
            this.x = game.containerWidth - this.size - 1;
            
        }
        else if (this.y >= game.containerHeight - 120 && this.direction === 1) {
            this.y = game.containerHeight - 141;    
        }
        else {
            this.x = this.x;
            this.y = this.y;
        }
    }

    removeLife () {
    }

    draw () {
        //this.ctx.fillStyle = "red";
        //this.ctx.fillRect(this.x, this.y, this.size, this.size)
        this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }    
    

    didCollideBuildings (buildingX, buildingY, buildingSize, buildingType) {  
        let crossedTop = false;
        let crossedBottom = false;
        let crossedLeft = false;
        let crossedRight = false;
        
        
        if (buildingY + buildingSize >= this.y) {
            crossedTop = true;
        }
        if (buildingY <= this.y + this.size) {
            crossedBottom = true;
        }
        if (buildingX + buildingSize >= this.x) {
            crossedRight = true;
        }
        if (buildingX <= this.x + this.size) {
            crossedLeft = true;
        }
        if (crossedTop && crossedBottom && crossedLeft && crossedRight) {
            switch (buildingType) {
                case "hospital":
                    game.score += 50;
                    break;
                case "school":
                    game.score += 20;
                    break;
                case "mall":
                    game.score += 10;
                    break;
                default:
                    game.score += 5;
            }
        }
    }

    didCollideSanitizers (sanitizerX, sanitizerY, sanitizerSize) {
        let hitTop = false;
        let hitBottom = false;
        let hitRight = false;
        let hitLeft = false;

        if (sanitizerY + sanitizerSize >= this.y) {
            hitTop = true;
        }
        if (sanitizerY <= this.y + this.size) {
            hitBottom = true;
        }
        if (sanitizerX + sanitizerSize >= this.x) {
            hitRight = true;
        }
        if (sanitizerX <= this.x + this.size) {
            hitLeft = true;
        }
        if (hitTop && hitBottom && hitLeft && hitRight) {
            console.log('hit!')
        }
    }
}