function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const pointsPerDemerit = 5;
    const maxDemeritPoints = 12;
    
    // Check if speed is less than speed limit
    if (speed <= speedLimit) {
      return "Ok";
    }
    
    // Calculate demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / pointsPerDemerit);
    
    // Check if demerit points exceed the maximum limit
    if (demeritPoints > maxDemeritPoints) {
      return "License suspended";
    }
    
    return "Points: " + demeritPoints;
  }
  
  // Prompt user for input
  const speed = prompt("Enter car speed in km/h:");
  
  // Convert input to number
  const speedNumber = parseFloat(speed);
  
  // Check if input is a valid number
  if (isNaN(speedNumber)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    console.log(calculateDemeritPoints(speedNumber));
  }
  