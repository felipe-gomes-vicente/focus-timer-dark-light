import { Sounds } from "./sounds.js";
const sounds = Sounds();

export function Controls({
  buttonPause,
  buttonPlay,
  btnSoundForest,
  btnSoundRain,
  btnSoundCoffeeShop,
  btnSoundFireplace,
  sunImg,
  moonImg,
  bgNature,
  bgRain,
  bgCoffee,
  bgFire,
}) {
  let isPlay = true;
  let isDark = true;

  /* ======= Função icon toggle dark mode ========== */
  function iconToggle() {
    if (isDark) {
      isDark = false;
      moonImg.classList.remove("hide");
      sunImg.classList.add("hide");
      document.body.classList.add("dark-theme");
    } else {
      isDark = true;
      sunImg.classList.remove("hide");
      moonImg.classList.add("hide");
      document.body.classList.remove("dark-theme");
    }
  }

  /* ======= Play/Pause Forest/Nature ========== */
  function forestPlay() {
    if (isPlay) {
      isPlay = false;
      sounds.bgAudioNature.play();
      btnSoundForest.classList.add("press");
      btnSoundForest.classList.remove("card");
      bgNature.classList.remove("hide");
      document.body.classList.add("toggle-theme");
    } else {
      isPlay = true;
      sounds.bgAudioNature.pause();
      btnSoundForest.classList.remove("press");
      btnSoundForest.classList.add("card");
      bgNature.classList.add("hide");
      document.body.classList.remove("toggle-theme");
    }
  }

  /* ======= Play/Pause Rain ========== */
  function rainPlay() {
    if (isPlay) {
      isPlay = false;
      sounds.bgAudioRain.play();
      btnSoundRain.classList.remove("card");
      btnSoundRain.classList.add("press");
      document.body.classList.add("toggle-theme");
      bgRain.classList.remove("hide");
    } else {
      isPlay = true;
      sounds.bgAudioRain.pause();
      btnSoundRain.classList.remove("press");
      btnSoundRain.classList.add("card");
      document.body.classList.remove("toggle-theme");
      bgRain.classList.add("hide");
    }
  }

  /* ======= Play/Pause Coffee Shop ========== */
  function coffeeShopPlay() {
    if (isPlay) {
      isPlay = false;
      sounds.bgAudioCoffee.play();
      btnSoundCoffeeShop.classList.remove("card");
      btnSoundCoffeeShop.classList.add("press");
      document.body.classList.add("toggle-theme");
      bgCoffee.classList.remove("hide");
    } else {
      isPlay = true;
      sounds.bgAudioCoffee.pause();
      btnSoundCoffeeShop.classList.remove("press");
      btnSoundCoffeeShop.classList.add("card");
      document.body.classList.remove("toggle-theme");
      bgCoffee.classList.add("hide");
    }
  }

  /* ======= Play/Pause Fireplace ========== */
  function fireplacePlay() {
    if (isPlay) {
      isPlay = false;
      sounds.bgAudioFire.play();
      btnSoundFireplace.classList.remove("card");
      btnSoundFireplace.classList.add("press");
      document.body.classList.add("toggle-theme");
      bgFire.classList.remove("hide");
    } else {
      isPlay = true;
      sounds.bgAudioFire.pause();
      btnSoundFireplace.classList.remove("press");
      btnSoundFireplace.classList.add("card");
      document.body.classList.remove("toggle-theme");
      bgFire.classList.add("hide");
    }
  }

  /* ======= Play/Pause controls timer ========== */
  function play() {
    buttonPause.classList.remove("hide");
    buttonPlay.classList.add("hide");
  }

  /* ======= Pause controls timer ========== */
  function pause() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  /* ======= Stop controls timer ========== */
  function stop() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  return {
    play,
    pause,
    stop,
    forestPlay,
    rainPlay,
    coffeeShopPlay,
    fireplacePlay,
    iconToggle,
  };
}
