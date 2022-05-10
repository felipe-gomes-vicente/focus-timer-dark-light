export function Sounds() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const forestAudio = new Audio("./sounds/Floresta.wav")
  const rainAudio = new Audio("./sounds/Chuva.wav")
  const coffeeShopAudio = new Audio("./sounds/Cafeteria.wav")
  const fireplaceAudio = new Audio("./sounds/Lareira.wav")

  let isPlay = true
  forestAudio.loop = true
  rainAudio.loop = true
  coffeeShopAudio.loop = true
  fireplaceAudio.loop = true
  
  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }
  
  function forestPlay() {
    if (isPlay) {
      isPlay = false
      forestAudio.play()
    } else {
      isPlay = true
      forestAudio.pause()
    }
  }
  
  function rainPlay() {
    if (isPlay) {
      isPlay = false
      rainAudio.play()
    } else {
      isPlay = true
      rainAudio.pause()
    }
  }
  
  function coffeeShopPlay() {
    if (isPlay) {
      isPlay = false
      coffeeShopAudio.play()
    } else {
      isPlay = true
      coffeeShopAudio.pause()
    }
  }
  
  function fireplacePlay() {
    if (isPlay) {
      isPlay = false
      fireplaceAudio.play()
    } else {
      isPlay = true
      fireplaceAudio.pause()
    }
  }


  return {
    pressButton,
    timeEnd,
    forestPlay,
    rainPlay,
    coffeeShopPlay,
    fireplacePlay
  }

}