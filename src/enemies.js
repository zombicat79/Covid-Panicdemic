"use strict"

class Enemy {
    constructor (canvas, size, x, y) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.size = size;
        this.x = x;
        this.y = y;
        this.direction = -1;
        this.speed = 5;
    }

    draw () {      
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.x, this.y, this.size, this.size);  
    }

    drawMasks () {      
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(this.x, this.y, this.size, this.size);  
    }

    updatePosition () {
        this.y += 1;
        if (Math.random() > 0.99) {
            //Using ternary operators
           const isMinusOne = this.direction === -1
           this.direction = isMinusOne ? 1 : -1
        }
        this.x = this.x + (this.direction * this.speed);
    }

    updateBulletPosition () {
        this.y += 4;
    }

    updateMasksPosition () {
        this.y += 3;
    }

    isInsideScreen () {
    }
}