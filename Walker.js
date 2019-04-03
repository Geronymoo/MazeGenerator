
class Walker {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

    step() {

        //find unvisited neighbors indicies
        var neighbors = this.checkForUnvisitedNeighbors(this.col, this.row);

        if (neighbors.length > 0) {
            //pick random
            var descision = floor(random(0, neighbors.length));

            //push current cell to stack
            var current = cells[this.col + this.row * cols]
            stack.push(current);
            
            var newcell = neighbors[descision];

            //removes wall between current and chosen cell
            if (current.col + 1 == newcell.col) {
                current.RIGHT = false;
                newcell.LEFT = false;
                //console.log("step right")
            } else if (current.col - 1 == newcell.col) {
                current.LEFT = false;
                newcell.RIGHT = false;
                //console.log("step left")
            } else if (current.row + 1 == newcell.row) {
                current.DOWN = false;
                newcell.UP = false;
                //console.log("step down")
            } else if (current.row - 1 == newcell.row) {
                current.UP = false;
                newcell.DOWN = false;
                //console.log("step up")
            }

            //make chosen cell the current cell
            this.col = newcell.col;
            this.row = newcell.row;
            newcell.visited = true;
            
        } else if (stack.length > 0) {
            var newcell = stack.pop();
            this.col = newcell.col;
            this.row = newcell.row;

        }

        /*
        var dir = floor(random(0, 4));
        switch (dir) {
            case 0:
                if (this.row < rows) {
                    this.row++;
                    break;
                }
            case 1:
                if (this.col < cols) {
                    this.col++;
                    break;
                }
            case 2:
                if (this.row>0){
                    this.row--;
                    break;
                }
            case 3:
                if(this.col>0){
                    this.col--;
                    break;
                }
        }

        var index = this.row * rows + this.col;
        cells[index].visited = true;
        */

    }

    show() {
        fill(0, 255, 0);
        noStroke();
        rect(this.col * w, this.row * w, w + 1, w + 1);
    }

    checkForUnvisitedNeighbors(i, j) {
        var top = cells[index(i, j - 1)];
        var bot = cells[index(i, j + 1)];
        var right = cells[index(i + 1, j)];
        var left = cells[index(i - 1, j)];

        var neighbors = [];

        if (top && !top.visited) {
            neighbors.push(top);
        }

        if (bot && !bot.visited) {
            neighbors.push(bot);
        }

        if (left && !left.visited) {
            neighbors.push(left);
        }

        if (right && !right.visited) {
            neighbors.push(right);
        }

        return neighbors;
    }

}