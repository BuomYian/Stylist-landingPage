// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Video player functionality
const videoPlayer = document.getElementById("project-video");

function playVideo() {
  videoPlayer.play();
}

function pauseVideo() {
  videoPlayer.pause();
}

// Add event listeners for play/pause buttons
const playButton = document.getElementById("play-button");
playButton.addEventListener("click", playVideo);

const pauseButton = document.getElementById("pause-button");
pauseButton.addEventListener("click", pauseVideo);
