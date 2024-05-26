
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var volumeRange = document.getElementById('volumeRange');
  
    playPauseBtn.addEventListener('click', function() {
      if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
      } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
      }
    });
  
    volumeRange.addEventListener('input', function() {
      video.volume = volumeRange.value;
    });
  });
  