function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{

	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	rect(100, 50, 600, 600);

	strokeWeight(32);
	//black lines on left side
	rect(0, 350, 100, 0);

	strokeWeight(12);

	//black lines for blue square top side 
	rect(0, 648, 90, 2);
	rect(99, 662, 1, 140);

	//blue square
	fill(0, 90, 170);
	strokeWeight(0);

	rect(0, 656, 93, 170);

	//black lines for yellow side
	fill(255, 255, 0);
	strokeWeight(12);

	rect(620, 662, 1, 140);

	//thicker line top yellow
	strokeWeight(24);
	rect(620, 725, 85, 0);

	//yellow square
	fill(240, 220, 100);
	strokeWeight(0);
	rect(627, 737, 78, 100);
}