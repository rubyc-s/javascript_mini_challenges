let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")
let homeScore = 0
let guestScore = 0
homeEl.textContent = 0
guestEl.textContent = 0

function add1Home() {
    homeScore += 1
    homeEl.textContent = homeScore
}
function add2Home() {
    homeScore += 2
    homeEl.textContent = homeScore
}
function add3Home() {
    homeScore += 3
    homeEl.textContent = homeScore
}
//Guest buttons
function add1Guest() {
    guestScore += 1
    guestEl.textContent = guestScore
}
function add2Guest() {
    guestScore += 2
    guestEl.textContent = guestScore
}
function add3Guest() {
    guestScore += 3
    guestEl.textContent = guestScore
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeEl.textContent = 0
    guestEl.textContent = 0
}