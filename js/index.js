import { Events } from "./events.js";
import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { Sounds } from "./sounds.js";
// import { Darkomde } from "./darkomde.js";
import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonStop,
  btnSoundForest,
  btnSoundRain,
  btnSoundCoffeeShop,
  btnSoundFireplace,
  btnLight,
  btnDark,
  body
} from "./elements.js";

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  btnSoundForest,
  btnSoundRain,
  btnSoundCoffeeShop,
  btnSoundFireplace,
  btnLight,
  btnDark,
  body
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  stopControls: controls.stop
})

const sounds = Sounds()

// const darkmode = Darkomde({
// })

Events({ controls, timer, sounds,  });
