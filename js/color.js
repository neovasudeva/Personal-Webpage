// starting color
let col = 0xff0000;

// effect
let effect = VANTA.NET({
    el: "#home",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x4d4d4d,
    backgroundColor: 0x0,
    points: 8.00,
    maxDistance: 22.00,
    spacing: 20.00
})

// function to update RGB vals of effect
let stage = 1;
function updateColor() {
    // red
    if (stage == 1) {
    col += 0x000100;
    if (col == 0xffff00) 
        stage = 2;
    } 
    
    // yellow
    else if (stage == 2) {
    col -= 0x010000;
    if (col == 0x00ff00)
        stage = 3;
    } 
    
    // green
    else if (stage == 3) {
    col += 0x000001;
    if (col == 0x00ffff)
        stage = 4;
    } 
    
    // cyan
    else if (stage == 4) {
    col -= 0x000100;
    if (col == 0x0000ff)
        stage = 5;
    } 
    
    // blue  
    else if (stage == 5) {
    col += 0x010000;
    if (col == 0xff00ff)
        stage = 6;
    } 
    
    // magenta
    else if (stage == 6) {
    col -= 0x000001;
    if (col == 0xff0000)
        stage = 1;
    }

    // update color
    effect.setOptions({
    color: col
    })
};

// Update color through RGB color wheel
setInterval(updateColor, 25);