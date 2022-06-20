let home_score = 0
let guest_score = 0

function reset() {
    home_score = 0
    guest_score = 0
    document.getElementById("home_score").textContent = home_score
    document.getElementById("guest_score").textContent = guest_score
}

function addToHome(point) {
    home_score += point
    document.getElementById("home_score").textContent = home_score
}

function addToAway(point) {
    guest_score += point
    document.getElementById("guest_score").textContent = guest_score
}