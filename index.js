const ground = document.getElementById("ground");
const score = document.getElementById("score");
const time = document.getElementById("time");
let area;
let moleTimer = 1000;
let showMoleTimer;
let playingTimeTimer;

function gameOver() {
    clearInterval(showMoleTimer);
    clearInterval(playingTimeTimer);
};

function playingTime() {
    time.innerText = Number(time.innerText) +1;
    (time.innerText === "0") && gameOver();
};

function clickListener(event) {
    if (event.target.style.backgroundImage) {
        score.innerText = Number(score.innerText)+1;
        moleTimer -= 5;
    }
    else { score.innerText = Number(score.innerText) };
};

function showMole() {
    const selectedArea = area[Math.floor(Math.random() *area.length)];
    selectedArea.style.backgroundImage = "url('mole.PNG')";
    setTimeout(() => {
        selectedArea.style.backgroundImage=""
    }, moleTimer);
};

function createBoard() {
    for (let i=0; i<3; i++) {
        ground.innerHTML += `<div class="area"><div>`;
    };
    area = document.getElementsByClassName("area");
    [...area].forEach(i => i.addEventListener("click", clickListener));
};

function startGame() {
    createBoard();
    showMoleTimer = setInterval(showMole, moleTimer);
    playingTimeTimer = setInterval(playingTime, 1000);
    
};

startGame();