document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".menu_container .button");
    const textFields = document.querySelectorAll(".text_field div");
    
    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            // Hide all text fields
            textFields.forEach(field => field.style.display = "none");
            
            // Show the corresponding text field
            textFields[index].style.display = "block";
        });
    });
    
    // Hide all text fields initially
    textFields.forEach(field => field.style.display = "none");
});

var button = document.getElementsByClassName("button");

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
  
      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
  
      // Add the active class to the current/clicked button
      this.className += " active";
    });
  }