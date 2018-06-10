//polygon
var array_polygons_test = [];
var pointer_polygons_test = null;

//polyline
var array_polylines_test = [];
var pointer_polylines_test = null;

//circle
var array_circles_test = [];
var pointer_circles_test = null;



//Tooltip
var tip = null;

function testData()
{
	//circle
	var circle0 = createVector(790, 149);
	pointer_circles_test = new Circle(circle0, 3, "stroke");
	array_circles_test[0] = pointer_circles_test;

	var circle1 = createVector(725, 149);
	pointer_circles_test = new Circle(circle1, 3, "stroke");
	array_circles_test[1] = pointer_circles_test;

	var circle2 = createVector(675, 148);
	pointer_circles_test = new Circle(circle2, 3, "stroke");
	array_circles_test[2] = pointer_circles_test;

	var circle3 = createVector(641, 147);
	pointer_circles_test = new Circle(circle3, 3, "stroke");
	array_circles_test[3] = pointer_circles_test;

	var circle4 = createVector(557, 151);
	pointer_circles_test = new Circle(circle4, 3, "stroke");
	array_circles_test[4] = pointer_circles_test;

	var circle5 = createVector(515, 154);
	pointer_circles_test = new Circle(circle5, 3, "stroke");
	array_circles_test[5] = pointer_circles_test;

	var circle6 = createVector(496, 102);
	pointer_circles_test = new Circle(circle6, 3, "stroke");
	array_circles_test[6] = pointer_circles_test;

	var circle7 = createVector(495, 141);
	pointer_circles_test = new Circle(circle7, 3, "stroke");
	array_circles_test[7] = pointer_circles_test;

	var circle8 = createVector(494, 156);
	pointer_circles_test = new Circle(circle8, 3, "stroke");
	array_circles_test[8] = pointer_circles_test;

	var circle9 = createVector(493, 180);
	pointer_circles_test = new Circle(circle9, 3, "stroke");
	array_circles_test[9] = pointer_circles_test;

	var circle10 = createVector(490, 238);
	pointer_circles_test = new Circle(circle10, 3, "stroke");
	array_circles_test[10] = pointer_circles_test;

	var circle11 = createVector(488, 301);
	pointer_circles_test = new Circle(circle11, 3, "stroke");
	array_circles_test[11] = pointer_circles_test;

	var circle12 = createVector(526, 296);
	pointer_circles_test = new Circle(circle12, 3, "stroke");
	array_circles_test[12] = pointer_circles_test;

	var circle13 = createVector(611, 294);
	pointer_circles_test = new Circle(circle13, 3, "stroke");
	array_circles_test[13] = pointer_circles_test;

	var circle14 = createVector(591, 296);
	pointer_circles_test = new Circle(circle14, 3, "stroke");
	array_circles_test[14] = pointer_circles_test;

	var circle15 = createVector(678, 291);
	pointer_circles_test = new Circle(circle15, 3, "stroke");
	array_circles_test[15] = pointer_circles_test;

	var circle16 = createVector(753, 288);
	pointer_circles_test = new Circle(circle16, 3, "stroke");
	array_circles_test[16] = pointer_circles_test;

	var circle17 = createVector(789, 286);
	pointer_circles_test = new Circle(circle17, 3, "stroke");
	array_circles_test[17] = pointer_circles_test;

	var circle18 = createVector(393, 294);
	pointer_circles_test = new Circle(circle18, 3, "stroke");
	array_circles_test[18] = pointer_circles_test;

	var circle19 = createVector(343, 297);
	pointer_circles_test = new Circle(circle19, 3, "stroke");
	array_circles_test[19] = pointer_circles_test;

	var circle20 = createVector(263, 300);
	pointer_circles_test = new Circle(circle20, 3, "stroke");
	array_circles_test[20] = pointer_circles_test;

	var circle21 = createVector(180, 304);
	pointer_circles_test = new Circle(circle21, 3, "stroke");
	array_circles_test[21] = pointer_circles_test;

	var circle22 = createVector(90, 306);
	pointer_circles_test = new Circle(circle22, 3, "stroke");
	array_circles_test[22] = pointer_circles_test;

	var circle23 = createVector(791, 446);
	pointer_circles_test = new Circle(circle23, 3, "stroke");
	array_circles_test[23] = pointer_circles_test;

	var circle24 = createVector(732, 446);
	pointer_circles_test = new Circle(circle24, 3, "stroke");
	array_circles_test[24] = pointer_circles_test;

	var circle25 = createVector(661, 448);
	pointer_circles_test = new Circle(circle25, 3, "stroke");
	array_circles_test[25] = pointer_circles_test;

	var circle26 = createVector(621, 448);
	pointer_circles_test = new Circle(circle26, 3, "stroke");
	array_circles_test[26] = pointer_circles_test;

	var circle27 = createVector(569, 448);
	pointer_circles_test = new Circle(circle27, 3, "stroke");
	array_circles_test[27] = pointer_circles_test;

	var circle28 = createVector(508, 448);
	pointer_circles_test = new Circle(circle28, 3, "stroke");
	array_circles_test[28] = pointer_circles_test;

	var circle29 = createVector(488, 444);
	pointer_circles_test = new Circle(circle29, 3, "stroke");
	array_circles_test[29] = pointer_circles_test;

	var circle30 = createVector(489, 375);
	pointer_circles_test = new Circle(circle30, 3, "stroke");
	array_circles_test[30] = pointer_circles_test;

	var circle31 = createVector(472, 455);
	pointer_circles_test = new Circle(circle31, 3, "stroke");
	array_circles_test[31] = pointer_circles_test;

	var circle32 = createVector(414, 457);
	pointer_circles_test = new Circle(circle32, 3, "stroke");
	array_circles_test[32] = pointer_circles_test;

	var circle33 = createVector(367, 460);
	pointer_circles_test = new Circle(circle33, 3, "stroke");
	array_circles_test[33] = pointer_circles_test;

	var circle34 = createVector(325, 462);
	pointer_circles_test = new Circle(circle34, 3, "stroke");
	array_circles_test[34] = pointer_circles_test;

	var circle35 = createVector(262, 466);
	pointer_circles_test = new Circle(circle35, 3, "stroke");
	array_circles_test[35] = pointer_circles_test;

	var circle36 = createVector(169, 471);
	pointer_circles_test = new Circle(circle36, 3, "stroke");
	array_circles_test[36] = pointer_circles_test;

	var circle37 = createVector(120, 474);
	pointer_circles_test = new Circle(circle37, 3, "stroke");
	array_circles_test[37] = pointer_circles_test;

	var circle38 = createVector(101, 459);
	pointer_circles_test = new Circle(circle38, 3, "stroke");
	array_circles_test[38] = pointer_circles_test;

	var circle39 = createVector(46, 462);
	pointer_circles_test = new Circle(circle39, 3, "stroke");
	array_circles_test[39] = pointer_circles_test;

	var circle40 = createVector(728, 577);
	pointer_circles_test = new Circle(circle40, 3, "stroke");
	array_circles_test[40] = pointer_circles_test;

	var circle41 = createVector(685, 581);
	pointer_circles_test = new Circle(circle41, 3, "stroke");
	array_circles_test[41] = pointer_circles_test;

	var circle42 = createVector(567, 588);
	pointer_circles_test = new Circle(circle42, 3, "stroke");
	array_circles_test[42] = pointer_circles_test;

	var circle43 = createVector(489, 588);
	pointer_circles_test = new Circle(circle43, 3, "stroke");
	array_circles_test[43] = pointer_circles_test;

	var circle44 = createVector(489, 527);
	pointer_circles_test = new Circle(circle44, 3, "stroke");
	array_circles_test[44] = pointer_circles_test;

	var circle45 = createVector(472, 598);
	pointer_circles_test = new Circle(circle45, 3, "stroke");
	array_circles_test[45] = pointer_circles_test;

	var circle46 = createVector(415, 602);
	pointer_circles_test = new Circle(circle46, 3, "stroke");
	array_circles_test[46] = pointer_circles_test;

	var circle47 = createVector(367, 604);
	pointer_circles_test = new Circle(circle47, 3, "stroke");
	array_circles_test[47] = pointer_circles_test;

	var circle48 = createVector(338, 588);
	pointer_circles_test = new Circle(circle48, 3, "stroke");
	array_circles_test[48] = pointer_circles_test;

	var circle49 = createVector(308, 605);
	pointer_circles_test = new Circle(circle49, 3, "stroke");
	array_circles_test[49] = pointer_circles_test;

	var circle50 = createVector(252, 605);
	pointer_circles_test = new Circle(circle50, 3, "stroke");
	array_circles_test[50] = pointer_circles_test;

	var circle51 = createVector(213, 594);
	pointer_circles_test = new Circle(circle51, 3, "stroke");
	array_circles_test[51] = pointer_circles_test;

	var circle52 = createVector(90, 605);
	pointer_circles_test = new Circle(circle52, 3, "stroke");
	array_circles_test[52] = pointer_circles_test;

	var circle53 = createVector(3, 609);
	pointer_circles_test = new Circle(circle53, 3, "stroke");
	array_circles_test[53] = pointer_circles_test;

	var circle54 = createVector(489, 749);
	pointer_circles_test = new Circle(circle54, 3, "stroke");
	array_circles_test[54] = pointer_circles_test;

	//polyline
	var polyline0 = [createVector(802, 149), createVector(641, 147), createVector(599, 147), createVector(494, 156)];
	pointer_polylines_test = new PolyLine(polyline0);
	array_polylines_test[0] = pointer_polylines_test;

	var polyline1 = [createVector(802, 805), createVector(802, 573), createVector(802, 0)];
	pointer_polylines_test = new PolyLine(polyline1);
	array_polylines_test[1] = pointer_polylines_test;

	var polyline2 = [createVector(489, 750), createVector(489, 285), createVector(496, 101)];
	pointer_polylines_test = new PolyLine(polyline2);
	array_polylines_test[2] = pointer_polylines_test;

	var polyline3 = [createVector(90, 306), createVector(393, 295), createVector(489, 301), createVector(538, 295), createVector(580, 295), createVector(802, 285)];
	pointer_polylines_test = new PolyLine(polyline3);
	array_polylines_test[3] = pointer_polylines_test;

	var polyline4 = [createVector(1, 459), createVector(46, 462), createVector(101, 459), createVector(119, 474), createVector(473, 455), createVector(489, 443), createVector(508, 449), createVector(802, 447)];
	pointer_polylines_test = new PolyLine(polyline4);
	array_polylines_test[4] = pointer_polylines_test;

	var polyline5 = [createVector(3, 609), createVector(142, 604), createVector(213, 593), createVector(250, 605), createVector(308, 605), createVector(338, 588), createVector(367, 604), createVector(473, 598), createVector(489, 588), createVector(508, 593), createVector(611, 586), createVector(769, 575), createVector(802, 573)];
	pointer_polylines_test = new PolyLine(polyline5);
	array_polylines_test[5] = pointer_polylines_test;

	//polygon
	var polygon0 = [createVector(508, 573), createVector(517, 573), createVector(776, 561), createVector(792, 561), createVector(792, 452), createVector(772, 452), createVector(508, 456), createVector(508, 573)];
	pointer_polygons_test = new Polygon(polygon0, "stroke");
	array_polygons_test[0] = pointer_polygons_test;

	var polygon1 = [createVector(472, 780), createVector(463, 780), createVector(11, 763), createVector(3, 763), createVector(3, 754), createVector(4, 621), createVector(16, 621), createVector(473, 604), createVector(473, 612), createVector(472, 780)];
	pointer_polygons_test = new Polygon(polygon1, "stroke");
	array_polygons_test[1] = pointer_polygons_test;

	var polygon2 = [createVector(507, 599), createVector(506, 784), createVector(518, 784), createVector(776, 805), createVector(791, 805), createVector(791, 580), createVector(772, 580), createVector(513, 599), createVector(507, 599)];
	pointer_polygons_test = new Polygon(polygon2, "stroke");
	array_polygons_test[2] = pointer_polygons_test;

	var polygon3 = [createVector(472, 579), createVector(464, 579), createVector(12, 596), createVector(4, 596), createVector(3, 484), createVector(15, 484), createVector(472, 460), createVector(472, 579)];
	pointer_polygons_test = new Polygon(polygon3, "stroke");
	array_polygons_test[3] = pointer_polygons_test;

	var polygon4 = [createVector(1, 453), createVector(16, 453), createVector(46, 455), createVector(472, 432), createVector(472, 314), createVector(463, 314), createVector(296, 322), createVector(62, 335), createVector(13, 368), createVector(1, 368), createVector(1, 453)];
	pointer_polygons_test = new Polygon(polygon4, "stroke");
	array_polygons_test[4] = pointer_polygons_test;

	var polygon5 = [createVector(789, 421), createVector(772, 421), createVector(508, 427), createVector(508, 318), createVector(517, 318), createVector(777, 312), createVector(789, 312), createVector(789, 421)];
	pointer_polygons_test = new Polygon(polygon5, "stroke");
	array_polygons_test[5] = pointer_polygons_test;

	var polygon6 = [createVector(789, 280), createVector(789, 173), createVector(770, 173), createVector(641, 171), createVector(518, 180), createVector(508, 180), createVector(508, 291), createVector(572, 291), createVector(653, 286), createVector(789, 280)];
	pointer_polygons_test = new Polygon(polygon6, "stroke");
	array_polygons_test[6] = pointer_polygons_test;

	var polygon7 = [createVector(515, 145), createVector(515, 48), createVector(576, 18), createVector(590, 15), createVector(790, 9), createVector(790, 141), createVector(598, 141), createVector(515, 145)];
	pointer_polygons_test = new Polygon(polygon7, "stroke");
	array_polygons_test[7] = pointer_polygons_test;

	var polygon8 = [createVector(482, 101), createVector(477, 286), createVector(353, 289), createVector(119, 301), createVector(116, 301), createVector(136, 280), createVector(475, 101), createVector(482, 101)];
	pointer_polygons_test = new Polygon(polygon8, "stroke");
	array_polygons_test[8] = pointer_polygons_test;

}

