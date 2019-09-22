function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var mili = date.getMilliseconds(); // 0 - 1000
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    mili = (mili < 10) ? "00" + mili : mili;   
    var time = h + ":" + m + ":" + s + ":"+mili+ " " + session;
    document.getElementById("DigitalClock").innerText = time;
    document.getElementById("DigitalClock").textContent = time;
    
    setTimeout(showTime, 10);
    
}

showTime();