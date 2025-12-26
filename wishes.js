let flippedCount = 0;

function flipCard(card) {
  if (card.classList.contains("flipped")) return;

  card.classList.add("flipped");
  flippedCount++;

  if (flippedCount === 3) {
    setTimeout(showPopup, 2000);
  }
}

function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

function goNext() {
  // change this if your final page name is different
  window.location.href = "memes.html";
}
