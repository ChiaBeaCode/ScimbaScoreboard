let homeScoreCount = 0
let guestScoreCount = 0

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let resetBtn = document.getElementById("reset-btn");

function addOneHome() {
    homeScoreCount += 1
    homeScore.textContent = homeScoreCount
}

function addTwoHome() {
    homeScoreCount += 2
    homeScore.textContent = homeScoreCount
}

function addThreeHome() {
    homeScoreCount += 3
    homeScore.textContent = homeScoreCount
}

function addOneGuest() {
    guestScoreCount += 1
    guestScore.textContent = guestScoreCount
}

function addTwoGuest() {
    guestScoreCount += 2
    guestScore.textContent = guestScoreCount
}

function addThreeGuest() {
    guestScoreCount += 3
    guestScore.textContent = guestScoreCount
}

function clearBtn() {
    guestScore.textContent = 0;
    guestScoreCount = 0;
    homeScoreCount = 0;
    homeScore.textContent = 0;
}