
const images = [
  "url('image/BMW.jpeg')",
  "url('image/BMW.jpg')",
  "url('image/Mercedes.jpeg')"
];

let index = 0;

setInterval(() => {
  document.getElementById("background").style.backgroundImage = images[index];
  index = (index + 1) % images.length;
}, 4000); // toutes les 4 secondes
