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
            this.speed = 0;
            return true;
        }
        else if (this.y <= 0 && this.direction === -1) {
            this.speed = 0;
            return true;
        }
        else if (this.x = game.containerWidth - this.size && this.direction === 1) {
            this.speed = 0;
            return true;
        }
        else if (this.y >= game.containerHeight + this.size && this.direction === 1) {
            this.speed = 0;
            return true;
        }
        else {
            this.speed = 30;
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