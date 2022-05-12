import { Sounds } from "./sounds.js";
const sounds = Sounds()

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
  bgFire
}) {
  let isPlay = true
  let isDark = true

  function iconToggle() {
    
    if(isDark){
      isDark = false;
      moonImg.classList.remove('hide')
      sunImg.classList.add('hide')
      document.body.classList.add("dark-theme");
    } else {
      isDark = true;
      sunImg.classList.remove('hide')
      moonImg.classList.add('hide')
        document.body.classList.remove("dark-theme");
    }
  }


  function forestPlay() {
    if (isPlay) {
      isPlay = false
      sounds.forestAudio.play()
      btnSoundForest.classList.add('press')
      btnSoundForest.classList.remove('card')
      bgNature.classList.remove('hide')
      document.body.classList.add("toggle-theme");
  
    } else {
      isPlay = true
      sounds.forestAudio.pause()
      btnSoundForest.classList.remove('press')
      btnSoundForest.classList.add('card')
      bgNature.classList.add('hide')
      document.body.classList.remove("toggle-theme");
    }
  }
  
  function rainPlay() {
    if (isPlay) {
      isPlay = false
      sounds.rainAudio.play()
      btnSoundRain.classList.remove('card') 
      btnSoundRain.classList.add('press')
      document.body.classList.add("toggle-theme");
      bgRain.classList.remove('hide')
    } else {
      isPlay = true
      sounds.rainAudio.pause()
      btnSoundRain.classList.remove('press') 
      btnSoundRain.classList.add('card')
      document.body.classList.remove("toggle-theme");
      bgRain.classList.add('hide')
    }
  }

  function coffeeShopPlay() {
    if (isPlay) {
      isPlay = false
      sounds.coffeeShopAudio.play()
      btnSoundCoffeeShop.classList.remove('card')
      btnSoundCoffeeShop.classList.add('press')
      document.body.classList.add("toggle-theme");
      bgCoffee.classList.remove('hide')
    } else {
      isPlay = true
      sounds.coffeeShopAudio.pause()
      btnSoundCoffeeShop.classList.remove('press') 
      btnSoundCoffeeShop.classList.add('card')
      document.body.classList.remove("toggle-theme");
      bgCoffee.classList.add('hide')
    }
  }
  
  function fireplacePlay() {
    if (isPlay) {
      isPlay = false
      sounds.fireplaceAudio.play()
      btnSoundFireplace.classList.remove('card')
      btnSoundFireplace.classList.add('press')
      document.body.classList.add("toggle-theme");
      bgFire.classList.remove('hide')
    } else {
      isPlay = true
      sounds.fireplaceAudio.pause()
      btnSoundFireplace.classList.remove('press') 
      btnSoundFireplace.classList.add('card')
      document.body.classList.remove("toggle-theme");
      bgFire.classList.add('hide')
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
    fireplacePlay,
    iconToggle
  }
}