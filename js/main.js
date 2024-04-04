let grid;
let cols;
let n_cols = 40;
let col_width;
let col_height;
let is_running = true;

function setup() {
    createCanvas(400, 400);
    frameRate(10);
    col_width = width / n_cols;
    col_height = height;
    grid = new Grid(n_cols, col_width, col_height);
}

function keyPressed() {

}

function draw() {
    background(0);
    grid.display()
    grid.step()
    frameRate(10)

}
function set_sorting_algo(sorting_algo_name) {
    grid.set_sorting_algo(sorting_algo_name)
}
function windowResized() {
    // resizeCanvas(windowWidth, windowHeight);
}

function reset() {
    grid.reset();
}