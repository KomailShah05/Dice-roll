
document.querySelector("h1.container-fluid").innerHTML="Refresh Me";
// dice1 random image genertaor

var ranmdomNumber1=Math.floor(Math.random()*6)+1;

if(ranmdomNumber1===1){
  document.querySelector("img.dice1").setAttribute("src","images/dice1.png");

}
else if(ranmdomNumber1===2){
  document.querySelector("img.dice1").setAttribute("src","images/dice2.png");

}
else if(ranmdomNumber1===3){
  document.querySelector("img.dice1").setAttribute("src","images/dice3.png");

}
else if(ranmdomNumber1===4){
  document.querySelector("img.dice1").setAttribute("src","images/dice4.png");

}
else if(ranmdomNumber1===5){
  document.querySelector("img.dice1").setAttribute("src","images/dice5.png");

}
else if(ranmdomNumber1===6){
  document.querySelector("img.dice1").setAttribute("src","images/dice6.png");

}


//dice2 random image genertaor
var ranmdomNumber2=Math.floor(Math.random()*6)+1;
if(ranmdomNumber2===1){
  document.querySelector("img.dice2").setAttribute("src","images/dice1.png");

}
else if(ranmdomNumber2===2){
  document.querySelector("img.dice2").setAttribute("src","images/dice2.png");
}
else if(ranmdomNumber2===3){
  document.querySelector("img.dice2").setAttribute("src","images/dice3.png");

}
else if(ranmdomNumber2===4){
  document.querySelector("img.dice2").setAttribute("src","images/dice4.png");

}
else if(ranmdomNumber2===5){
  document.querySelector("img.dice2").setAttribute("src","images/dice5.png");

}
else if(ranmdomNumber2===6){
  document.querySelector("img.dice2").setAttribute("src","images/dice6.png");

}



// Umpire
if(ranmdomNumber1>ranmdomNumber2){
    document.querySelector("h1").innerHTML="<i class='fas fa-flag-checkered'></i> Player 1";
}
else if(ranmdomNumber1<ranmdomNumber2){
    document.querySelector("h1").innerHTML=" Player 2 <i class='fas fa-flag-checkered'></i>";
}
else if(ranmdomNumber1===ranmdomNumber2){
    document.querySelector("h1").innerHTML=" Match Drawn!";
}
