var w = 20;
var rows;
var cols;
var cells = [];
var walker;
var stack = [];

function setup() {
    createCanvas(600, 600);
    rows = height / w;
    cols = width / w;

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            var cell = new Cell(j, i);
            cells.push(cell)
        }
    }

    walker = new Walker(0, 0);
    cells[0].visited = true;

}

function draw() {
    background(0);
    for (var i = 0; i < cells.length; i++) {
        cells[i].show();
    }
    walker.show();
    walker.step();
    //frameRate(120);
    if (this.allVisisted) {
        noLoop();
    }

}

function allVisited() {
    allVisited = true;
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].visited == false) {
            allVisisted = false;
        }
    }
    return allVisited;
}

function index(i, j) {
    if (i < 0 || j < 0 || j > cols - 1 || i > rows - 1) {
        return -1;
    }
    
    return i + j * cols;
}