let canvas = document.getElementById("sandbox"), context = canvas.getContext("2d");
let square, circle;

//context.fillRect(50,25,200,250);
square = new Path2D();
square.moveTo(50,50);
square.lineTo(250,50);
square.lineTo(250,250);
square.lineTo(50,250);
square.lineTo(50,50);
context.stroke(square);

circle = new Path2D();
circle.arc(150,150,100,0, 2*Math.PI);
context.stroke(circle);