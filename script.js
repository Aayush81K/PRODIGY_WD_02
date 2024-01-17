let startTime;
let stopwatchInterval;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now();
        stopwatchInterval = setInterval(updateDisplay, 1000);
        isRunning = true;
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    isRunning = false;
}

function resetStopwatch() {
    stopStopwatch();
    document.getElementById('display').textContent = '00:00:00';
}

function updateDisplay() {
    const currentTime = new Date(Date.now() - startTime);
    const hours = currentTime.getUTCHours().toString().padStart(2, '0');
    const minutes = currentTime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getUTCSeconds().toString().padStart(2, '0');

    document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}`;
}
