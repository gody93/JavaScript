var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var centerX = 0;
var centerY = 0;
var radius = 50;


function rectangle (x,y,width, height,filCol,strCol) {
	context.beginPath();
	context.rect(x,y,width,height);
	context.fillStyle = filCol;
	context.fill();
	context.strokeStyle = strCol;
	context.lineWidth = "4";
	context.stroke();
}

function draw (rot, cwidth, cheight, s1, s2, lh,filCol,strCol,cut) {
	context.save();
	context.rotate(rot * Math.PI / 180);
	context.translate(canvas.width / cwidth, canvas.height / cheight);
	context.scale(s1, s2);
	context.beginPath();
	context.arc(centerX, centerY, radius, 0, cut * Math.PI, false);
	context.restore();
	context.fillStyle = filCol;
	context.fill();
	context.lineWidth = lh;
	context.strokeStyle = strCol;
	context.stroke();
}

function triangle () {
	context.beginPath();
    context.moveTo(310,70);
    context.lineTo(530,297);
    context.lineTo(79,297);
    context.fillStyle = "brown";
    context.fill();
    context.strokeStyle = "black";
    context.lineWidth = "3";
    context.stroke();
}

function chimney (x,y,x1,y1,x2,y2,x3,y3,x4,y4) {
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x1,y1);
	context.lineTo(x2,y2);
	context.lineTo(x3,y3);
	context.lineTo(x4,y4);
	context.closePath();
	context.fillStyle = "brown";
	context.fill();
	context.strokeStyle = "black";
	context.stroke();
}

// house 

rectangle(80, 300, 450, 300,"brown","black");

//right windows

rectangle(335, 330, 80, 50, "black", "black");
rectangle(420, 330, 80, 50, "black", "black");
rectangle(335, 385, 80, 50, "black", "black");
rectangle(420, 385, 80, 50, "black", "black");

//left windows

rectangle(125, 330, 80, 50, "black", "black");
rectangle(210, 330, 80, 50, "black", "black");
rectangle(125, 385, 80, 50, "black", "black");
rectangle(210, 385, 80, 50, "black", "black");

// bottom windows

rectangle(335, 460, 80, 50, "black", "black");
rectangle(420, 460, 80, 50, "black", "black");
rectangle(335, 515, 80, 50, "black", "black");
rectangle(420, 515, 80, 50, "black", "black");

// roof
triangle();


//chimney
chimney(446,123,445,123,445,250,412,250,412,123);
draw(0, 1.4, 4.9, 0.3, 0.09, 2,"brown","black",2);

// door curve
context.beginPath();
context.arc(220, 510, 70, 1 * Math.PI, 2 * Math.PI, false);
context.lineWidth = 5;
context.strokeStyle = 'black';
context.stroke();

//door handle
function handles (x, y) {
	context.beginPath();
	context.arc(x, y, 8, 0, 2 * Math.PI, false);
	context.lineWidth = 5;
	context.strokeStyle = 'black';
	context.stroke();
}

handles(200, 560);
handles(237, 560);

// door lines
function doorlines (x, my, x, ly) {
	context.beginPath();
	context.moveTo(x, my);
	context.lineTo(x, ly);
	context.stroke();
}

doorlines(150.1, 500, 150.1, 615);
doorlines(219.1, 440, 219.1, 615);
doorlines(289.9, 500, 289.9, 615);
