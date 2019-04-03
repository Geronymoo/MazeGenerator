var w = 20;
var rows;
var cols;
var cells = [];
var walker;
var stack = [];
var desiredFrameRate;
var inputSpeed;
var h;
var wi;
var w_temp = 20;


var button;
var textspeed;
var inputSpeed;
var textsize;
var inputSize;
var textwidth;
var inputWidth;
var button2;

function setup() {
    h = 600;
    wi = 600;
    desiredFrameRate = 60

    button = createButton("Restart");
    button.mousePressed(resetSketch);

    //speed
    textspeed = createElement("tag", "Speed (max: 60)")
    inputSpeed = createInput(desiredFrameRate + '');
    inputSpeed.input(changeDesiredFrameRate);
    
    //cell size
    textsize = createElement("tag", "Cell size (min: 15)")
    inputSize = createInput(w + '');
    inputSize.input(changeCellSize);
    
    //width
    textwidth = createElement("tag", "Width/Hight")
    inputWidth = createInput(wi + '');
    inputWidth.input(changeWidthHeight);

    button2 = createButton("Print");
    button2.mousePressed(printWindow);
    
    resetSketch();
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

function changeDesiredFrameRate() {
    desiredFrameRate = parseFloat(this.value());
}

function changeCellSize() {
    w_temp = parseInt(this.value())
    if (w_temp < 15) {
        w_temp = 15;
    }
}

function changeWidthHeight() {
    wi = parseInt(this.value())
    h = wi;
}

function printWindow(){
    window.print()
}

function resetSketch() {

    w = w_temp;
    createCanvas(wi, h);
    rows = height / w;
    cols = width / w;


    cells = []
    stack = []
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            var cell = new Cell(j, i);
            cells.push(cell)
        }
    }

    walker = new Walker(0, 0)
    cells[0].visited = true;

    button.position(width + 10, 10);
    textspeed.position(width + 11, 40);
    inputSpeed.position(width + 11, 60);
    textsize.position(width + 11, 90);
    inputSize.position(width + 11, 110);
    textwidth.position(width + 11, 140);
    inputWidth.position(width + 11, 160);
    inputWidth.position(width + 11, 160);
    button2.position(width + 10, 190);
    

    frameRate(desiredFrameRate);

}