document.querySelectorAll(".heart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    createHeart(btn);
  });
});

function createHeart(button) {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.innerText = "❤️";

  // random direction
  const x = (Math.random() * 100 - 50) + "px";
  heart.style.setProperty("--x", x);

  button.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1500);
}

function goNext() {
  window.location.href = "cat-video.html"; // change if needed
}

