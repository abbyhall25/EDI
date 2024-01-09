function setup() {
  createCanvas (windowWidth,windowHeight);
  fill ("lightblue");
  strokeWeight (1);

}

function draw() {
  var num = 25;
  var sideLen = windowWidth/num;
 
  
  for (var y=0; y < windowHeight; y = y+sideLen) {
    for (var x=0; x < windowWidth; x=x+sideLen){
      quad (
        x,y,
        x+sideLen,y,
        x+sideLen,y+sideLen,
        x,y+sideLen
      );
          }
}

  
}
function windowResize (){
  resizeCanvas (windowWidth, windowHeight);
}