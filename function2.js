
var button = document.getElementById("night_mode_btn");

function toggleMode() {
    var body = document.getElementsByTagName("body")[0];
    var button = document.getElementsByTagName("button")[0];

    body.classList.toggle("night-mode");
    button.classList.toggle("night-mode");

    // if (button.innerHTML === "☽") {
    //     button.innerHTML = "☼";
    // } else {
    //     button.innerHTML = "☽";
    // }
}

function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
  }
  

  function goBack() {
    window.history.back();
  }



//   night and day mode
var text = "Day Mode";

function toggleMode() {
    var body = document.getElementsByTagName("body")[0];
    var button = document.getElementsByTagName("button")[0];

    

    body.classList.toggle("night-mode");
    button.classList.toggle("night-mode");

    //text = button.innerHTML;Light Mode Dark Mode

    if (text === "Day Mode") {
        text = "Night Mode";
    button.innerHTML = "Night Mode";
    

    } else {
    button.innerHTML = "Day Mode";
    text = "Day Mode";
    
    }
};


// back button ☀

function goBack() {
    window.history.back();
  };


  //date and time
  function updateClock() {
  var now = new Date();
  var time = document.getElementById("time");
  var date = document.getElementById("date");
  
  // Format the time as HH:MM:SS AM/PM
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  seconds = seconds < 10 ? '0'+seconds : seconds;
  var timeString = hours + ':' + minutes + ' ' + ampm;
//   var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  time.innerHTML = timeString;
  
  // Format the date as Weekday, Month Day Year
  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var weekdayString = weekdays[now.getDay()];
  var monthString = months[now.getMonth()];
  var dateString = weekdayString + ", " + now.getDate() + " "+ monthString + " " + " " + now.getFullYear();
  date.innerHTML = dateString;
}

// Call updateClock every second to update the time and date
setInterval(updateClock, 1000);


//target _blank for all link
var links = document.getElementsByClassName('blue-link');
for (var i = 0; i < links.length; i++) {
  links[i].target = '_blank';
}


  