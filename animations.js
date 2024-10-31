document.addEventListener("DOMContentLoaded", function() {
  // Function to temporarily change image, then revert
  function changeImageTemporarily(icon) {
      const originalImageSrc = icon.src; 
      const newImageSrc = icon.getAttribute("data-clicked-src");

      // Change to the new image
      icon.src = newImageSrc;

      // Shrink effect for feedback
      icon.style.transform = "scale(0.9)"; // Shrinks the image slightly

      // Revert back to the original image and size after 300ms
      setTimeout(() => {
          icon.src = originalImageSrc; // Revert to original image
          icon.style.transform = "scale(1)"; // Reset scale
      }, 300); // Adjust time for how long the new image shows
  }

  const icons = document.querySelectorAll(".clickable-icon");

  icons.forEach(icon => {
      // Click Event
      icon.addEventListener("click", function() {
          changeImageTemporarily(icon);
      });

      // Long Press Event
      let pressTimer;
      icon.addEventListener("mousedown", function() {
          pressTimer = setTimeout(() => changeImageTemporarily(icon), 1000); // Long press duration: 1 second
      });

      // Cancel the long press if mouse is released or moved away before 1 second
      icon.addEventListener("mouseup", function() {
          clearTimeout(pressTimer);
      });
      icon.addEventListener("mouseleave", function() {
          clearTimeout(pressTimer);
      });
  });
});
