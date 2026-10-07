let homeTeamDisplay = document.getElementById("homeTeamDisplay")
let awayTeamDisplay = document.getElementById("awayTeamDisplay")
let timer = document.getElementById("timer")

let addOneHomeBtn = document.getElementById("add1home")
let addTwoHomeBtn = document.getElementById("add2home")
let addThreeHomeBtn = document.getElementById("add3home")

let addOneAwayBtn = document.getElementById("add1away")
let addTwoAwayBtn = document.getElementById("add2away")
let addThreeAwayBtn = document.getElementById("add3away")

let startbtn = document.getElementById("start-game")
let timeoutBtn = document.getElementById("timeout")
let endBtn = document.getElementById("end-game")


// Home team logic

addOneHomeBtn.addEventListener("click", addOneHome)
addTwoHomeBtn.addEventListener("click", addTwoHome)
addThreeHomeBtn.addEventListener("click", addThreeHome)

let scoreHome = 0

function addOneHome(){
    scoreHome += 1
    homeTeamDisplay.textContent = scoreHome
}

function addTwoHome(){
    scoreHome += 2
    homeTeamDisplay.textContent = scoreHome
}

function addThreeHome(){
    scoreHome += 3
    homeTeamDisplay.textContent = scoreHome
}

// Away team logic

addOneAwayBtn.addEventListener("click", addOneAway)
addTwoAwayBtn.addEventListener("click", addTwoAway)
addThreeAwayBtn.addEventListener("click", addThreeAway)

let scoreAway = 0

function addOneAway(){
    scoreAway += 1
    awayTeamDisplay.textContent = scoreAway
}

function addTwoAway(){
    scoreAway += 2
    awayTeamDisplay.textContent = scoreAway
}

function addThreeAway(){
    scoreAway += 3
    awayTeamDisplay.textContent = scoreAway
}

// Timer
let timeRemaining = 2880
let timeInterval = null
let timeoutTime = 75
let isTimeOutActive = false;


startbtn.addEventListener("click", startGame)
timeoutBtn.addEventListener("click", timeout)
endBtn.addEventListener("click", endGame)


// helper to format any amount of seconds into MM:SS
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds/60)
    const seconds = totalSeconds % 60
    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(seconds).padStart(2, '0')
    
    return `${formattedMinutes}:${formattedSeconds}`
}


function updateDisplay() {
    if(isTimeOutActive) {
        // Display the timeout countdown 
        timer.textContent = `TIMEOUT: ${formatTime(timeoutTime)}`
    } else {
        // Display regular game clock
        timer.textContent = formatTime(timeRemaining)
    }
}

function startGame() {
    if(timeInterval !== null) return

    timeInterval = setInterval(() => {
        if(isTimeOutActive) {
            // TIMEOUT ACTIVE
            if(tiomeoutTime > 0) {
                timeoutTime--
                updateDisplay()
            } else {
                // Timeout ends and the game resumes on the nect time tick
                isTimeOutActive = false
                // Reset timeout for the next timeout
                timeoutTime = 75
                updateDisplay()
                timer.textContent = `TIMEOUT OVER`
            }
        } else {
            //Normal game mode timer
            if(timeRemaining > 0) {
                timeRemaining--
                updateDisplay()
            } else {
                clearInterval(timeInterval)
                timeInterval = null
                timer.textContent = `FULL TIME`
            }
        }
    }, 1000)
}

function timeout() {
    // Only allow timeout if the timer is running
    if (timeInterval === null) {
        alert("Press Start")
        return
    }
    // Prevent overriding an already running timeout
    if(isTimeOutActive) return

    isTimeOutActive = true
    updateDisplay()
}

// End button logic
function stopTimer() {
    clearInterval(timeInterval)
    timeInterval = null
}

function endGame() {
    scoreHome = 0
    scoreAway = 0

    homeTeamDisplay.textContent = scoreHome
    awayTeamDisplay.textContent = scoreAway

    // Reset timer & timeout states completely
    timeRemaining = 2880
    timeoutTime -75
    isTimeOutActive = false

    stopTimer()
    updateDisplay()
}
