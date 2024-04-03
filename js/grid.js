class Grid {
    constructor(n_cols, col_width, col_height) {
        this.cols = Array.from({ length: n_cols }, () => Math.floor(Math.random() * col_height) + 1);
        this.i = 0;
        this.j = 0;
        this.col_height = col_height;
        this.col_width = col_width;
        this.sorting_algo = "bubble"
    }
    set_sorting_algo(algo_name) {
        this.sorting_algo = algo_name;
        this.reset()
        console.log("here")
    }
    display() {
        fill(255);
        for (let i = 0; i < this.cols.length; i++) {
            rect(i * this.col_width, this.col_height - this.cols[i], this.col_width, this.cols[i]);
        }
    }

    highlight(i) {
        fill(255, 0, 0)
        rect(i * this.col_width, this.col_height - this.cols[i], this.col_width, this.cols[i]);
    }

    swap(i, j) {
        let temp = this.cols[i];
        this.cols[i] = this.cols[j];
        this.cols[j] = temp;
    }

    step() {
        if (this.sorting_algo == "bubble") {
            let len_a = this.cols.length;
            let steps = 0;
            let swapped = false;
            if (this.i < len_a) {
                if (this.j < len_a - this.i - 1) {
                    if (this.cols[this.j] > this.cols[this.j + 1]) {
                        this.highlight(this.j)
                        this.swap(this.j, this.j + 1);
                        swapped = true;
                        steps += 1;
                    }
                    this.j += 1;
                } else {
                    this.i += 1;
                    this.j = 0;
                }
            }
            return steps;

        } else if (this.sorting_algo == "selection") {
            let i = this.i;
            let l = 999999;
            let li = i;
            for (let j = i; j < this.cols.length; j++) {
                if (this.cols[j] < l) {
                    l = this.cols[j];
                    li = j;
                }
            }
            this.highlight(i)
            this.swap(i, li);
            this.i++;

        }
    }

    reset() {
        this.cols = Array.from({ length: n_cols }, () => Math.floor(Math.random() * col_height) + 1);
        this.i = 0;
        this.j = 0;
    }
}
