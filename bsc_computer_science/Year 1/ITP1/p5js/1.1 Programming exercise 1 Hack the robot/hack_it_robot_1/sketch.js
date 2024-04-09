function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(6);

	//robots head
	fill(240, 190, 240);
	rect(100, 100, 300, 300, 20);


	//robots antenna
	fill(210, 150, 240);
	ellipse(250, 70, 60, 60);

	fill(200, 0, 200);
	rect(210, 80, 80, 30);

	//robots eyes
	fill(255, 255, 170);
	ellipse(175, 200, 80, 80);
	rect(150, 200, 50, 1);
	rect(175, 175, 1, 50);
	ellipse(325, 200, 80, 80);
	rect(300, 200, 50, 1);
	rect(325, 175, 1, 50);


	//robots nose
	fill(235, 100, 200);
	triangle(255, 220, 240, 300, 300, 320);

	//robots ears
	rect(80, 180, 30, 100);
	rect(390, 180, 30, 100);

	//robots mouth
	noFill();
	beginShape();
	vertex(175, 340);
	vertex(200, 370);
	vertex(225, 340);
	vertex(250, 370);
	vertex(275, 340);
	vertex(300, 370);
	vertex(325, 340);
	endShape();
}