const timeInput = document.getElementById('timeInput');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

let minutes = 0;
let seconds = 0;
let timer = null;

function updateTimerDisplay() {
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function decrementTimer() {
    if (seconds === 0 && minutes > 0) {
      minutes = minutes-1;
      seconds = 59;
    } else {
      seconds = seconds-1;
    }
    updateTimerDisplay();
    if (minutes === 0 && seconds === 0) {
      clearInterval(timer);
      alert('Time is up!');
      timeInput.value = '';
      timer = null;
    }
}

function startTimer() {
    if (timer) return; 
    const timeInputValue = timeInput.value.trim();
    if (timeInputValue === '') {
        alert('Please enter a valid time.');
        return;
    }
    const minutesValue = parseInt(timeInputValue);
    if (minutesValue < 1 || minutesValue > 60) {
        alert('Please enter a time between 1 and 60 minutes.');
        return;
    }
    minutes = parseInt(timeInput.value);
    seconds = 0;
    updateTimerDisplay();
    timer = setInterval(decrementTimer, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    minutes = 0;
    seconds = 0;
    updateTimerDisplay();
    timeInput.value = '';
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
