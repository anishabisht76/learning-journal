let i = 1;
let intervalId;
h1 = document.querySelector("h1");

startButton = document.querySelector("#start");
stopButton = document.querySelector("#stop");



startButton.addEventListener("click",()=>{
    let printNum = function (){
        h1.innerText = i;
        i++;
    }
    intervalId = setInterval(printNum,100);
});

stopButton.addEventListener("click",()=>{
    //  h1.innerText = i;
    clearInterval(intervalId);
    
});