function openLetter() {
    document.querySelector(".flap").style.transform = "rotateX(180deg)";
    setTimeout(() => {
        window.location.href = "letter.html";
    }, 800);
}
