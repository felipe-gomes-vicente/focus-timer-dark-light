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


export function Events({ controls, timer }) {
  buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
  })
  
  buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
  })

  buttonStop.addEventListener('click', function(){
    controls.stop()
    timer.stop()
  })

  buttonIncrement.addEventListener('click', function(){
    timer.increment()
  })

  buttonDecrement.addEventListener('click', function(){
    timer.decrement()
  })

}