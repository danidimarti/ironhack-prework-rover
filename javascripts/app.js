// Rover Object Goes Here
var rover = {
  direction: "N",
  x:0,
  y:0,
  travelLog: [],
};
// ======================

// Rover Turns Left 

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction= "W";
      break;
    case "W":
      rover.direction= "S";
      break;
    case "S":
      rover.direction= "E";
      break;
    case "E":
      rover.direction= "N";
      break;
  }
  console.log("The rover is currently facing: " + rover.direction);

}


// Rover Turns Right 

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction= "E";
      break;
    case "E":
      rover.direction= "S";
      break;
    case "S":
      rover.direction= "W";
      break;
    case "W":
      rover.direction= "N";
      break;
    default: "N";
    
    console.log("The rover is currently facing: " + rover.direction);
  }
}

// Rover Moves Forward + Alert Rover Off Grid 
function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      rover.y= rover.y++;
      console.log("Rover moved to" + rover.x + "," + rover.y);
      break;
    case "S":
      rover.y= rover.y--;
      console.log("Rover moved to" + rover.x + "," + rover.y);
      break;
    case "E":
      rover.x= rover.x++;
      console.log("Rover moved to" + rover.x + "," + rover.y);
      break; 
    case "W":
      rover.x= rover.x--;
      console.log("Rover moved to" + rover.x + "," + rover.y);
      break;    
  }

  if (rover.x<0) {
    alert("Rover off grid!");
    rover.x=rover.x++;
  } 
  else if (rover.y<0) {
    alert("Rover off grid!");
    rover.y=rover.y++;
  } 
  else if (rover.y>9) {
    alert("Rover off grid!");
    rover.y=rover.y--;
  } 
  else if (rover.x>9) {
    alert("Rover off grid!");
    rover.x=rover.x--;
  }

//adds rovers position to the TravelLog's array
rover.travelLog.push(rover.x + "," + rover.y);

// Reports the travel log array
console.log(rover.travelLog);

}

//Rover Commands
function executeSteps (string){
  for (var i=0; i=string.length; i++){
    switch(string[i]){
      case "l": 
      turnLeft(rover);
      break;
      case "r": 
      turnRight(rover);
      break;
      case "f": 
      moveForward(rover);
      break;
      case "b": moveBack(rover);
      break;
      
    }
    
  }
  
}
