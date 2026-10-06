let homeTeamDisplay = document.getElementById("homeTeamDisplay")
let awayTeamDisplay = document.getElementById("awayTeamDisplay")
let timer = 

let addOneHomeBtn = document.getElementById("add1home")
let addTwoHomeBtn = document.getElementById("add2home")
let addThreeHomeBtn = document.getElementById("add3home")

let addOneAwayBtn = document.getElementById("add1away")
let addTwoAwayBtn = document.getElementById("add2away")
let addThreeAwayBtn = document.getElementById("add3away")

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

// End button

endBtn.addEventListener("click", endGame)

function endGame(){
    scoreHome = 0
    scoreAway = 0

    homeTeamDisplay.textContent = scoreHome
    awayTeamDisplay.textContent = scoreAway
}

// Timer
