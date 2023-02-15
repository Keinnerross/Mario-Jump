const sprite = document.querySelector(".sprite-container");
const button = document.querySelector("#jump-button");
const card = document.querySelector(".info-card");

/*Info Cards */
const info1 = document.querySelector(".info-1");
const info2 = document.querySelector(".info-2");
const info3 = document.querySelector(".info-3");

const changeCard = () => {
  if (viewInfo == 1) {
    info1.classList.remove("hidden");
    info2.classList.add("hidden");
    info3.classList.add("hidden");
  } else if (viewInfo == 2) {
    info1.classList.add("hidden");
    info2.classList.remove("hidden");
    info3.classList.add("hidden");
  } else if (viewInfo == 3) {
    info1.classList.add("hidden");
    info2.classList.add("hidden");
    info3.classList.remove("hidden");
    viewInfo = 0;
  }
};

let viewInfo = 1;
const marioJump = (mario) => {
  mario.classList.add("jumpClass");
  card.classList.add("blockRumble");
  setTimeout(() => {
    viewInfo++;
    changeCard();
    mario.classList.remove("jumpClass");
    card.classList.remove("blockRumble");
  }, 600);
};

button.addEventListener("click", () => marioJump(sprite));

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 32) {
    marioJump(sprite);
  }
});
