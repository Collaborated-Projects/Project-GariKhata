//Setting the plot list after AJAX API CALL is made

var plotList = null;

function setPlotList(passedPlotList)
{
	plotList = passedPlotList;
	console.log(plotList);
}

console.log(plotList);

//On-Off Tracker
var num = [0, 0, 0, 0, 0];	//Make an array instead
var numm = 0;

function setup()
{
	createCanvas(900, 900);
	background(255);

	basemapData();
	plotprofileData();
	waterlinesData();
	gaslinesData();
	sewagelinesData();
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

	if(num[0] === 1)
	{
		//test();
		basemap(plotList);	
	}
	if(num[4] === 1)
	{
		//test();
		sewagelines(plotList);	
	}

	
	if(num[2] === 1)
	{
		//test();
		waterlines(plotList);	
	}

	if(num[3] === 1)
	{
		//test();
		gaslines(plotList);	
	}

	if(num[1] === 1)
	{
		//test();
		plotprofile(plotList);	
	}
	//console.log(num);
	//console.log(numm);

}