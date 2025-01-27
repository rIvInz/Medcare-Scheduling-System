let lastScrollTop = 0;

document.addEventListener('scroll', function() {
  const mission = document.getElementById('mission');
  const vision = document.getElementById('vision');

  const missionPosition = mission.getBoundingClientRect().top;
  const visionPosition = vision.getBoundingClientRect().top;

  const windowHeight = window.innerHeight;

  const currentScrollTop = window.scrollY;

  // Check if scrolling down
  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    if (missionPosition < windowHeight - 50) {
      mission.classList.add('show');
      mission.classList.remove('hide'); 
    } 
    if (visionPosition < windowHeight - 50) {
      vision.classList.add('show');
      vision.classList.remove('hide'); 
    }
  } else {
    // Scrolling up
    if (missionPosition > windowHeight) { 
      mission.classList.remove('show'); 
      mission.classList.add('hide'); 
    }
    if (visionPosition > windowHeight) { 
      vision.classList.remove('show'); 
      vision.classList.add('hide'); 
    }
  }

  lastScrollTop = currentScrollTop;
});