let Display = document.getElementById("display");
let [second,minutes,hours] = [0,0,0];
let timer = null;

function stopWatch(){
    second++;
    if(second === 60){
        second = 0;
        minutes++
    }
    if(minutes === 60){
        minutes = 0;
        hours++;     
        
    }

    let sec = second;
    let min = minutes;
    let hr = hours;

    if(hr < 10){
        hr = "0"+hr;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0"+sec;
    }

    Display.innerHTML = hr + ":" + min + ":" + sec
}

function start(){
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(stopWatch,1000);
    // console.log(timer)
}
function stop(){
    clearInterval(timer)
    // console.log(timer)
}
function reset(){
    clearInterval(timer);
    [second,minutes,hours] = [0,0,0]
    Display.innerHTML = "00:00:00"
}

