//polygon
var array_polygons_plotprofile = [];
var pointer_polygons_plotprofile = null;

//polyline
var array_polylines_plotprofile = [];
var pointer_polylines_plotprofile = null;

//line
var array_lines_plotprofile = [];
var pointer_lines_plotprofile = null;



//Tooltip
var tip = null;

function plotprofileData()
{
	//polyline
	var polyline0 = [createVector(815, 805), createVector(815, 573), createVector(815, 0)];
	pointer_polylines_plotprofile = new PolyLine(polyline0);
	array_polylines_plotprofile[0] = pointer_polylines_plotprofile;

	var polyline1 = [createVector(815, 573), createVector(805, 574), createVector(541, 593), createVector(32, 617), createVector(17, 617)];
	pointer_polylines_plotprofile = new PolyLine(polyline1);
	array_polylines_plotprofile[1] = pointer_polylines_plotprofile;

	var polyline2 = [createVector(815, 446), createVector(521, 452), createVector(487, 452), createVector(14, 477), createVector(1, 477)];
	pointer_polylines_plotprofile = new PolyLine(polyline2);
	array_polylines_plotprofile[2] = pointer_polylines_plotprofile;

	var polyline3 = [createVector(815, 307), createVector(521, 312), createVector(486, 307), createVector(70, 330), createVector(14, 361), createVector(1, 361)];
	pointer_polylines_plotprofile = new PolyLine(polyline3);
	array_polylines_plotprofile[3] = pointer_polylines_plotprofile;

	var polyline4 = [createVector(521, 171), createVector(654, 163), createVector(815, 167)];
	pointer_polylines_plotprofile = new PolyLine(polyline4);
	array_polylines_plotprofile[4] = pointer_polylines_plotprofile;

	//polygon
	var polygon0 = [createVector(521, 573), createVector(530, 573), createVector(789, 561), createVector(805, 561), createVector(805, 452), createVector(785, 452), createVector(521, 456), createVector(521, 573)];
	pointer_polygons_plotprofile = new Polygon(polygon0, "stroke");
	array_polygons_plotprofile[0] = pointer_polygons_plotprofile;

	var polygon1 = [createVector(485, 780), createVector(476, 780), createVector(24, 763), createVector(17, 763), createVector(17, 754), createVector(17, 621), createVector(29, 621), createVector(487, 604), createVector(487, 612), createVector(485, 780)];
	pointer_polygons_plotprofile = new Polygon(polygon1, "stroke");
	array_polygons_plotprofile[1] = pointer_polygons_plotprofile;

	var polygon2 = [createVector(520, 599), createVector(519, 784), createVector(531, 784), createVector(789, 805), createVector(804, 805), createVector(804, 580), createVector(785, 580), createVector(526, 599), createVector(520, 599)];
	pointer_polygons_plotprofile = new Polygon(polygon2, "stroke");
	array_polygons_plotprofile[2] = pointer_polygons_plotprofile;

	var polygon3 = [createVector(486, 579), createVector(477, 579), createVector(25, 596), createVector(17, 596), createVector(17, 484), createVector(29, 484), createVector(486, 460), createVector(486, 579)];
	pointer_polygons_plotprofile = new Polygon(polygon3, "stroke");
	array_polygons_plotprofile[3] = pointer_polygons_plotprofile;

	var polygon4 = [createVector(14, 453), createVector(29, 453), createVector(59, 455), createVector(485, 432), createVector(485, 314), createVector(476, 314), createVector(309, 322), createVector(75, 335), createVector(26, 368), createVector(14, 368), createVector(14, 453)];
	pointer_polygons_plotprofile = new Polygon(polygon4, "stroke");
	array_polygons_plotprofile[4] = pointer_polygons_plotprofile;

	var polygon5 = [createVector(802, 421), createVector(785, 421), createVector(522, 427), createVector(521, 318), createVector(530, 318), createVector(790, 312), createVector(802, 312), createVector(802, 421)];
	pointer_polygons_plotprofile = new Polygon(polygon5, "stroke");
	array_polygons_plotprofile[5] = pointer_polygons_plotprofile;

	var polygon6 = [createVector(802, 280), createVector(802, 173), createVector(783, 173), createVector(654, 171), createVector(531, 180), createVector(521, 180), createVector(521, 291), createVector(585, 291), createVector(666, 286), createVector(802, 280)];
	pointer_polygons_plotprofile = new Polygon(polygon6, "stroke");
	array_polygons_plotprofile[6] = pointer_polygons_plotprofile;

	var polygon7 = [createVector(528, 145), createVector(528, 48), createVector(589, 18), createVector(603, 15), createVector(803, 9), createVector(803, 141), createVector(611, 141), createVector(528, 145)];
	pointer_polygons_plotprofile = new Polygon(polygon7, "stroke");
	array_polygons_plotprofile[7] = pointer_polygons_plotprofile;

	var polygon8 = [createVector(496, 101), createVector(490, 286), createVector(367, 289), createVector(132, 301), createVector(129, 301), createVector(149, 280), createVector(488, 101), createVector(496, 101)];
	pointer_polygons_plotprofile = new Polygon(polygon8, "stroke");
	array_polygons_plotprofile[8] = pointer_polygons_plotprofile;

}

function plotprofile()
{
	clear();
	var i = 0;

	//polyline
	for(i=0; i<5; i++)
	{
		var j=0;
		for(j=0; j<array_polylines_plotprofile[i].array_of_vectors.length - 1; j++)
		{
			if(collidePointLine(mouseX, mouseY, array_polylines_plotprofile[i].array_of_vectors[j].x, array_polylines_plotprofile[i].array_of_vectors[j].y, array_polylines_plotprofile[i].array_of_vectors[j+1].x, array_polylines_plotprofile[i].array_of_vectors[j+1].y, 1) == true)
			{
				array_polylines_plotprofile[i].color(0, 0, 0, 255);
				tip = new Tooltip("polyline" + i, mouseX, mouseY, 100, 40);
				tip.show();
			}
			else
			{
				array_polylines_plotprofile[i].color(0, 0, 0, 255);
			}
		}
	}

	//polygon
	for(i=0; i<9; i++)
	{
		if(collidePointPoly(mouseX, mouseY, array_polygons_plotprofile[i].array_of_vectors) == true)
		{
			array_polygons_plotprofile[i].color(0, 0, 0, 255);
			tip = new Tooltip("polygon" + i, mouseX, mouseY, 100, 40);
			tip.show();
		}
		else
		{
			array_polygons_plotprofile[i].color(0, 0, 0, 255);
		}
	}
}

