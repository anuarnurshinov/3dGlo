const timer = (deadline) => {
    const timerHours = document.querySelector('#timer-hours')
    const timerMinutes = document.querySelector('#timer-minutes')
    const timerSeconds = document.querySelector('#timer-seconds')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)
        return {
            timeRemaining,
            hours,
            minutes,
            seconds,
        }
    }
    const updateClock = () => {
        let gateTime = getTimeRemaining('05 jule 2022')
        console.log(gateTime);
        timerHours.textContent = gateTime.hours
        timerMinutes.textContent = gateTime.minutes
        timerSeconds.textContent = gateTime.seconds
        if (getTimeRemaining.timeRemaining > 0) {
            setTimeout(updateClock, 1000)
        }

        setTimeout(updateClock, 1000)
    }
    updateClock()
}
export default timer