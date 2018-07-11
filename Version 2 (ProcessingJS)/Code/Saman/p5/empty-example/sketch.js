var x1 = 200;
var y1 = 200;
var x2 = 400;
var y2 = 400;
var shifts = 10;
var lengthofLine = Math.sqrt(((X1-X2)*(X1-X2))((Y1-Y2)*(Y1-Y2)))/20;
var changeinx = (X1-X2)/20 ;
var checker = 1;
var slope = (y2-y1)/(x2-x1); 

function setup() {
  createCanvas(1000,1000)
}

function draw() 
{
  clear();
					background(123, 123, 223);	
					stroke(0);

					var i=10;

					
					line(x1, y1, (x1 + 10), y1 + ((x1 + 10) - x1)*slope);
					line((x1 + 20), y1 + ((x1 + 20) - x1)*slope, (x1 + 30), y1 + ((x1 + 30) - x1)*slope);

					x1 = x1 + 10;
					y1 = y1 + ((x1 + 10) - x1)*slope;
					

					if(x1 > x2)
					{
						x1 = 200;
						y1 = 200;
						x2 = 400;
						y2 = 400;
					}
}
