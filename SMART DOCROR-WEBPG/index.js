// Get the video and button elements
const video = document.getElementById('myVideo');
const playPauseButton = document.getElementById('play-video-button');

// Add an event listener to the button
playPauseButton.addEventListener('click', () => {
  // Check if the video is playing
  if (video.paused) {
    // Play the video
    video.play();
    playPauseButton.textContent = 'Pause';
  } else {
    // Pause the video
    video.pause();
    playPauseButton.textContent = 'Play';
  }
});