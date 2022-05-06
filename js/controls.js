export function Controls({
  buttonPause,
  buttonPlay,
}) {

  function play() {
    buttonPause.classList.remove('hide')
    buttonPlay.classList.add('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }


  
  return {
    play,
    pause
  }
}