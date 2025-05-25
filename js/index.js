const tekens = ["🍒", "🍋", "🍉", "⭐", "💎", "♥"];

const knop = document.getElementById("lever");
const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const resultaat = document.getElementById("resultaat");

function kiesRandomTeken() {
  const index = Math.floor(Math.random() * tekens.length);
  return tekens[index];
}

knop.addEventListener("click", function () {
  const t1 = kiesRandomTeken();
  const t2 = kiesRandomTeken();
  const t3 = kiesRandomTeken();

  slot1.textContent = t1;
  slot2.textContent = t2;
  slot3.textContent = t3;

  if (t1 === t2 && t2 === t3) {
    resultaat.textContent = "JE WINT 🎉💰";
  } else {
    resultaat.textContent = "JE VERLIEST 😭🥺";
  }
});
