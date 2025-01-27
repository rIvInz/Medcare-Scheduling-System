const videoBackground = document.querySelector('.video-background');

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const parallaxX = (mouseX - window.innerWidth / 2) / 20; // Adjust sensitivity as needed
  const parallaxY = (mouseY - window.innerHeight / 2) / 20; 

  videoBackground.style.transform = `translate(${parallaxX}px, ${parallaxY}px)`; 

  alert("JavaScript is connected!");
});