function test()
{
	clear();
	var i = 0;

	//circle
	for(i=0; i<55; i++)
	{
		if(collidePointCircle(mouseX, mouseY, array_circles_test[i].vector_point.x, array_circles_test[i].vector_point.y, 2 * array_circles_test[i].radius) == true)
		{
			array_circles_test[i].color(0, 0, 0, 255);
			tip = new Tooltip("circle" + i, mouseX, mouseY, 100, 40);
			tip.show();
		}
		else
		{
			array_circles_test[i].color(0, 0, 0, 255);
		}
	}

	//polyline
	for(i=0; i<6; i++)
	{
		var j=0;
		for(j=0; j<array_polylines_test[i].array_of_vectors.length - 1; j++)
		{
			if(collidePointLine(mouseX, mouseY, array_polylines_test[i].array_of_vectors[j].x, array_polylines_test[i].array_of_vectors[j].y, array_polylines_test[i].array_of_vectors[j+1].x, array_polylines_test[i].array_of_vectors[j+1].y, 0.1) == true)
			{
				array_polylines_test[i].color(0, 0, 0, 255);
				tip = new Tooltip("polyline" + i, mouseX, mouseY, 100, 40);
				tip.show();
			}
			else
			{
				array_polylines_test[i].color(0, 0, 255, 255);
			}
		}
	}

	//polygon
	for(i=0; i<9; i++)
	{
		if(collidePointPoly(mouseX, mouseY, array_polygons_test[i].array_of_vectors) == true)
		{
			array_polygons_test[i].color(0, 0, 0, 255);
			tip = new Tooltip("polygon" + i, mouseX, mouseY, 100, 40);
			tip.show();
		}
		else
		{
			array_polygons_test[i].color(255, 0, 0, 255);
		}
	}
}

