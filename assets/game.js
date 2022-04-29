var TimeDisplay = document.querySelector(".TimeDisplay")
var TimeLeft = 60


function DisplayTimeLeft (){
var Timer = setInterval(() => {
        TimeDisplay.textContent = "Time Remaining: " + TimeLeft--

    if (TimeLeft < 0){
        clearInterval(Timer)
       setTimeout(() => {
        window.location.href="Gameover.html"    
       }, 3000);
    } 

    }, 1000);
}

DisplayTimeLeft();

