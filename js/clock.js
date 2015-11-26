$(function() {
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var yearMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

var clockDiv = document.getElementById('clock');
var dayDiv = document.getElementById('day-of-week');
var dateMonthYearDiv = document.getElementById('date-month-year');

    function displayTime() {
        var now = new Date();        
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();


        // 12-hour format
        var meridiem = "AM";  // Default is AM
        // Convert from 24 hour to 12 hour format
        // and keep track of the meridiem.
        if (hours > 12) {
            hours = hours - 12;
            meridiem = "PM";
        }

        // 0 AM and 0 PM should read as 12
        if (hours === 0) {
            hours = 12;    
        }

        // 1-9 becomes 01-09
        if (seconds < 10) {seconds = "0"+seconds};
        if (minutes < 10) {minutes = "0"+minutes};
        if (hours < 10) {hours = "0"+hours};
        clockDiv.innerText = hours + ':' + minutes + ":" + seconds + " " + meridiem;

    }

    function displayDate(){
        var now = new Date();
        var day = now.getDate();
        var dayOfWeek = now.getDay();
        var month = now.getMonth();
        var year = now.getFullYear();

        dayDiv.innerText = weekday[dayOfWeek]
        dateMonthYearDiv.innerText = day+" "+yearMonths[month] + ", "+ year;

    }

    setInterval(displayDate, 1000);
    setInterval(displayTime, 1000);


})
