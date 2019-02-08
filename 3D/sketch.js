let tx, ty, tz, gap, rows, cols, depths;
let w3D, h3D, d3D;


function setup() {
	createCanvas(windowWidth,windowHeight,WEBGL);
	camera();
//	ortho();
	
	let cube = 80;
	
	tx = cube;
	ty = cube;
	tz = cube;
	
	gap = 70;
	
	rows = 3;
	cols = 3;
	depths = 3;
	
	theta = 0;
	
	w3D = tx * (cols-1);
	h3D = ty * (rows-1);
	d3D = tz * (depths-1);
	
}

function draw() {
	
	background(0);
	
	// Helpers
	stroke(240,20);
	line(-width/2,0,0,width/2,0,0);
	line(0,-height/2,0,0,height/2,0);
	
	// control with Mouse ou paddle : click ans drag
	orbitControl();
	
//	camera(0, 0, (height/2.0) / tan(PI*30.0 / 180.0), 0, 0, 0, 0, 1, 0);
//	camera(0, 0, 90 , 0, 0, 0, 0, 1, 0);
	camera(0, 0, 700 , 0, 0, 0, 0, 1, 0);
	
	
//	console.log((height/2.0) / tan(PI*30.0 / 180.0));
	
	rotateZ(theta); //OK
	rotateY(theta); //OK
	rotateX(theta); //OK
	
	
	
	translate(-w3D/2,-h3D/2, d3D/2);
	
	fill(255);
//	fill(200,200,200,200);
	noStroke();
//	stroke(255,70);
	directionalLight(255, 53, 243, width, -height, 0.05);
	directionalLight(255, 219, 78, -width, height, 0.05);
	directionalLight(28, 178, 161, -width, -height, 0.05);
	directionalLight(178, 19, 169, width, height, 0.05);
	
	for(let i=0;i<cols;i++){
		
		push();
		
		translate(tx*i,0,0);
		
		for(let j=0;j<rows;j++){
			push();
			translate(0,ty*j,0);
			
			for(let k=0;k<depths;k++){

				push();
				translate(0,0,(tz*k)-d3D);
				
				// rotation inverse : the center is always in front of you
//				rotateX(-theta);
//				rotateY(-theta);
//				rotateZ(-theta);
				
				//Test materials 
//				normalMaterial();
//				ambientMaterial(250);
				
				specularMaterial(250);
				box(tx-gap,ty-gap,tz-gap);
				
				pop();
			}
			
			pop();
		}
		pop();
	}
	
	theta += 0.01;
	
}

//function keyPressed(){
//	if (keyCode === LEFT_ARROW){
//		return false;
//	}
//}
