
//shuffle for player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

//shuffle for player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//winner display
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 Wins 🚩";
    document.querySelector("h1").style.color= "darkblue";
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML= "Player 2 Wins 🚩";
    document.querySelector("h1").style.color= "purple";
}

else{
    document.querySelector("h1").innerHTML= "Draw 🏴 ";
}