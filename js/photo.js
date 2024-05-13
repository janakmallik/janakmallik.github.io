var currentImageIndex = 0;
var images = ['img/jm12.jpg', 'img/jm13.jpg', 'img/jm14.jpg', 'img/jm15.jpg', 'img/jm16.jpg'];
var imageAltTexts = ['Janak Mallik', 'Janak Mallik', 'Janak Mallik', 'Janak Mallik', 'Janak Mallik'];

function changeImage() {
    var image = document.getElementById('first_pp');
    currentImageIndex = (currentImageIndex + 1) % images.length; // Move to the next image in the array

    image.src = images[currentImageIndex];
    image.alt = imageAltTexts[currentImageIndex];
}

function addBorder() {
    var image = document.getElementById('first_pp');
    image.style.border = '3.5px solid rgb(13,110,217,1)'; // Adjust border style as needed
    // image.style.padding = '1.5px';
}

function removeBorder() {
    var image = document.getElementById('first_pp');
    image.style.border = '3.5px solid rgb(0,0,0,0)'; // Adjust border style as needed
    // image.style.padding = '1.5px';
}

