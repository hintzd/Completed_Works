function changeWorkshopsColor() {
  const workshopElement = document.querySelector("#toc-workshops span");
  if (workshopElement) {
    workshopElement.style.color = "#ff6600";
  }
}

// Run the function after the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  changeWorkshopsColor(); // Apply immediately if it's already loaded
});

// Listen for the slidechanged event and apply the color change when necessary
Reveal.on('slidechanged', function(event) {
  changeWorkshopsColor(); // Apply on slide change
});

