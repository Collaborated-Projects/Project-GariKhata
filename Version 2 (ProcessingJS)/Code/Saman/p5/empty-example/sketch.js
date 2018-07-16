var x1 = 200;
var y1 = 400;
var x2 = 400;
var y2 = 200;
var shifts = 10;
var xshift = 10;
var movingX = 0;
var slope = (y2-y1)/(x2-x1); 

function setup() {
  createCanvas(1000,1000)
}

function draw() 
{
  background(0,255,0)
  if (x1 < x2)
  {
  for (i = 0; i <10 ; i++)
    {
      line(x1+(i*xshift),((i*xshift*slope))+y1,x1+((i+1)*xshift),((i+1)*xshift*slope)+y1);
      i = i+1;
    }
    x1 = x1+15;
    y1 = (15*slope)+y1
  }
  else{
    x1 = 200;
    y1 = 400;
  }

}
