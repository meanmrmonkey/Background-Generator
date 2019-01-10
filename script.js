var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");
var rgb = [];
var rgbTwo =[];

function colorRandom(){
	rgb.length = 0;
	rgbTwo.length = 0;
	for (i=0; i < 3; i++){
		var x = Math.floor((Math.random() * 255) + 1);
		rgb.push(x); 
	}
	for (i=0; i < 3; i++){
		var x = Math.floor((Math.random() * 255) + 1);
		rgbTwo.push(x); 
	}
	var rgbString = rgb.toString();
	var rgbTwoString = rgbTwo.toString();
	body.style.background = "linear-gradient(to right, rgb(" + rgbString + "), rgb(" + rgbTwoString + ")";
	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

setGradient();

random.addEventListener("click", colorRandom);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);