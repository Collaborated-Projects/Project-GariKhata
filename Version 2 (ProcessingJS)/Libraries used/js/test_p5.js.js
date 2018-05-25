//Polygons
var array_polygons_waterlines = [];
var pointer_polygons_waterlines = null;

//PolyLine
var array_lines_waterlines = [];
var pointer_lines_waterlines = null;

//Tooltip
var tip = null;

function waterlinesData()
{
	//PolyLines
	var line0 = [createVector(814, 805), createVector(814, 573), createVector(814, 0)];
	var line1 = [createVector(814, 573), createVector(804, 574), createVector(539, 593), createVector(30, 617), createVector(15, 617)];
	var line2 = [createVector(814, 446), createVector(520, 452), createVector(485, 452), createVector(12, 477), createVector(0, 477)];
	var line3 = [createVector(520, 155), createVector(652, 147), createVector(814, 151)];
	var line4 = [createVector(73, 327), createVector(488, 305), createVector(520, 310), createVector(814, 305)];

	pointer_lines_waterlines = new PolyLine(line0);
	array_lines_waterlines[0] = pointer_lines_waterlines;

	pointer_lines_waterlines = new PolyLine(line1);
	array_lines_waterlines[1] = pointer_lines_waterlines;

	pointer_lines_waterlines = new PolyLine(line2);
	array_lines_waterlines[2] = pointer_lines_waterlines;

	pointer_lines_waterlines = new PolyLine(line3);
	array_lines_waterlines[3] = pointer_lines_waterlines;

	pointer_lines_waterlines = new PolyLine(line4);
	array_lines_waterlines[4] = pointer_lines_waterlines;

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

	pointer_polygons_waterlines = new Polygon(polygon0);
	array_polygons_waterlines[0] = pointer_polygons_waterlines;

	pointer_polygons_waterlines = new Polygon(polygon1);
	array_polygons_waterlines[1] = pointer_polygons_waterlines;

	pointer_polygons_waterlines = new Polygon(polygon2);
	array_polygons_waterlines[2] = pointer_polygons_waterlines;

	pointer_polygons_waterlines = new Polygon(polygon3);
	array_polygons_waterlines[3] = pointer_polygons_waterlines;

	pointer_polygons_waterlines = new Polygon(polygon4);
	array_polygons_waterlines[4] = pointer_polygons_waterlines;

	pointer_polygons_waterlines = new Polygon(polygon5);
	array_polygons_waterlines[5] = pointer_polygons_waterlines;

	pointer_polygons_waterlines = new Polygon(polygon6);
	array_polygons_waterlines[6] = pointer_polygons_waterlines;

	pointer_polygons_waterlines = new Polygon(polygon7);
	array_polygons_waterlines[7] = pointer_polygons_waterlines;

	pointer_polygons_waterlines = new Polygon(polygon8);
	array_polygons_waterlines[8] = pointer_polygons_waterlines;
}

function waterlines()
{
	var i=0;
	clear();

	//PolyLines
	for(i=0; i<5; i++)
	{
		var j=0;
		for(j=0; j<array_lines_waterlines[i].array_of_vectors.length - 1; j++)
		{
			if(collidePointLine(mouseX,mouseY, array_lines_waterlines[i].array_of_vectors[j].x, array_lines_waterlines[i].array_of_vectors[j].y, array_lines_waterlines[i].array_of_vectors[j+1].x, array_lines_waterlines[i].array_of_vectors[j+1].y, 1) == true)
			{
				console.log("Line Collision.");
				array_lines_waterlines[i].color(150);
			}
			else
			{
				array_lines_waterlines[i].color(0);
			}
		}	
	}

	//Polygons
	i=0;
	for(i=0; i<9; i++)
	{
		if(collidePointPoly(mouseX, mouseY, array_polygons_waterlines[i].array_of_vectors) == true)
		{
			console.log("Polygon Collision.");
			array_polygons_waterlines[i].color(55);

			tip = new Tooltip("Polygon" + i, mouseX, mouseY, 100, 40);
			tip.show();
		}
		else
		{
			array_polygons_waterlines[i].color(135);
		}
	}
}

