
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var centerX = 0;
var centerY = 0;
var radius = 50;

function rectangle (x,y,width, height) {
	context.beginPath();
	context.rect(x,y,width,height);
	context.fillStyle = '#396693';
	context.fill();
	context.strokeStyle = "black";
	context.lineWidth = "2";
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
function line (posX,lX,posY,lY) {
	context.beginPath();
	context.moveTo(posX, posY);
	context.lineTo(lX, lY);
	context.stroke();
}	



//face
draw(0, 2, 1.5, 2.5, 2, 2,"#90cad7","black",2);
//nose

line(202, 220, 350, 310);
line(202, 220, 350, 350)

//cylinder middle
rectangle(160, 100, 180, 140)

//cylinder top 
draw(0, 2, 5, 1.8, 0.5, 2,'#396693',"black",2);

//hat bottom
draw(0, 2, 2, 3, 0.5, 2,'#396693',"black",2);

//cylinder bottom
draw(0, 2, 2.2, 1.8, 0.5, 2,'#396693',"black",1);

//left eye
draw(0, 2.8, 1.6, 0.5, 0.3, 2,"#90cad7","black",2);

//left pupil
draw(0, 2.9, 1.6, 0.1, 0.2, 2,"black","black",2);

// right eye
draw(0, 1.85, 1.6, 0.5, 0.3, 2,"#90cad7","black",2);

//right pupil
draw(0, 1.9, 1.6, 0.1, 0.2, 2,"black","black",2)

//mouth
draw(11, 1.7, 1.5, 1, 0.3, 2,"#90cad7","black",2);

