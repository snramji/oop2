// 
// npm test shapes -- -t -t plumb
// 

import shapes from './shapes'


test('test plumbing', () => {
    // console.log("Hello World from index.js");
    // console.log(shapes);

    expect(shapes.hello()).toBe("Hello");
});

test('test Shape', () => {
    const s = new shapes.Shape(1,2);
    expect(s.x).toBe(1);
    expect(s.y).toBe(2);
});

test('test Drawing', () => {
    const panel = new shapes.Drawing(401, 402);
    expect(panel.width).toBe(401);
    expect(panel.height).toBe(402);

    expect(panel.nextKey()).toBe('k1');
    expect(panel.nextKey()).toBe('k2');
    expect(panel.nextKey()).toBe('k3');
    
    const k4 = panel.createRectangle(101, 102);
    expect(k4).toBe('k4');

    const k5 = panel.createRectangle(201, 202);
    expect(k5).toBe('k5');  

    const rect1 = panel.getShape(k4);
    expect(rect1).toBeTruthy();
    // console.log(rect1);
    expect(rect1.x).toBe(101);
    expect(rect1.y).toBe(102);

    const svg = panel.draw();
    expect(svg.children.length).toBe(2);


});