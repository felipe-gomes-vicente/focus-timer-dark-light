import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrement,
  buttonDecrement,
  btnSoundForest,
  btnSoundRain,
  btnSoundCoffeeShop,
  btnSoundFireplace,
} from "./elements.js"


export function Events({ controls }) {
  buttonPlay.addEventListener('click', function(){
    controls.play()
  })
  
  buttonPause.addEventListener('click', function(){
    controls.pause()
  })
  

}