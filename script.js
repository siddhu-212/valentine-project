const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * 220;
    const y = Math.random() * 40;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });
}

function goToSurprise() {
  window.location.href = "surprise.html";
}

function showSurprise() {
  document.getElementById("surpriseBox").classList.remove("hidden");
}

function showSurprise() {
  const box = document.getElementById("surpriseBox");
  box.classList.remove("hidden");
}

