var c = document.getElementById("slate");
var ctx = c.getContext('2d');
var shape;
var cleared;

shape = "rectangle";

ctx.fillStyle = "red";

var clearScreen = function(){
    ctx.beginPath();
    ctx.clearRect(0,0,c.width,c.height)
    clear = true;
}

var toggleShape = function(){
    ctx.beginPath();
    if (shape == "circle"){
	shape = "rectangle"
    }
    else if (shape == "rectangle"){
	shape = "circle"
    }
}

var makeShape = function(e){
    if (shape == "rectangle"){
	ctx.fillRect(e.offsetX, e.offsetY, 20, 20)
	ctx.lineTo(e.offsetX, e.offsetY);
    }
    else if (shape == "circle"){
	ctx.arc(e.offsetX, e.offsetY, 15, 0, 2*Math.PI);
	ctx.fill();
	ctx.closePath();
	ctx.moveTo(e.offsetX, e.offsetY);
	ctx.lineTo(e.offsetX, e.offsetY);
    }
    ctx.stroke();
}

var makeLine = function(e){
    beginPath()
}

clear.addEventListener('click', clearScreen);
toggle.addEventListener('click', toggleShape);
c.addEventListener('click', makeShape);
