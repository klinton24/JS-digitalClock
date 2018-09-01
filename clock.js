function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ampm = "AM";

    if (hour == 0){
        hour = 12;
    }

    if (hour > 12){
        hour -= 12;
        ampm = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute; 
    second = (second < 10) ? "0" + second : second; 


    let time = hour + ":" + minute + ":" + second + " " + ampm;
    document.getElementById("myClockDisplay").innerText = time;

    //makes the clock count up
    setTimeout(showTime, 1000);
}

showTime();