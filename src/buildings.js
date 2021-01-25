class Building {
    constructor (canvas, name, size, outerX, outerY) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.name = name;
        this.size = size;
        this.outerX = outerX;
        this.outerY = outerY;
        this.innerX = this.outerX + this.size / 2;
        this.innerY = this.outerY + this.size / 2;
        this.direction = -1;
        this.speed = 20;
        this.isInfected = false;
    }

    draw () {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.outerX, this.outerY, this.size, this.size);
    }

    updatePosition () {
        this.outerY += 1;
    }

    isInsideScreen () {
    }
}