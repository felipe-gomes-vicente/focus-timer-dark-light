import { Events } from "./events.js";
import { Controls } from "./controls.js";
import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrement,
  buttonDecrement,
} from "./elements.js";

const controls = Controls({
  buttonPause,
  buttonPlay
})

Events({ controls });
