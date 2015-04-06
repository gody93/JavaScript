var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
	ctx.font = '80px Arial';
    ctx.fillStyle = 'yellow';
    ctx.fillText('Hello World!', 50, 150);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "green";
    ctx.strokeText('Hello World!', 50, 150);