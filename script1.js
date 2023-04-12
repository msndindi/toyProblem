function getGrade() {
  // Prompt user for input
  const marks = prompt("Enter student marks (0-100):");
  
  // Convert input to number
  const marksNumber = parseFloat(marks);
  
  // Check if input is a valid number between 0 and 100
  if (isNaN(marksNumber) || marksNumber < 0 || marksNumber > 100) {
    return "Invalid input. Please enter a number between 0 and 100.";
  }
  
  // Determine grade based on marks
  if (marksNumber > 79) {
    return "A";
  } else if (marksNumber >= 60 && marksNumber <= 79) {
    return "B";
  } else if (marksNumber >= 50 && marksNumber <= 59) {
    return "C";
  } else if (marksNumber >= 40 && marksNumber <= 49) {
    return "D";
  } else {
    return "E";
  }
}
