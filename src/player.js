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
    }

    /* setDirection (direction) {
    } */

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
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
    }

    didCollide (obstacle) {
    } 
}