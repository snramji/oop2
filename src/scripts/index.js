import shapes from './shapes.js'

// console.log("Hello World V1");

const panel = new shapes.Drawing(401, 402);
const svg = panel.draw();
console.log(svg);
idDrawings.append(svg);



// const k4 = panel.createRectangle(101, 102);
// const k5 = panel.createRectangle(201, 202);
// console.log(panel);

document.body.addEventListener("click", e => {

    const el = e.target;
    const todo = el.getAttribute("todo");
   
    if(todo === "newRectangle") {
        console.log(idx.value, idy.value);
        const rect = panel.createRectangle(idx.value, idy.value);
    }

    // console.log(todo);
    

    // console.log("you clicked at", e);
    // const el = e.target;
    // console.log(el);
    // console.log(el.getAttribute("key"));

    // const el = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    // el.setAttribute("x", "250");
    // el.setAttribute("y", "250");
    // el.setAttribute("width", "100");
    // el.setAttribute("height", "50");
    // el.setAttribute("key", "whatever");

    // idsvg.append(el);

    if(todo === "show") {
        // const svg = panel.draw();
        // console.log(svg);
        // idDrawings.append(svg);
    }


});
