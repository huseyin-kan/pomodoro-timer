//#DC0000 #16FF00
const mainBox = document.getElementById('mainBox')
const min = document.getElementById('min')
const sec = document.getElementById('sec')
const submit = document.getElementById("submitHandler")
const edit = document.getElementById('editHandler')
const icon = document.getElementById('icon')
const info = document.getElementById('settingsInfo')

var audio = new Audio('./audio.wav')
var clicked = false
var settingsClicked = false


function start(){
    submit.innerHTML = "START"
    mainBox.style.borderColor = "#DC0000"
}

function stop(){
    submit.innerHTML = "STOP"
    mainBox.style.borderColor = "#16FF00"
}


submit.addEventListener("click",function(){
    if(clicked){
        start()
    }else{  
        timing()
        stop()
    }
    clicked = !clicked
})

function timing(){
    
    var interval = setInterval(() => {
            var total = parseInt(min.value*60) + parseInt(sec.value)-1
            var mins = Math.floor(total/60)%60
            var secs = Math.floor(total) % 60
            min.value = zeroPlus(mins)
            sec.value = zeroPlus(secs)   
            if(!clicked || total === 0 || settingsClicked){
                clearInterval(interval)
                if(total === 0){
                    audio.play()
                }
                start()
            } 
         }, 1000);
}

function zeroPlus(time){
    return time < 10 ? `0${time}`:time
}

edit.addEventListener("click",function(){
    if(settingsClicked){
        icon.className = "fa-solid fa-cog "
        min.readOnly = true
        sec.readOnly = true
        info.innerHTML = ""
        start()
    }
    else{
        icon.className = "fa-solid fa-cog fa-spin";
        min.readOnly = false
        sec.readOnly = false
        info.innerHTML = "You can change your time now"
    }
    settingsClicked = !settingsClicked
})

