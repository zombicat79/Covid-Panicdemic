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
        this.innerX = this.outerX + this.size / 2;
        this.innerY = this.outerY + this.size / 2;
        this.isInfected = false;
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
        this.outerY += 1;
    }

    isInsideScreen () {
    }
}