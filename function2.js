onload = function () {
    setmode2();
  };

var button = document.getElementById("night_mode_btn");

function toggleMode() {
    var body = document.getElementsByTagName("body")[0];
    var button = document.getElementsByTagName("button")[0];

    body.classList.toggle("night-mode");
    button.classList.toggle("night-mode");

    if (button.innerHTML === "Night Mode") {
        button.innerHTML = "Day Mode";
    } else {
        button.innerHTML = "Night Mode";
    }
}

function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
  }
  

  function goBack() {
    window.history.back();
  }



//   night and day mode
var text = "Fun Mode";

  function setmode2()
  {
    document.getElementById("day-mode").innerHTML = text;
  };
document.getElementById("day-mode").innerHTML = text;

function toggleMode() {
    var body = document.getElementsByTagName("body")[0];
    var button = document.getElementsByTagName("button")[0];

    

    // body.classList.toggle("night-mode");
    // button.classList.toggle("night-mode");

    //text = button.innerHTML;

    if (text === "Dark Mode") {
        text = "Light Mode";
    button.innerHTML = "Light Mode";
    body.classList.add("night-mode");
    button.classList.add("night-mode");
    } else {
    button.innerHTML = "Dark Mode";
    text = "Dark Mode";
    body.classList.remove("night-mode");
    button.classList.remove("night-mode");
    }

    setTimeout(startTime, 1000);
};