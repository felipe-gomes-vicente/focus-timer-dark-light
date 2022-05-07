import { Events } from "./events.js";
import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonStop
} from "./elements.js";

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  stopControls: controls.stop
})

Events({ controls, timer });
