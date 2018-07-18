var x1 = 200;
var y1 = 200;
var x2 = 400;
var y2 = 400;
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




var X = 814.13
var Y = 10
lengthofLine = (805.51-573.64)/20
var checker = 1
function setup() {
  createCanvas(1000,1000)
}

function draw() 
{
  background(0,255,0)
  if (Y == 0){
    checker = 0
  }
  if (checker == 1){
  for (counter=0;counter<lengthofLine;counter++){
    line(X,805.51+Y-(20*counter),X,795.51+Y-(counter*20))
  }
  Y--
  }
  else{
  Y = 10
  checker = 1
  }


}
