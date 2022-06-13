let home_score = 0
let guest_score = 0

function reset() {
    home_score = 0
    guest_score = 0
    document.getElementById("home_score").textContent = home_score
    document.getElementById("guest_score").textContent = guest_score
}

function hone() {
    home_score +=1 
    document.getElementById("home_score").textContent = home_score
}
function htwo() {
    home_score +=2 
    document.getElementById("home_score").textContent = home_score
}
function hthree() {
    home_score +=3 
    document.getElementById("home_score").textContent = home_score
}

function gone() {
    guest_score += 1
    document.getElementById("guest_score").textContent = guest_score
}
function gtwo() {
    guest_score += 2
    document.getElementById("guest_score").textContent = guest_score
}
function gthree() {
    guest_score += 3
    document.getElementById("guest_score").textContent = guest_score
}