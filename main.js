
///DOM ELEMENTS
const text = document.getElementById("text");
const input = document.getElementById("input");
const button = document.getElementById("restart-button");
const timer = document.getElementById("time-counter");
const scoreLabel = document.getElementById("score");
const gameOverText = document.getElementById("game-over");
////

var words = ["belt","mercy","table","grade","template","love","shader","gloves","cannon","faster","robot"];
var isPlaying = 0;
var level = 2;
var score = 0;
var interval;

checkStart();

function checkStart(){
    interval = setInterval(() => {
        if(input.value == text.innerHTML){
            initAll();
            console.log("checkstart");
        }
    }, 100);
}


/// RANDOM TEXT GENERATING ///


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
    timer.innerHTML = time;
    let counter = setInterval( () => {
        console.log("timeCounter");
        
        if(time == 0){
            isPlaying = 0;
            button.innerHTML = "RESTART";
            checkStart();
            time = level;
            timer.innerHTML = time;
            gameOverText.style.display = "block"
            score = 0;
            clearInterval(counter);
        }
        else{
            time--;
            timer.innerHTML = time;
        };
        //console.log(time);
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


