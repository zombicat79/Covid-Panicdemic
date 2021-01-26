"use strict"

class Building {
    constructor (canvas, name, color, size, outerX, outerY, catchScore) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.name = name;
        this.color = color;
        this.size = size;
        this.outerX = outerX;
        this.outerY = outerY;
        this.catchScore = catchScore;
        this.core = [Math.floor((this.outerX + this.size) / 2), Math.floor((this.outerY + this.size) / 2)];
        this.isInfected = false;
        this.outOfGame = false;
    }

    draw () {
        if (this.name === "hospital") {
            this.ctx.fillStyle = this.color;
        }
        else if (this.name === "school") {
            this.ctx.fillStyle = this.color;
        }
        else if (this.name === "mall") {
            this.ctx.fillStyle = this.color;
        }
        else {
            this.ctx.fillStyle = this.color;
        }        
        this.ctx.fillRect(this.outerX, this.outerY, this.size, this.size);
    }

    updatePosition () {
        this.outerY += 2;
        this.core[1] += 2;
    }

    isInsideScreen () { // UNDER CONSTRUCTION
        if (this.outerY > game.containerHeight) {
            this.outOfGame = true;
            return this.outOfGame;
        }
    }
}