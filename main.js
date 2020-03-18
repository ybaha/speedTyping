
///DOM ELEMENTS
const text = document.getElementById("text");
const input = document.getElementById("input");
const button = document.getElementById("restart-button");
const timeLabel = document.getElementById("time-counter");
const scoreLabel = document.getElementById("score");
const gameOverText = document.getElementById("game-over");
const levelSelect = document.getElementById("select");
const highScoreLabel = document.getElementById("highscore");

////

var isPlaying = 0;
var level = 4;
var score = 0;
var highScore = 0;
var interval;
var timeLeft = level;

checkStart();

input.addEventListener("input", (event) => {
    event.target.value = event.target.value.toLowerCase();
    input.value = input.value.replace(/\s/g, "");
});

levelSelect.addEventListener("change", (event) => {
    setDifficulty();
});


function checkStart(){
    interval = setInterval(() => {
        if(input.value == "go"){
            initAll();
            //console.log("checkstart");
        }
    }, 100);
}


function initAll(){
    //console.log(isPlaying);
    isPlaying = 1;
    gameOverText.style = "none";
    clearInterval(interval);
    randomWord();
    input.value = "";
    setInterval(typedCorrect,50);
    timeCounter();
}


function randomWord(){
    let curIndex = Math.floor(Math.random()*words.length);
    text.innerHTML = words[curIndex];
}

function timeCounter(){
    timeLabel.innerHTML = timeLeft;
    let counter = setInterval( () => {
        if(timeLeft == 0){
            isPlaying = 0;
            checkStart();
            timeLeft = level;
            timeLabel.innerHTML = timeLeft;
            gameOverText.style.display = "block"
            if(score>highScore) highScore = score;
            highScoreLabel.innerHTML = "High Score: " + highScore;
            score = 0;
            text.innerHTML = 'type "go" to start';
            clearInterval(counter);
        }
        else{
            timeLeft--;
            timeLabel.innerHTML = timeLeft;
        };
    },1000);
}

function typedCorrect(){
    if(isPlaying == 1){
        if(input.value == text.innerHTML){
            score++;
            timeLeft += 1;
            scoreLabel.innerHTML = "score: " + score; 
            input.value = "";
            randomWord();
        }
    }
}


function setDifficulty(){
    //console.log(levelSelect.selectedIndex);
    switch(levelSelect.selectedIndex){
        case 0:
            level = 4;
            break;
        case 1:
            level = 3;
            break;
        case 2:
            level = 2;
            break;
    }
    timeLeft = level;
}


