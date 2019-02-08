//matrice X par X (carré)

let rows , cols , r;
let posx, posy;
function setup(){
	createCanvas(800,600);
	rows = 30;
	cols = 30;
	r = 5;
	x = 0;
	y = 0;
//	posx = 0;
//	posy = 0 ;
	background(0);
	fill(255);
	for (let i=0;i<rows*cols;i++){
		posx = x + (i % cols) * r; 
		posy = y + (floor(i/rows))*r;
		ellipse(posx,posy,r,r);
	}
}
function draw(){
	
}
