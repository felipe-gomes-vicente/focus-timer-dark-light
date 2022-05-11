import { Events } from "./events.js";
import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { Sounds } from "./sounds.js";
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
  icon,
  sunImg,
  moonImg
} from "./elements.js";

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  btnSoundForest,
  btnSoundRain,
  btnSoundCoffeeShop,
  btnSoundFireplace,
  icon,
  sunImg,
  moonImg
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  stopControls: controls.stop
})

const sounds = Sounds()

Events({ controls, timer, sounds });