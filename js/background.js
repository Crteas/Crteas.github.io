const images = ["0.jpg", "1.gif", "2.jpg", "3.gif", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImage}`;
bgImg.draggable = false;

document.body.appendChild(bgImg);
