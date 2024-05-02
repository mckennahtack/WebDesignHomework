var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cty = c.getContext("2d");

// gold square
ctx.beginPath();
ctx.moveTo(200, 360);
ctx.lineTo(300, 500);
ctx.lineTo(100, 500);
ctx.closePath();
ctx.fillStyle = 'gold';
ctx.fill();
ctx.stroke();

// black tree 1
ctx.beginPath();
ctx.moveTo(50,0);
ctx.lineTo(150,0);
ctx.lineTo(150,500);
ctx.lineTo(50,500);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();

//black tree 2
ctx.beginPath();
ctx.moveTo(400,0);
ctx.lineTo(450,0);
ctx.lineTo(450,500);
ctx.lineTo(400,500);
ctx.fill();

//black tree 3
ctx.beginPath();
ctx.moveTo(300,0);
ctx.lineTo(320,0);
ctx.lineTo(320,300);
ctx.lineTo(300,300);
ctx.fill();

//black tree 4
ctx.beginPath();
ctx.moveTo(200,0);
ctx.lineTo(230,0);
ctx.lineTo(230,350);
ctx.lineTo(200,350);
ctx.fill();

//fill text
ctx.font = '30pt Serif';
ctx.strokeText('Can't Hurt Me', 100, 550);

//Author
ctx.font = '18pt Serif';
ctx.fillStyle = 'blue';
ctx.fillText('by David Goggins ', 200, 580);
