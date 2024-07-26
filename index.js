var name1 = prompt("please write your name");
var name2 = prompt("please write your competitor name");
var RandomNumber = Math.floor(Math.random() * 6) + 1;
var RandomImage = "dice" + RandomNumber + ".png";
var RandomImageSource = "./images/" + RandomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", RandomImageSource);

var RandomNumber2 = Math.floor(Math.random() * 6) + 1;
var RandomImage2 = "dice" + RandomNumber2 + ".png";
var RandomImageSource2 = "./images/" + RandomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", RandomImageSource2);

document.querySelector(".player1").innerHTML = name1;
document.querySelector(".player2").innerHTML = name2;

if (RandomNumber > RandomNumber2) {
  document.querySelector("h1").innerHTML = "🚩" + name1 + " Wins!";
} else if (RandomNumber < RandomNumber2) {
  document.querySelector("h1").innerHTML = name2 + " Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩 DRAW! 🚩";
}
