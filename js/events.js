import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrement,
  buttonDecrement,
  btnSoundForest,
  btnSoundRain,
  btnSoundCoffeeShop,
  btnSoundFireplace,
  icon,
  volForest,
  volRain,
  volCoffeeShop,
  volFireplace,
} from "./elements.js";

export function Events({ controls, timer, sounds }) {
  /* ======= Event Click Play controls timer ========== */
  buttonPlay.addEventListener("click", function () {
    controls.play();
    timer.countdown();
    sounds.pressButton();
  });

  /* ======= Event Click Pause controls timer ========== */
  buttonPause.addEventListener("click", function () {
    controls.pause();
    timer.hold();
    sounds.pressButton();
  });

  /* ======= Event Click Stop controls timer ========== */
  buttonStop.addEventListener("click", function () {
    controls.stop();
    timer.stop();
    sounds.pressButton();
  });

  /* ======= Event Click Add/Increment time controls timer ========== */
  buttonIncrement.addEventListener("click", function () {
    timer.increment();
    sounds.pressButton();
  });

  /* ======= Event Click Decrement time controls timer ========== */
  buttonDecrement.addEventListener("click", function () {
    timer.decrement();
    sounds.pressButton();
  });

  /* ======= Event Click Sound Forest/Nature  ========== */
  btnSoundForest.addEventListener("click", function () {
    controls.forestPlay();
  });

  /* ======= Event Click Sound Rain  ========== */
  btnSoundRain.addEventListener("click", function () {
    controls.rainPlay();
  });

  /* ======= Event Click Sound Coffee Shop  ========== */
  btnSoundCoffeeShop.addEventListener("click", function () {
    controls.coffeeShopPlay();
  });

  /* ======= Event Click Fireplace ========== */
  btnSoundFireplace.addEventListener("click", function () {
    controls.fireplacePlay();
  });

  /* ======= Event Click icon toggle dark mode  ========== */
  icon.onclick = function () {
    controls.iconToggle();
  };

  /* ======= Event Volume  ========== */
  volForest.addEventListener("input", () => {
    sounds.bgAudioNature.volume = volForest.value;
  });

  volRain.addEventListener("input", () => {
    sounds.bgAudioRain.volume = volRain.value;
  });

  volCoffeeShop.addEventListener("input", () => {
    sounds.bgAudioCoffee.volume = volCoffeeShop.value;
  });

  volFireplace.addEventListener("input", () => {
    sounds.bgAudioFire.volume = volFireplace.value;
  });
}
