var RandomNumber1=Math.floor(Math.random() * 6)+1;

var RandomDice1="images/dice"+RandomNumber1+".png";

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",RandomDice1);

var RandomNumber2=Math.floor(Math.random() * 6)+1;

var RandomDice2="images/dice"+RandomNumber2+".png";

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src",RandomDice2);

if(RandomNumber1>RandomNumber2)
{
    document.querySelector("h1").innerHTML="🏳️‍🌈 Player 1 wins!";
}
else if (RandomNumber2>RandomNumber1) {
  document.querySelector("h1").innerHTML="Player 2 wins! 🏳️‍🌈";
}
else{
  document.querySelector("h1").innerHTML="Its a Draw!";
}
function refreshPage(){
    window.location.reload();
} 
