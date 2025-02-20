let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "blue", "red", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = []; 
    level++;
    h2.innerText = `Level ${level}`;

    
    let random = Math.floor(Math.random() * 3);
    let randomColor = btns[random];
    let randombtn = document.querySelector(`.${randomColor}`);
    // console.log(random);
    // console.log(randomColor);
    // console.log(randombtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randombtn);
}
function checkAnswer(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game is over! Your score was <b> ${level} </b> <br>press any key to start.`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
       },150);
        reset();


    }
}
function btnPress(){
    
    let btn = this;
    userFlash(btn);

    userColor =btn.getAttribute("id");
    userSeq.push(userColor);

    checkAnswer(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnPress);

}
function reset(){
    started = false;
    gameSeq = [];
    userSeq=[];
    level = 0;
}
