const card = document.getElementById("catCard");
const video = document.getElementById("catVideo");
const overlay = document.getElementById("playOverlay");

let isPlaying = false;

// user tap to toggle sound + play/pause (autoplay with sound is blocked on mobile otherwise)[web:135][web:138]
card.addEventListener("click", () => {
  if (!isPlaying) {
    video.play();
    isPlaying = true;
    card.classList.remove("paused");
    card.classList.add("playing");
  } else {
    video.pause();
    isPlaying = false;
    card.classList.remove("playing");
    card.classList.add("paused");
  }
});

// when video ends, show play icon again
video.addEventListener("ended", () => {
  isPlaying = false;
  card.classList.remove("playing");
  card.classList.add("paused");
});

function goNext() {
  // change this to where you want to go next
  window.location.href = "audio-wishes.html";
}
