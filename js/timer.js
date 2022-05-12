import { Sounds } from "./sounds.js";

export function Timer({
  minutesDisplay,
  secondsDisplay,
  stopControls,
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  /* ======= Update Display ========== */
  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds 
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  /* ======= Stop ========== */
  function stop(){
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  
  /* ======= Countdown ========== */
  function countdown(){
    timerTimeOut = setTimeout(function(){
        let seconds =  Number(secondsDisplay.textContent)
        let minutes =  Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0

        updateDisplay(minutes, 0)
  
        if(isFinished) {
          stopControls()
          updateDisplay()
          Sounds().timeEnd()
          return
        }
  
        if(seconds <= 0) {
          seconds = 5
          --minutes
        }
  
        updateDisplay(minutes, String(seconds - 1))
  
        countdown()
      }, 1000)
  }

  /* ======= Pause countdown timer ========== */
  function hold() {
    clearTimeout(timerTimeOut)
  }

  /* ======= Add time countdown  ========== */
  function increment() {
    minutes = minutes < 25 ? Number(minutes) + 5 : (minutes = 25);

    updateDisplay(minutes, 0);
  }

  /* ======= Decrement time countdown  ========== */
  function decrement() {
    minutes = minutes > 5 ? Number(minutes) - 5 : (minutes = 0);

    updateDisplay(minutes, 0);
  }

  return {
    countdown,
    stop,
    hold,
    increment,
    decrement,
    updateDisplay,
  }

}