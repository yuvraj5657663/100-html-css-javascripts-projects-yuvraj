const startE1 = document.getElementById("start");
const breakE1 = document.getElementById("break");
const resetE1 = document.getElementById("reset");
const timerE1 = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timerE1.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up! ");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}
function resetTimer() {
    clearInterval(interval);
}
function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

startE1.addEventListener("click", startTimer);
breakE1.addEventListener("click", stopTimer);
resetE1.addEventListener("click", resetTimer);