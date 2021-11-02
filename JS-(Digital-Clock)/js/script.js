function updateTime(){
    var dateInfo = new Date();

    var hr,
    _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
    sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
    ampm = (dateInfo.getHours() < 12) ? "PM" : "AM";


    if (dateInfo.getHours() == 0) {
        hr = 12;
    }else if (dateInfo.getHours() > 12) {
        hr = dateInfo.getHours() - 12;
    }else{
        hr = dateInfo.getHours();
    }



    var currentTime = hr + ":" + _min +":" +sec;
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;
    document.getElementsByClassName("ampm")[0].innerHTML = ampm;


    var dow = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wenesday",
        "Friday",
        "Saturday"
    ],

    month = [
        "January",
        "February",
        "March",
        "Aprial",
        "May",
        "June",
        "July",
        "Augest",
        "September",
        "October",
        "November",
        "December"
    ],

    day = dateInfo.getDate();

    var CurrenData = dow[dateInfo.getDay()] + "," + month[dateInfo.getMonth()] + "" + day;
    document.getElementsByClassName("date")[0].innerHTML = CurrenData;

};



updateTime();
setInterval(function(){
    updateTime()
},1000);