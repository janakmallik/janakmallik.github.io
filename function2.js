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
function toggleMode() {
    var body = document.getElementsByTagName("body")[0];
    var button = document.getElementsByTagName("button")[0];

    body.classList.toggle("night-mode");
    button.classList.toggle("night-mode");

    if (button.innerHTML === "Dark Mode") {
        button.innerHTML = "Light Mode";
    } else {
        button.innerHTML = "Dark Mode";
    }
};