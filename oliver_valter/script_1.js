document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".menu_container .button");
  const textFields = document.querySelectorAll(".text_field div");

  function isMobile() {
      return window.innerWidth <= 768; // Mobile breakpoint
  }

  function updateBehavior() {
      if (isMobile()) {
          // On mobile: Show all text fields
          textFields.forEach(field => field.style.display = "block");
      } else {
          // On desktop: Hide all text fields initially
          textFields.forEach(field => field.style.display = "none");

          // Restore button functionality
          buttons.forEach((button, index) => {
              button.addEventListener("click", function () {
                  // Hide all text fields
                  textFields.forEach(field => field.style.display = "none");

                  // Show the clicked section
                  textFields[index].style.display = "block";
              });
          });
      }
  }

  // Run on page load
  updateBehavior();

  // Reapply behavior when resizing window
  window.addEventListener("resize", updateBehavior);

  // Keep button highlight effect only on desktop
  for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
          if (!isMobile()) {
              let current = document.getElementsByClassName("active");

              if (current.length > 0) {
                  current[0].classList.remove("active");
              }

              this.classList.add("active");
          }
      });
  }
});
