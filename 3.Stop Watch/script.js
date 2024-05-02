// let [seconds,minutes,hours]=[0,0,0];

// let displayTime=document.getElementById('displayTime');
// let timer = null;
// function stopWatch(){
//     // let seconds,minutes,hours=0
//      seconds++;
//     if(seconds == 60){
//         seconds=0;
//         minutes++;
//     }
//     if(minutes == 60){
//         minutes=0;
//         hours++;
//     }

//     let h = (hours<10) ? "0" + hours : hours;
//     let m = (minutes<10) ? "0" + minutes : minutes;
//     let s = (seconds<10) ? "0" + seconds : seconds;

//     displayTime.innerHTML = h + ":" + m + ":"+s;
// }

// function watchStart(){
//     if(timer!==null)
//     {
//         clearInterval(timer);
//     }

//     timer = setInterval(stopWatch,1000);
// }

// function buttonStop()
// {
//     clearInterval(timer);
// }

// function buttonReset()
// {
//     clearInterval(timer);
//     hours=0;minutes=0;seconds=0;
//     let h = (hours<10) ? "0" + hours : hours;
//     let m = (minutes<10) ? "0" + minutes : minutes;
//     let s = (seconds<10) ? "0" + seconds : seconds;
//     displayTime.innerHTML = h + ":" + m + ":"+s;
// }

// function fastforward(){
//     if(timer!==null)
//     {
//         clearInterval(timer);
//     }

//     timer = setInterval(stopWatch,1);
// }

// function fastbackward()
// {
//     if(timer!==null)
//     {
//         clearInterval(timer);
//     }
//     timer= setInterval(function(){
//         if(seconds===0 && minutes===0 && hours==0){
//             clearInterval(timer);
//             return;
//         }
//         const decrementValue = 5;
//         seconds -= decrementValue;
//     if(seconds < 0){
//         seconds = 0;
//         minutes--;
//         if(minutes < 0){
//             minutes = 0;
//             hours--;
//             if(hours < 0){
//                 hours = 0;
//             }
//         }
//     }

//     let h = (hours<10) ? "0" + hours : hours;
//     let m = (minutes<10) ? "0" + minutes : minutes;
//     let s = (seconds<10) ? "0" + seconds : seconds;

//     displayTime.innerHTML = h + ":" + m + ":"+s;

//     },35);
// }






let [seconds,minutes,hours]=[0,0,0];

let displayTime=document.getElementById('displayTime');
let timer = null;
let backward =false;
function stopWatch(){
    if(!backward){
    // let seconds,minutes,hours=0
     seconds++;
    if(seconds == 60){
        seconds=0;
        minutes++;
    }
    if(minutes == 60){
        minutes=0;
        hours++;
    }

}
else
{
    if(seconds===0 && minutes===0 && hours==0){
        clearInterval(timer);
        return;
    }
    const decrementValue = 5;
    seconds -= decrementValue;
    if(seconds < 0){
        seconds = 0;
        minutes--;
        if(minutes < 0){
            minutes = 0;
            hours--;
            if(hours < 0){
                hours = 0;
            }
        }
    }
}
    let h = (hours<10) ? "0" + hours : hours;
    let m = (minutes<10) ? "0" + minutes : minutes;
    let s = (seconds<10) ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":"+s;
}

function watchStart(){
    if(timer!==null)
    {
        clearInterval(timer);
    }

    timer = setInterval(stopWatch,1000);
}

function buttonStop()
{
    clearInterval(timer);
}

function buttonReset()
{
    clearInterval(timer);
    hours=0;minutes=0;seconds=0;
    let h = (hours<10) ? "0" + hours : hours;
    let m = (minutes<10) ? "0" + minutes : minutes;
    let s = (seconds<10) ? "0" + seconds : seconds;
    displayTime.innerHTML = h + ":" + m + ":"+s;
}

function fastforward(){
    if(timer!==null)
    {
        clearInterval(timer);
    }

    timer = setInterval(stopWatch,1);
}

function fastbackward()
{
    if(timer!==null)
    {
        clearInterval(timer);
    }
    backward = true;

    timer = setInterval(stopWatch,35);
}