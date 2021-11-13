const number = {
    read() {
        this.num = +prompt();
        return this; // returning this at every functions allows us to chain the calls
    },
    add(value) {
        this.num += value;
        return this;
    },
    subtract(value) {
        this.num -= value;
        return this; 
    },
    multiply(value) {
        this.num *= value;
        return this;
    },
    divide(value) {
        this.num /= value;
        return this;
    },
    show() {
        alert(this.num);
        return this;
    }
}

// number.read().add(2).subtract(1).multiply(4).divide(2).show() 
// outputs an alert of 6