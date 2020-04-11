function hello() {
    return "Hello";
}

class Shape {
    constructor(key, x, y) {
        this.key = key;
        this.x = x;
        this.y = y;
    }
}

class Rectangle extends Shape {
    // execute methods in parent class and inherit from Shape and add othe attributes and methods
    // constructor(x, y) {
    //     super(x, y);
    //     console.log("Hello from Rectangle");
    // }

    getElement() {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        rect.setAttribute("x", this.x);
        rect.setAttribute("y", this.y);
        rect.setAttribute("width", "100");
        rect.setAttribute("height", "50");
        rect.setAttribute("key", this.key);
        return rect;
    }



}

// Controller Class

class Drawing {
    // 'xxxwidth' and 'width' don't have to be the same
    constructor(xxxwidth, xxxheight) {
        this.width = xxxwidth;
        this.height = xxxheight;
        this.shapes = {};
        this.counter = 1;
    }
    nextKey() {
        return `k${this.counter++}`;
    }
    createRectangle(x, y) {
        const key = this.nextKey();
        const rect = new Rectangle(key, x, y);
        this.shapes[key] = rect;
        return key;
    }

    getShape(theKey) {
        return this.shapes[theKey];
    }

    draw() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        for (let key in this.shapes) {
            console.log(key);
            const el = this.shapes[key].getElement();
            svg.append(el);
        }
        return svg;
    }

}

export default { hello, Shape, Rectangle, Drawing };