var htmlCanvas = "htmlCanvas";

var polygons = [];
var pol;

var lines = [];
var lin;

var num = 0;

var tooltips = [];

var tip;

function setup()
{
	createCanvas(900, 900);
	background(255);

	waterlinesData();

}

				
function draw()
{	
	clear();
	background(255);

	document.getElementById('btnOn').onclick = function()
	{	
		
		console.log("Button clicked");
		num = 1; 		
	}

	document.getElementById('btnOff').onclick = function()
	{
		num = 0;
		clear();
	}

	if(num == 1)
	{
		waterlines();	
	}
	
	

}

function waterlinesData()
{
	//PolyLines
	var line0 = [createVector(814, 805), createVector(814, 573), createVector(814, 0)];
	var line1 = [createVector(814, 573), createVector(804, 574), createVector(539, 593), createVector(30, 617), createVector(15, 617)];
	var line2 = [createVector(814, 446), createVector(520, 452), createVector(485, 452), createVector(12, 477), createVector(0, 477)];
	var line3 = [createVector(520, 155), createVector(652, 147), createVector(814, 151)];
	var line4 = [createVector(73, 327), createVector(488, 305), createVector(520, 310), createVector(814, 305)];

	lin = new PolyLine(line0);
	lines[0] = lin;

	lin = new PolyLine(line1);
	lines[1] = lin;

	lin = new PolyLine(line2);
	lines[2] = lin;

	lin = new PolyLine(line3);
	lines[3] = lin;

	lin = new PolyLine(line4);
	lines[4] = lin;

	//Polygons
	var polygon0 = [createVector(520, 573), createVector(529, 573), createVector(787, 561), createVector(804, 561), createVector(804, 452), createVector(784, 452), 
	createVector(520, 456), createVector(520, 573)];
	var polygon1 = [createVector(483, 780), createVector(475, 780), createVector(23, 763), createVector(15, 763), createVector(15, 754), createVector(15, 621), 
	createVector(28, 621), createVector(485, 604), createVector(485, 612), createVector(483, 780)];
	var polygon2 = [createVector(518, 599), createVector(517, 784), createVector(530, 784), createVector(787, 805), createVector(803, 805), createVector(803, 580), 
	createVector(784, 580), createVector(525, 599), createVector(518, 599)];
	var polygon3 = [createVector(484, 579), createVector(475, 579), createVector(24, 596), createVector(15, 596), createVector(15, 484), createVector(27, 484), 
	createVector(484, 460), createVector(484, 579)];
	var polygon4 = [createVector(12, 453), createVector(27, 453), createVector(57, 455), createVector(484, 432), createVector(484, 314), createVector(475, 314), 
	createVector(308, 322), createVector(73, 335), createVector(24, 368), createVector(12, 368), createVector(12, 453)];
	var polygon5 = [createVector(801, 421), createVector(783, 421), createVector(520, 427), createVector(520, 318), createVector(529, 318), createVector(788, 312), 
	createVector(801, 312), createVector(801, 421)];
	var polygon6 = [createVector(801, 280), createVector(801, 173), createVector(782, 173), createVector(652, 171), createVector(529, 180), createVector(520, 180), 
	createVector(520, 291), createVector(584, 291), createVector(665, 286), createVector(801, 280)];
	var polygon7 = [createVector(527, 145), createVector(526, 48), createVector(588, 18), createVector(602, 15), createVector(801, 9), createVector(801, 141), 
	createVector(610, 141), createVector(527, 145)];
	var polygon8 = [createVector(494, 101), createVector(488, 286), createVector(365, 289), createVector(131, 301), createVector(127, 301), createVector(147, 280), 
	createVector(487, 101), createVector(494, 101)];

	pol = new Polygon(polygon0);
	polygons[0] = pol;

	pol = new Polygon(polygon1);
	polygons[1] = pol;

	pol = new Polygon(polygon2);
	polygons[2] = pol;

	pol = new Polygon(polygon3);
	polygons[3] = pol;

	pol = new Polygon(polygon4);
	polygons[4] = pol;

	pol = new Polygon(polygon5);
	polygons[5] = pol;

	pol = new Polygon(polygon6);
	polygons[6] = pol;

	pol = new Polygon(polygon7);
	polygons[7] = pol;

	pol = new Polygon(polygon8);
	polygons[8] = pol;
}

function waterlines()
{
	var i=0;
	clear();

	//PolyLines
	for(i=0; i<5; i++)
	{
		var j=0;
		for(j=0; j<lines[i].array_of_vectors.length; j++)
		{
			if(collidePointLine(mouseX,mouseY,200, 300, lines[i].array_of_vectors[j].x, lines[i].array_of_vectors[j].y, 1) == true)
			{
				console.log("Line Collision.");
				lines[i].color(150);
			}
			else
			{
				lines[i].color(0);
			}
		}	
	}

	//Polygons
	i=0;
	for(i=0; i<9; i++)
	{
		if(collidePointPoly(mouseX, mouseY, polygons[i].array_of_vectors) == true)
		{
			console.log("Polygon Collision.");
			polygons[i].color(55);

			tip = new Tooltip("Hi", mouseX, mouseY, 100, 40);
			tip.show();
		}
		else
		{
			polygons[i].color(135);
		}
	}
}

function Polygon(array_of_vectors)
{
	this.array_of_vectors = array_of_vectors;
	this.col = 135;

	fill(this.col);
	beginShape();
	var i = 0;
	for(i=0; i<this.array_of_vectors.length; i++)
	{
		vertex(array_of_vectors[i].x, array_of_vectors[i].y);
	}
	endShape();

	this.color = function(c)
	{
		//clear();
		this.col = c;
		fill(this.col);
		beginShape();
		var i = 0;
		for(i=0; i<this.array_of_vectors.length; i++)
		{
			vertex(this.array_of_vectors[i].x, this.array_of_vectors[i].y);
		}
		endShape();
	};
}

function PolyLine(array_of_vectors)
{
	this.array_of_vectors = array_of_vectors;
	this.col = 0;

	stroke(this.col);
	strokeWeight(2);

	var i=0;
	for(i=0; i<this.array_of_vectors.length - 1; i++)
	{
		line(this.array_of_vectors[i].x, this.array_of_vectors[i].y, this.array_of_vectors[i+1].x, this.array_of_vectors[i+1].y);
	}
	
	this.color = function(c)
	{
		this.col = c;
		stroke(this.col);
		strokeWeight(2);

		var i=0;
		for(i=0; i<this.array_of_vectors.length - 1; i++)
		{
			line(this.array_of_vectors[i].x, this.array_of_vectors[i].y, this.array_of_vectors[i+1].x, this.array_of_vectors[i+1].y);
		}
	};
}

function Tooltip(title, startX, startY, width, height)
{
	this.title = title;
	this.startX = startX;
	this.startY = startY;
	this.width = width;
	this.height = height;

	this.show = function()
	{
		fill(255, 0, 0);
		rect(this.startX, this.startY, this.width, this.height);
		fill(255);
		textSize(15);
		text(this.title, this.startX+20, this.startY+20);
	};

	this.hide = function()
	{
		clear();
	};
}