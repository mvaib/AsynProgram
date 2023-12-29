let Second = document.getElementById("second");
let Hour = document.getElementById("hour");
let Minute = document.getElementById("minute");
let startbtn = document.getElementById("start")
let pausetbtn = document.getElementById("pause")
let restartbtn = document.getElementById("restart")
let timer;
function start(){
    if(Second.value == "" && Minute.value == "" && Hour.value == ""){
        alert("Pease enter the no").disabled = false;
        alert("Times up").disabled = true;
    }
    timer = setInterval(()=>{
        if(Second.value <= 0 && Minute.value <= 0 && Hour.value <= 0){
            clearInterval(timer)
            alert("Times up").disabled = false
        }
        else if(Second.value == 0 && Minute.value == 0){
            Hour.value--;
            Minute.value = 59;
            Second.value = 59;
        }
        else if(Second.value == 0){
            Minute.value--;
            Second.value = 59;
        }
        else{
            Second.value--;
        }
        console.log(Second.value)
    },1000)
    startbtn.disabled = true;
    pausetbtn.disabled = false;
}
function pause(){
    clearInterval(timer)
    startbtn.disabled = false;
    pausetbtn.disabled = true;
}
function restart(){
    clearInterval(timer);
    Second.value = ""
    Minute.value = ""
    Hour.value = ""
    startbtn.disabled = false;
    pausetbtn.disabled = false;
    restartbtn.disabled = false;


}


