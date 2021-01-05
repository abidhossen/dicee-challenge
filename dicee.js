var x = Math.floor(Math.random()*6 + 1);
    if(x===1){
      document.querySelector("img.img1").src="images/dice1.png";
    }else if(x===2){
      document.querySelector("img.img1").src="images/dice2.png";
    }else if(x===3){
      document.querySelector("img.img1").src="images/dice3.png";
    }else if(x===4){
      document.querySelector("img.img1").src="images/dice4.png";
    }else if(x===5){
      document.querySelector("img.img1").src="images/dice5.png";
    }else if(x===6){
      document.querySelector("img.img1").src="images/dice6.png";
    }
    var y = Math.floor(Math.random()*6 + 1);
    if(y===1){
      document.querySelector("img.img2").src="images/dice1.png";
    }else if(y===2){
      document.querySelector("img.img2").src="images/dice2.png";
    }else if(y===3){
      document.querySelector("img.img2").src="images/dice3.png";
    }else if(y===4){
      document.querySelector("img.img2").src="images/dice4.png";
    }else if(y===5){
      document.querySelector("img.img2").src="images/dice5.png";
    }else if(y===6){
      document.querySelector("img.img2").src="images/dice6.png";
    }
  if(x>y){
    document.querySelector("h1").innerText="🚩Player 1 Wins";
  }else if(x===y){
    document.querySelector("h1").innerText="Draw!";
  }else{
    document.querySelector("h1").innerText="Player 2 Wins🚩";
  }
