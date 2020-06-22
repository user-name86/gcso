
function isTouching(wall,car){
  if(wall.x -car.x<car.width/2+wall.width/2
     && car.x-wall.x< wall.width/2+car.width/2
     && wall.y-car.y<car.height/2+wall.height/2
     && car.y-wall.y<car.height/2+car.height/2){
      return true;
  } else {
      return false;
  }
  
}