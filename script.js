function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


let mouseX = 0;  // Mouse X position relative to viewport
let mouseY = 0;  // Mouse Y position relative to viewport

let circleX = 0;  // Actual X position of circle on document
let circleY = 0;  // Actual Y position of circle on document

const lerpAmount = 1.8;  // Adjust for faster/slower movement.

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    document.getElementById('mouse-circle').style.display = "block";
});

function animate() {
    // Calculate the absolute position of the mouse on the document
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    let targetX = mouseX + scrollLeft;
    let targetY = mouseY + scrollTop;

    // Lerp the circle's position to the mouse's absolute position
    circleX += (targetX - circleX) * lerpAmount;
    circleY += (targetY - circleY) * lerpAmount;

    const circle = document.getElementById('mouse-circle');
    circle.style.transform = `translate(-50%, -50%) translate(${circleX}px, ${circleY}px)`;

    // Continue the animation loop
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();
  


// For growing the circle on hover
document.querySelectorAll('.hover-grow').forEach(element => {
  element.addEventListener('mouseenter', function() {
      const circle = document.getElementById('mouse-circle');
      circle.style.width = '100px';
      circle.style.height = '100px';
  });

  element.addEventListener('mouseleave', function() {
      const circle = document.getElementById('mouse-circle');
      circle.style.width = '80px';
      circle.style.height = '80px';
  });
});
  