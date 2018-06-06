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
var num = [0, 0, 0, 0, 0];	//Make an array instead


function setup()
{
	createCanvas(900, 900);
	background(255);

	basemapData();
	plotprofileData();
	waterlinesData();
	gaslinesData();
	sewagelinesData();
	//testData();
}

				
function draw()
{	
	clear();
	background(255);

	document.getElementById('btnOnBaseMap').onclick = function()
	{	
		
		num[0] = 1; 		
	}

	document.getElementById('btnOffBaseMap').onclick = function()
	{
		num[0] = 0;
		clear();
	}

	document.getElementById('btnOnPlotProfile').onclick = function()
	{	
		
		num[1] = 1; 		
	}

	document.getElementById('btnOffPlotProfile').onclick = function()
	{
		num[1] = 0;
		clear();
	}

	document.getElementById('btnOnWaterLines').onclick = function()
	{	
		
		num[2] = 1; 		
	}

	document.getElementById('btnOffWaterLines').onclick = function()
	{
		num[2] = 0;
		clear();
	}

	document.getElementById('btnOnGasLines').onclick = function()
	{	
		
		num[3] = 1; 		
	}

	document.getElementById('btnOffGasLines').onclick = function()
	{
		num[3] = 0;
		clear();
	}

	document.getElementById('btnOnSewageLines').onclick = function()
	{	
		
		num[4] = 1; 		
	}

	document.getElementById('btnOffSewageLines').onclick = function()
	{
		num[4] = 0;
		clear();
	}

	if(num[0] == 1)
	{
		//test();
		basemap();	
	}

	

	if(num[2] == 1)
	{
		//test();
		waterlines();	
	}

	if(num[3] == 1)
	{
		//test();
		gaslines();	
	}

	if(num[4] == 1)
	{
		//test();
		sewagelines();	
	}

	if(num[1] == 1)
	{
		//test();
		plotprofile();	
	}
}