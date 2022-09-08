var x = Math.floor(Math.random() * 6) + 1;
var y = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + x + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + y + ".png");

if (x > y) {
  document.querySelector("h1").innerHTML = "Filipe Wins!";
} else if (y > x) {
  document.querySelector("h1").innerHTML = "Amigo Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
