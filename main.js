jack = "";
dra = "";
function preload(){
    jack = loadSound("Jack Harlow.mp3");
    dra = loadSound("Drake.mp3");
}
function setup(){
    canvas = createCanvas(400, 800);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();
}
function draw(){
    image(camera, 0, 0, 400, 400);
}