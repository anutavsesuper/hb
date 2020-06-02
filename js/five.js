function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
function setup() {
createCanvas(windowWidth, windowHeight);

one = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/img-hb/master/one.jpg');
two = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/img-hb/master/two.jpg');
three = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/img-hb/master/three.jpg');
four = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/img-hb/master/four.jpg');
five = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/img-hb/master/five.jpg');
six = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/img-hb/master/six.jpg');
seven = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/img-hb/master/seven.jpg');
eight = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/img-hb/master/eight.jpg');


x = width*0.8;
y = height*0.6;
w = 133;
h = 111;

x1 = width*0.5;
y1 = height*0.6;
w1 = 149;
h1 = 149;

x3 = width*0.1;
y3 = height*0.1;
w3 = 124;
h3 = 111;

x4 = width*0.2;
y4 = height*0.39;
w4 = 149;
h4 = 30;

x5 = width*0.7;
y5 = height*0.2;
w5 = 257;
h5 = 68;

x6 = width*0.1;
y6 = height*0.5;
w6 = 235;
h6 = 170;

x7 = width*0.45;
y7 = height*0.2;
w7 = 170;
h7 = 170;

x8 = width*0.35;
y8 = height*0.1;
w8 = 406;
h8 = 27;
}


function draw() {
noStroke()
// background(250, 205, 100);
let love = {
r: map(mouseY, 255, height, 255, 200),
g: map(mouseY, 221, height, 182, 200),
b: map(mouseY, 142, height, 180, 200),
}
background(love.r, love.g, love.b);

if (mouseX > x1 && mouseX < x1 + w1 && mouseY > y1 && mouseY < y1 + h1) {
rollover1 = true;
}
else {
rollover1 = false;
}
if (dragging1) {
x1 = mouseX + offsetX1;
y1 = mouseY + offsetY1;
}

image(one, x1, y1, w1, h1);


if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
rollover = true;
}
else {
rollover = false;
}
if (dragging) {
x = mouseX + offsetX;
y = mouseY + offsetY;
}

image(two, x, y, w, h);




if (mouseX > x3 && mouseX < x3 + w3 && mouseY > y3 && mouseY < y3 + h3) {
rollover3 = true;
}
else {
rollover3 = false;
}
if (dragging3) {
x3 = mouseX + offsetX3;
y3 = mouseY + offsetY3;
}

image(three, x3, y3, w3, h3);



if (mouseX > x4 && mouseX < x4 + w4 && mouseY > y4 && mouseY < y4 + h4) {
rollover4 = true;
}
else {
rollover4 = false;
}
if (dragging4) {
x4 = mouseX + offsetX4;
y4 = mouseY + offsetY4;
}

image(four, x4, y4, w4, h4);


if (mouseX > x5 && mouseX < x5 + w5 && mouseY > y5 && mouseY < y5 + h5) {
rollover5 = true;
}
else {
rollover5 = false;
}
if (dragging5) {
x5 = mouseX + offsetX5;
y5 = mouseY + offsetY5;
}

image(five, x5, y5, w5, h5);




if (mouseX > x6 && mouseX < x6 + w6 && mouseY > y6 && mouseY < y6 + h6) {
rollover6 = true;
}
else {
rollover6 = false;
}
if (dragging6) {
x6 = mouseX + offsetX6;
y6 = mouseY + offsetY6;
}

image(six, x6, y6, w6, h6);






if (mouseX > x7 && mouseX < x7 + w7 && mouseY > y7 && mouseY < y7 + h7) {
rollover7 = true;
}
else {
rollover7 = false;
}
if (dragging7) {
x7 = mouseX + offsetX7;
y7 = mouseY + offsetY7;
}

image(seven, x7, y7, w7, h7);




if (mouseX > x8 && mouseX < x8 + w8 && mouseY > y8 && mouseY < y8 + h8) {
rollover8 = true;
}
else {
rollover8 = false;
}
if (dragging8) {
x8 = mouseX + offsetX8;
y8 = mouseY + offsetY8;
}

image(eight, x8, y8, w8, h8);
}






var dragging = false;
var rollover = false;

var dragging1 = false;
var rollover1 = false;

var dragging3 = false;
var rollover3 = false;

var dragging4 = false;
var rollover4 = false;

var dragging5 = false;
var rollover5 = false;

var dragging6 = false;
var rollover6 = false;

var dragging7 = false;
var rollover7 = false;

var dragging8 = false;
var rollover8 = false;


//var x, y, w, h;
var offsetX, offsetY, offsetX1, offsetY1, offsetX3, offsetY3, offsetX4, offsetY4, offsetX5, offsetY5, offsetX6, offsetY6, offsetX7, offsetY7, offsetX8, offsetY8;






function mousePressed() {

if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
dragging = true;
offsetX = x-mouseX;
offsetY = y-mouseY;
}

if (mouseX > x1 && mouseX < x1 + w1 && mouseY > y1 && mouseY < y1 + h1) {
dragging1 = true;
offsetX1 = x1-mouseX;
offsetY1 = y1-mouseY;
}

if (mouseX > x3 && mouseX < x3 + w3 && mouseY > y3 && mouseY < y3 + h3) {
dragging3 = true;
offsetX3 = x3-mouseX;
offsetY3 = y3-mouseY;
}

if (mouseX > x4 && mouseX < x4 + w4 && mouseY > y4 && mouseY < y4 + h4) {
dragging4 = true;
offsetX4 = x4-mouseX;
offsetY4 = y4-mouseY;
}

if (mouseX > x5 && mouseX < x5 + w5 && mouseY > y5 && mouseY < y5 + h5) {
dragging5 = true;
offsetX5 = x5-mouseX;
offsetY5 = y5-mouseY;
}


      if (mouseX > x6 && mouseX < x6 + w6 && mouseY > y6 && mouseY < y6 + h6) {
dragging6 = true;
offsetX6 = x6-mouseX;
offsetY6 = y6-mouseY;
}

      if (mouseX > x7 && mouseX < x7 + w7 && mouseY > y7 && mouseY < y7 + h7) {
dragging7 = true;
offsetX7 = x7-mouseX;
offsetY7 = y7-mouseY;
}

      if (mouseX > x8 && mouseX < x8 + w8 && mouseY > y8 && mouseY < y8 + h8) {
dragging8 = true;
offsetX8 = x8-mouseX;
offsetY8 = y8-mouseY;
}
}

function mouseReleased() {
dragging1 = false;
dragging = false;
dragging3 = false;
dragging4 = false;
dragging5 = false;
dragging6 = false;
dragging7 = false;
dragging8 = false;
}
