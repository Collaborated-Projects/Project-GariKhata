//polygon
var array_polygons_basemap = [];
var pointer_polygons_basemap = null;



//Tooltip
var tip = null;

function basemapData()
{
	//polygon
	var polygon0 = [createVector(508, 564), createVector(516, 564), createVector(775, 552), createVector(792, 552), createVector(792, 443), createVector(772, 443), createVector(508, 446), createVector(508, 564)];
	pointer_polygons_basemap = new Polygon(polygon0, "stroke");
	array_polygons_basemap[0] = pointer_polygons_basemap;

	var polygon1 = [createVector(471, 771), createVector(463, 771), createVector(11, 754), createVector(3, 754), createVector(3, 744), createVector(3, 612), createVector(16, 612), createVector(473, 594), createVector(473, 603), createVector(471, 771)];
	pointer_polygons_basemap = new Polygon(polygon1, "stroke");
	array_polygons_basemap[1] = pointer_polygons_basemap;

	var polygon2 = [createVector(506, 590), createVector(505, 775), createVector(517, 775), createVector(775, 796), createVector(791, 796), createVector(791, 570), createVector(772, 570), createVector(513, 590), createVector(506, 590)];
	pointer_polygons_basemap = new Polygon(polygon2, "stroke");
	array_polygons_basemap[2] = pointer_polygons_basemap;

	var polygon3 = [createVector(472, 570), createVector(463, 570), createVector(11, 587), createVector(3, 587), createVector(3, 475), createVector(15, 474), createVector(472, 451), createVector(472, 570)];
	pointer_polygons_basemap = new Polygon(polygon3, "stroke");
	array_polygons_basemap[3] = pointer_polygons_basemap;

	var polygon4 = [createVector(0, 444), createVector(15, 444), createVector(45, 445), createVector(472, 423), createVector(472, 305), createVector(463, 305), createVector(296, 312), createVector(61, 326), createVector(12, 359), createVector(0, 359), createVector(0, 444)];
	pointer_polygons_basemap = new Polygon(polygon4, "stroke");
	array_polygons_basemap[4] = pointer_polygons_basemap;

	var polygon5 = [createVector(789, 411), createVector(771, 411), createVector(508, 417), createVector(507, 308), createVector(517, 308), createVector(776, 302), createVector(789, 302), createVector(789, 411)];
	pointer_polygons_basemap = new Polygon(polygon5, "stroke");
	array_polygons_basemap[5] = pointer_polygons_basemap;

	var polygon6 = [createVector(789, 271), createVector(789, 163), createVector(770, 163), createVector(640, 161), createVector(517, 170), createVector(507, 170), createVector(507, 281), createVector(571, 281), createVector(653, 277), createVector(789, 271)];
	pointer_polygons_basemap = new Polygon(polygon6, "stroke");
	array_polygons_basemap[6] = pointer_polygons_basemap;

	var polygon7 = [createVector(514, 136), createVector(514, 39), createVector(576, 9), createVector(589, 6), createVector(789, 0), createVector(789, 132), createVector(598, 132), createVector(514, 136)];
	pointer_polygons_basemap = new Polygon(polygon7, "stroke");
	array_polygons_basemap[7] = pointer_polygons_basemap;

	var polygon8 = [createVector(482, 92), createVector(476, 277), createVector(353, 280), createVector(119, 291), createVector(115, 291), createVector(135, 271), createVector(475, 92), createVector(482, 92)];
	pointer_polygons_basemap = new Polygon(polygon8, "stroke");
	array_polygons_basemap[8] = pointer_polygons_basemap;

	var polygon9 = [createVector(13, 620), createVector(13, 748), createVector(465, 764), createVector(465, 599), createVector(13, 620)];
	pointer_polygons_basemap = new Polygon(polygon9, "fill");
	array_polygons_basemap[9] = pointer_polygons_basemap;

	var polygon10 = [createVector(515, 599), createVector(515, 764), createVector(773, 785), createVector(773, 579), createVector(515, 599)];
	pointer_polygons_basemap = new Polygon(polygon10, "fill");
	array_polygons_basemap[10] = pointer_polygons_basemap;

	var polygon11 = [createVector(13, 483), createVector(13, 576), createVector(465, 560), createVector(465, 459), createVector(13, 483)];
	pointer_polygons_basemap = new Polygon(polygon11, "fill");
	array_polygons_basemap[11] = pointer_polygons_basemap;

	var polygon12 = [createVector(514, 453), createVector(514, 552), createVector(773, 542), createVector(773, 450), createVector(514, 453)];
	pointer_polygons_basemap = new Polygon(polygon12, "fill");
	array_polygons_basemap[12] = pointer_polygons_basemap;

	var polygon13 = [createVector(13, 366), createVector(13, 435), createVector(46, 437), createVector(75, 435), createVector(465, 415), createVector(465, 310), createVector(64, 334), createVector(38, 349), createVector(13, 366)];
	pointer_polygons_basemap = new Polygon(polygon13, "fill");
	array_polygons_basemap[13] = pointer_polygons_basemap;

	var polygon14 = [createVector(514, 315), createVector(514, 413), createVector(773, 404), createVector(773, 309), createVector(514, 315)];
	pointer_polygons_basemap = new Polygon(polygon14, "fill");
	array_polygons_basemap[14] = pointer_polygons_basemap;

	var polygon15 = [createVector(521, 176), createVector(521, 207), createVector(507, 207), createVector(507, 280), createVector(571, 280), createVector(571, 273), createVector(648, 268), createVector(773, 264), createVector(773, 170), createVector(640, 169), createVector(521, 176)];
	pointer_polygons_basemap = new Polygon(polygon15, "fill");
	array_polygons_basemap[15] = pointer_polygons_basemap;

	var polygon16 = [createVector(521, 47), createVector(521, 128), createVector(595, 125), createVector(772, 125), createVector(772, 12), createVector(590, 17), createVector(544, 37), createVector(521, 47)];
	pointer_polygons_basemap = new Polygon(polygon16, "fill");
	array_polygons_basemap[16] = pointer_polygons_basemap;

	var polygon17 = [createVector(469, 268), createVector(355, 272), createVector(132, 282), createVector(476, 101), createVector(469, 268)];
	pointer_polygons_basemap = new Polygon(polygon17, "fill");
	array_polygons_basemap[17] = pointer_polygons_basemap;

}

function basemap()
{
	clear();
	var i = 0;

	//polygon
	for(i=0; i<18; i++)
	{
		if(collidePointPoly(mouseX, mouseY, array_polygons_basemap[i].array_of_vectors) == true)
		{
			array_polygons_basemap[i].color(0, 0, 0, 255);
			tip = new Tooltip("polygon" + i, mouseX, mouseY, 100, 40);
			tip.show();
		}
		else
		{
			array_polygons_basemap[i].color(0, 0, 255, 255);
		}
	}
}

