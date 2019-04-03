class Cell {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.UP = true;
        this.DOWN = true;
        this.LEFT = true;
        this.RIGHT = true;
        this.visited = false;
    }

    show() {
        if (this.visited) {
            fill(0, 220, 0, 150);
            noStroke();
            rect(this.col * w, this.row * w, w + 1, w + 1);
        }
        stroke(255);
        strokeWeight(3);
        var x = this.col * w;
        var y = this.row * w;
        if (this.UP) {
            line(x, y, x + w, y)
        }
        if (this.DOWN) {
            line(x, y + w, x + w, y + w)
        }
        if (this.LEFT) {
            line(x, y, x, y + w)
        }
        if (this.RIGHT) {
            line(x + w, y, x + w, y + w)
        }
    }
}

