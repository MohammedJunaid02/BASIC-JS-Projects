const date = document.getElementById("date");
date.max =  new Date().toISOString().split("T")[0];

//this is to put today's date into input type date when it is loaded(onload)
window.addEventListener('DOMContentLoaded', (event) => {
    date.valueAsDate = new Date();
});

function calculateAge(){
    let birthDate = new Date(date.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let todayDate = new Date();
    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth() + 1;
    let y2 = todayDate.getFullYear();

    let d3,m3,y3;
     
    y3 = y2 -y1;

    if(m2 >= m1){
        m3 = m2 -m1;
    }
    else{
        y3--;
        m3 = 12 + m2 -m1;
    }

    if(d2 >= d1){
        d3 = d2 -d1;
    }
    else{
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 - d1;
    }

    if(m3 < 0){
        m3 = 11;
        y3--;
    }

    console.log(y3,m3,d3);
    document.getElementById("age").innerHTML =  `Hey!! You are <span>${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days old.`;
}


function getYear(){
    let birthDate = new Date(date.value);
    let todayDate = new Date();

    let years = todayDate.getFullYear() - birthDate.getFullYear();
    let months = todayDate.getMonth() - birthDate.getMonth();
    let days = todayDate.getDate() - birthDate.getDate();

    // Adjust months and years if days are negative
    if (days < 0) {
        months--;
        days += new Date(todayDate.getFullYear(), todayDate.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // Construct the message with the age information
    let message = `Hey!! You are <span>${years}</span> years, <span>${months}</span> months, <span>${days}</span> days old.`;
    document.getElementById("age").innerHTML =  `Hey!! You are <span>${years}</span> years, <span>${months}</span> months, <span>${days}</span> days old.`;
    return message;
}

function getDaysInMonth(year, month){
    return new Date(year,month,0).getDate();
}