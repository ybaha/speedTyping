
///DOM ELEMENTS
const text = document.getElementById("text");
const input = document.getElementById("input");
const button = document.getElementById("restart-button");
const timeLabel = document.getElementById("time-counter");
const scoreLabel = document.getElementById("score");
const gameOverText = document.getElementById("game-over");
const levelSelect = document.getElementById("select");
////

var words = ["belt","mercy","table","grade","template","love","shader","gloves","cannon","faster","robot"];
var isPlaying = 0;
var level = 4;
var score = 0;
var interval;

checkStart();

input.addEventListener("input", (event) => {
    event.target.value = event.target.value.toLowerCase();
});

levelSelect.addEventListener("change", (event) => {
    setDifficulty();
});


function checkStart(){
    interval = setInterval(() => {
        if(input.value == text.innerHTML){
            initAll();
            console.log("checkstart");
        }
    }, 100);
}


function initAll(){
    console.log(isPlaying);
    isPlaying = 1;
    gameOverText.style = "none";
    clearInterval(interval);
    setInterval(typedCorrect,50);
    timeCounter();
}


function randomWord(){
    let curIndex = Math.floor(Math.random()*words.length);
    text.innerHTML = words[curIndex];
}

function timeCounter(){
    var time = level;
    timeLabel.innerHTML = time;
    let counter = setInterval( () => {
        console.log("timeCounter");
        
        if(time == 0){
            isPlaying = 0;
            button.innerHTML = "RESTART";
            checkStart();
            time = level;
            timeLabel.innerHTML = time;
            gameOverText.style.display = "block"
            score = 0;
            clearInterval(counter);
        }
        else{
            time--;
            timeLabel.innerHTML = time;
        };
    },1000);
}

function typedCorrect(){
    if(isPlaying == 1){
        if(input.value == text.innerHTML){
            score++;
            scoreLabel.innerHTML = "score: " + score; 
            input.value = "";
            randomWord();
        }
    }
}


function setDifficulty(){
    console.log(levelSelect.selectedIndex);
    
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
}

