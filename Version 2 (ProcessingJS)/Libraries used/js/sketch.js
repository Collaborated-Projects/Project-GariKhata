/*Base Map*/
//Polygon
var array_polygons_basemap = [];
var pointer_polygons_basemap = null;

//PolyLine
var array_lines_basemap = [];
var pointer_lines_basemap = null;

// -----------------------------------------------------------------------

/*Plot Profile*/
//Polygon
var array_polygons_plotprofile = [];
var pointer_polygons_plotprofile = null;

//PolyLine
var array_lines_plotprofile = [];
var pointer_lines_plotprofile = null;

// -----------------------------------------------------------------------

/*Water Lines*/
//Polygon
var array_polygons_waterlines = [];
var pointer_polygons_waterlines = null;

//PolyLine
var array_lines_waterlines = [];
var pointer_lines_waterlines = null;

// -----------------------------------------------------------------------

/*Gas Lines*/
//Polygon
var array_polygons_gaslines = [];
var pointer_polygons_gaslines = null;

//PolyLine
var array_lines_gaslines = [];
var pointer_lines_gaslines = null;

// -----------------------------------------------------------------------

/*Sewage Lines*/
//Polygon
var array_polygons_sewagelines = [];
var pointer_polygons_sewagelines = null;

//PolyLine
var array_lines_sewagelines = [];
var pointer_lines_sewagelines = null;

// -----------------------------------------------------------------------

//On-Off Tracker
var num = 0;	//Make an array instead


function setup()
{
	createCanvas(900, 900);
	background(255);

	/*basmapData();
	plotprofileData();*/
	//waterlinesData();
	/*gaslinesData();
	sewagelinesData();*/
	testData();
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
		test();
		//waterlines();	
	}
}