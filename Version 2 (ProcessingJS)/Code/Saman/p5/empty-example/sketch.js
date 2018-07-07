var X = 814.13
var Y = 10
lengthofLine = 573.64/20
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
    line(814.13,805.51+Y-(20*counter),814.13,795.51+Y-(counter*20))
  }
  Y--
  }
  else{
  Y = 10
  checker = 1
  }


}