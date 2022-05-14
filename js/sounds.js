const buttonPressAudio = new Audio(
  "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
);
const kitchenTimer = new Audio(
  "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
);
const bgAudioNature = new Audio("./sounds/Floresta.wav");
const bgAudioRain = new Audio("./sounds/Chuva.wav");
const bgAudioCoffee = new Audio("./sounds/Cafeteria.wav");
const bgAudioFire = new Audio("./sounds/Lareira.wav");

export function Sounds() {
  bgAudioNature.loop = true;
  bgAudioRain.loop = true;
  bgAudioCoffee.loop = true;
  bgAudioFire.loop = true;
  bgAudioNature.volume = 0.5;
  bgAudioRain.volume = 0.5;
  bgAudioCoffee.volume = 0.5;
  bgAudioFire.volume = 0.5;

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  return {
    pressButton,
    timeEnd,
    bgAudioNature,
    bgAudioRain,
    bgAudioCoffee,
    bgAudioFire,
  };
}
