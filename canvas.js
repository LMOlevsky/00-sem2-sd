var c = document.getElementById("slate");
var ctx = c.getContext('2d');
var shape;

shape = "rectangle";

ctx.fillStyle = "red";

var clearScreen = function(){
    ctx.clearRect(0,0,c.width,c.height)
}

var toggleShape = function(){
    if (shape == "circle"){
	shape = "rectangle"
    }
    else if (shape == "rectangle"){
	shape = "circle"
    }
}

var makeShape = function(e){
    var rect = c.getBoundingClientRect()
    if (shape == "rectangle"){
	ctx.fillRect(e.clientX - rect.left, e.clientY - rect.top, 50, 50)
    }
    else if (shape == "circle"){
	ctx.beginPath();
	ctx.arc(e.clientX - rect.left, e.clientY - rect.top, 25, 0, 2*Math.PI);
	ctx.fill();
    }
}

clear.addEventListener('click', clearScreen);
toggle.addEventListener('click', toggleShape);
c.addEventListener('click', makeShape);

