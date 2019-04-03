var w = 20;
var rows;
var cols;
var cells = [];
var walker;
var stack = [];
var desiredFrameRate;
var inputSpeed;

function setup() {
    createCanvas(600, 600);
    rows = height / w;
    cols = width / w;
    desiredFrameRate = 60

    resetSketch();
    var button = createButton("Restart");
    button.position(width + 10, 10);
    button.mousePressed(resetSketch);
    var textfield = createElement("tag", "Speed")
    textfield.position(width+11, 40);
    inputSpeed = createInput(desiredFrameRate +'');
    inputSpeed.position(width + 11, 60);
    inputSpeed.input(changeDesiredFramRate);
}

function draw() {
    background(0);
    for (var i = 0; i < cells.length; i++) {
        cells[i].show();
    }
    walker.show();
    walker.step();
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

function changeDesiredFramRate(){
    desiredFrameRate = parseFloat(this.value());
}

function resetSketch(){
    cells = []
    stack = []
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            var cell = new Cell(j, i);
            cells.push(cell)
        }
    }

    walker = new Walker(0,0)
    cells[0].visited = true;

    frameRate(desiredFrameRate);

}