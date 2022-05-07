export function Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
}) {

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
    stop
  }
}