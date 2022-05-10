import { Sounds } from "./sounds.js";
const sounds = Sounds()

export function Controls({
  buttonPause,
  buttonPlay,
  btnSoundForest,
  btnSoundRain,
  btnSoundCoffeeShop,
  btnSoundFireplace,
}) {
  let isPlay = true

  function forestPlay() {
    if (isPlay) {
      isPlay = false
      sounds.forestAudio.play()
      btnSoundForest.classList.remove('card')
      btnSoundForest.classList.add('press')
    } else {
      isPlay = true
      sounds.forestAudio.pause()
      btnSoundForest.classList.remove('press')
      btnSoundForest.classList.add('card')
    }
  }
  
  function rainPlay() {
    if (isPlay) {
      isPlay = false
      sounds.rainAudio.play()
      btnSoundRain.classList.remove('card') 
      btnSoundRain.classList.add('press')
    } else {
      isPlay = true
      sounds.rainAudio.pause()
      btnSoundRain.classList.remove('press') 
      btnSoundRain.classList.add('card')
    }
  }

  function coffeeShopPlay() {
    if (isPlay) {
      isPlay = false
      sounds.coffeeShopAudio.play()
      btnSoundCoffeeShop.classList.remove('card')
      btnSoundCoffeeShop.classList.add('press')
    } else {
      isPlay = true
      sounds.coffeeShopAudio.pause()
      btnSoundCoffeeShop.classList.remove('press') 
      btnSoundCoffeeShop.classList.add('card')
    }
  }
  
  function fireplacePlay() {
    if (isPlay) {
      isPlay = false
      sounds.fireplaceAudio.play()
      btnSoundFireplace.classList.remove('card')
      btnSoundFireplace.classList.add('press')
    } else {
      isPlay = true
      sounds.fireplaceAudio.pause()
      btnSoundFireplace.classList.remove('press') 
      btnSoundFireplace.classList.add('card')
    }
  }


  function play() {
    buttonPause.classList.remove('hide')
    buttonPlay.classList.add('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function stop() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }


  
  return {
    play,
    pause,
    stop,
    forestPlay,
    rainPlay,
    coffeeShopPlay,
    fireplacePlay
  }
}