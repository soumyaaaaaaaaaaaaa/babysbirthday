const cards = document.querySelectorAll(".voice-card");
const audio = document.getElementById("voiceAudio");
const restartBtn = document.getElementById("restartBtn");
const kissBtn = document.getElementById("kissBtn");

let index = 0;
let currentCard = null;

function showCard() {
  cards.forEach((card, i) => {
    card.classList.toggle("hidden", i !== index);
  });
  // stop audio when switching slides
  stopAudio();
}

function nextWish() {
  index = (index + 1) % cards.length;
  showCard();
}

function prevWish() {
  index = (index - 1 + cards.length) % cards.length;
  showCard();
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
  if (currentCard) {
    currentCard.classList.remove("playing");
    currentCard = null;
  }
}

// click on active card to play / pause
cards.forEach(card => {
  card.addEventListener("click", () => {
    // ignore clicks on hidden card
    if (card.classList.contains("hidden")) return;

    const src = card.dataset.src;

    // same card and audio playing -> pause
    if (currentCard === card && !audio.paused) {
      stopAudio();
      return;
    }

    // switch to this card audio
    currentCard = card;
    cards.forEach(c => c.classList.remove("playing"));
    audio.src = src;
    audio.play();                           // user click, allowed on mobile[web:141][web:149]
    card.classList.add("playing");
  });
});

// audio ended
audio.addEventListener("ended", stopAudio);

// Restart: go back to very first page
restartBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Kiss: go to cat‑kiss ending page
kissBtn.addEventListener("click", () => {
  window.location.href = "cat-kiss.html";
});

// initial state
showCard();
