const cards = document.querySelectorAll(".card");
let current = 0;

// Show next card when button clicked
document.querySelectorAll(".next-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    cards[index].classList.remove("active");
    if (index + 1 < cards.length) {
      cards[index + 1].classList.add("active");
    } else {
      alert("Thank you, Didi" );
      location.reload(); // restart
    }
  });
});

// Optional: Change music link
const audio = document.getElementById("player");
// Example:
// audio.src = "https://example.com/your-song.mp3";

console.log("Happy Bhai Dooj to Choti didi - From Anubhav 🎉");