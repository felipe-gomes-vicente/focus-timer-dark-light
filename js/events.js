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
  btnLight,
  btnDark
} from "./elements.js"


export function Events({ controls, timer, sounds }) {
  buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
    sounds.pressButton()
  })
  
  buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
    sounds.pressButton()
  })

  buttonStop.addEventListener('click', function(){
    controls.stop()
    timer.stop()
    sounds.pressButton()
  })

  buttonIncrement.addEventListener('click', function(){
    timer.increment()
    sounds.pressButton()
  })

  buttonDecrement.addEventListener('click', function(){
    timer.decrement()
    sounds.pressButton()
  })

  btnSoundForest.addEventListener('click', function(){
    controls.forestPlay()
  })

  btnSoundRain.addEventListener('click', function(){
    controls.rainPlay()
  })

  btnSoundCoffeeShop.addEventListener('click', function(){
    controls.coffeeShopPlay()
  })

  btnSoundFireplace.addEventListener('click', function(){
    controls.fireplacePlay()
  })

  btnLight.addEventListener('click', function(){
    controls.lightMode()
  })

  btnDark.addEventListener('click', function(){
    controls.darkMode()
  })

}