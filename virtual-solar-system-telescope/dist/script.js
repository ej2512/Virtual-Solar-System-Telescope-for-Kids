document.addEventListener("DOMContentLoaded", function () {
  const orbits = {
    mercury: 60,
    venus: 90,
    earth: 120,
    mars: 150,
    jupiter: 180,
    saturn: 210,
    uranus: 240,
    neptune: 270
  };

  const baseSpeeds = {
    mercury: 88,
    venus: 225,
    earth: 365,
    mars: 687,
    jupiter: 4333,
    saturn: 10759,
    uranus: 30687,
    neptune: 60190
  };

  // Function to set animation properties
  function setPlanetAnimationProperties(sliderValue = 1) {
    Object.keys(orbits).forEach((planetId) => {
      const planet = document.getElementById(planetId);
      const radius = orbits[planetId];
      const baseSpeed = baseSpeeds[planetId];
      const speed = baseSpeed / sliderValue;
      planet.style.transformOrigin = `${radius}px 50%`;
      planet.style.animation = `rotatePlanet ${speed}s linear infinite`;
    });
  }

  setPlanetAnimationProperties();

  // Function to pause the animation
  function pauseAnimation() {
    document.querySelectorAll(".planet").forEach((planet) => {
      planet.style.animationPlayState = "paused";
    });
  }

  // Function to resume the animation
  function resumeAnimation() {
    document.querySelectorAll(".planet").forEach((planet) => {
      planet.style.animationPlayState = "running";
    });
  }

  // Add event listeners for the pause and resume buttons
  document
    .getElementById("pause-animation")
    .addEventListener("click", pauseAnimation);
  document
    .getElementById("resume-animation")
    .addEventListener("click", resumeAnimation);

  // Function to adjust the speed of the animation
  function adjustSpeed() {
    const sliderValue = document.getElementById("speed-control-slider").value;
    setPlanetAnimationProperties(sliderValue);
  }

  // Add event listener to the speed control slider
  document
    .getElementById("speed-control-slider")
    .addEventListener("input", adjustSpeed);

  // Zoom functionality
  let currentZoom = 1;
  const ZOOM_INCREMENT = 0.1;
  const MAX_ZOOM = 2;
  const MIN_ZOOM = 0.5;
  const solarSystem = document.getElementById("solar-system");

  document.getElementById("zoom-in").addEventListener("click", function () {
    if (currentZoom < MAX_ZOOM) {
      currentZoom += ZOOM_INCREMENT;
      solarSystem.style.transform = `scale(${currentZoom})`;
    }
  });

  document.getElementById("zoom-out").addEventListener("click", function () {
    if (currentZoom > MIN_ZOOM) {
      currentZoom -= ZOOM_INCREMENT;
      solarSystem.style.transform = `scale(${currentZoom})`;
    }
  });

  // Info-panel functionality
  const planets = document.querySelectorAll(".planet");
  const infoPanel = document.getElementById("info-panel");
  const planetData = {
    mercury:
      "Mercury is the smallest and innermost planet in the Solar System.",
    venus:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.",
    earth:
      "Earth is the third planet from the Sun and the only astronomical object known to harbor life.",
    mars:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.",
    jupiter:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System.",
    saturn:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System.",
    uranus:
      "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    neptune:
      "Neptune is the eighth and farthest known planet from the Sun in the Solar System."
  };

  // Function to update the info-panel with planet information
  function displayPlanetInfo(planetId) {
    infoPanel.innerHTML =
      planetData[planetId] || "Information about this planet is not available.";
  }

  // Add event listeners to planets for displaying info
  planets.forEach((planet) => {
    planet.addEventListener("mouseover", function () {
      displayPlanetInfo(this.id);
    });
  });
});