// Get the containerwidget element
var containerwidget = document.getElementById("containerwidget");

// Initialize variables to store mouse positions
var offsetX, offsetY;

// Function to handle mouse down event
function handleMouseDown(e) {
  e.preventDefault();
  // Calculate the offset between mouse position and container position
  offsetX = e.clientX - containerwidget.getBoundingClientRect().left;
  offsetY = e.clientY - containerwidget.getBoundingClientRect().top;
  
  // Attach mousemove and mouseup event listeners to the document
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
}

// Function to handle mouse move event
function handleMouseMove(e) {
  // Calculate the new position of the container
  var x = e.clientX - offsetX;
  var y = e.clientY - offsetY;
  
  // Set the new position of the container
  containerwidget.style.left = x + "px";
  containerwidget.style.top = y + "px";
}

// Function to handle mouse up event
function handleMouseUp() {
  // Remove the mousemove and mouseup event listeners
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
}

// Attach mousedown event listener to the containerwidget
containerwidget.addEventListener("mousedown", handleMouseDown);
