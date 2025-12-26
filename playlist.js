const cards = document.querySelectorAll('.card');
const audio = document.getElementById('audio');
const title = document.getElementById('songName');

let index = 0;
let currentCard = null;

function showCard() {
  cards.forEach((c, i) => {
    c.classList.toggle('hidden', i !== index);
  });
}

function next() {
  index = (index + 1) % cards.length;
  showCard();
  stopAudio(); // stop when sliding
}

function prev() {
  index = (index - 1 + cards.length) % cards.length;
  showCard();
  stopAudio();
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
  title.innerText = "Tappppp on songsss 💖";
  if (currentCard) {
    currentCard.classList.remove('playing');
    currentCard = null;
  }
}

/* toggle play / pause when clicking image or card */
cards.forEach(card => {
  card.addEventListener('click', () => {
    const src = card.dataset.src;
    const name = card.dataset.name;

    // if clicking same card while playing -> pause/stop
    if (currentCard === card && !audio.paused) {
      stopAudio();
      return;
    }

    // switch to new song
    currentCard = card;
    cards.forEach(c => c.classList.remove('playing'));
    card.classList.add('playing');

    audio.src = src;
    audio.play();
    title.innerText = name + " 🎶";
  });
});

/* in case song ends naturally */
audio.addEventListener('ended', stopAudio);

function goNext() {
  window.location.href = "wishes.html"; // final surprise page
}
