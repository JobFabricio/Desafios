const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const progressBar = document.getElementById("progress-bar");

playBtn.addEventListener("click", function() {
  audioPlayer.play();
});

pauseBtn.addEventListener("click", function() {
  audioPlayer.pause();
});

audioPlayer.addEventListener("timeupdate", function() {
  const duration = audioPlayer.duration;
  const currentTime = audioPlayer.currentTime;
  const progress = (currentTime / duration) * 100;
  progressBar.value = progress;
});

progressBar.addEventListener("input", function() {
  const progress = progressBar.value;
  const duration = audioPlayer.duration;
  const currentTime = (progress / 100) * duration;
  audioPlayer.currentTime = currentTime;
});