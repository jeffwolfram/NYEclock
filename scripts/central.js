//var clubName = prompt("Please enter club name");

// set the date we're counting down to
var target_date = new Date("Jan 1, 2017").getTime();
 var year = new Date().getFullYear() + 1;
// variables for time units
var days, hours, minutes, seconds;

 var intro = document.getElementById("intro");
// get tag element
var countdown = document.getElementById("countdown");
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    if(days == 0){
        intro.innerHTML = "Countdown to " + year;
        countdown.innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";  
    } else if(days === 0 && hours === 0){
        intro.innerHTML = "Countdown to " + year;
        countdown.innerHTML = minutes + "m " + seconds + "s "; 
    } else if(days === 0 && hours === 0 && minutes === 0){
        intro.innerHTML = "Countdown to " + year;
        countdown.innerHTML = seconds + "s ";
    } else if(days === 0 && hours === 0 && minutes === 0 && seconds === 0){
        countdown.innerHTML = "Happy New Years 2017!"
    }else {
        intro.innerHTML = "Countdown to " + year;
    countdown.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";  }
 
}, 1000);
