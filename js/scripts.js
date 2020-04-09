var userScores = {
    playerOne: 0,
    playerTwo:0,
}

var turnScores  = {
    currentTotal: 0,
    currentRoll: 0,
    playerTurn: true,
}

function turnCounter() {
  if(turnScores.playerTurn == true){
      $("#p1roll").show();
      $("#p2roll").hide();
  } else {
      turnScores.playerTurn = false;
      $("#p2roll").show();
      $("#p1roll").hide();
  }

}


function resetGame() {
    turnScores.currentTotal = 0;
    turnScores.currentRoll = 0;
    turnScores.playerTurn = true;
    userScores.playerTwo = 0;
    userScores.playerOne = 0;
}
   

function diceRoll() {
  const min = 1;
  const max = 7;
  const roll= Math.floor(Math.random()*(max - min) + min)


  $("img").hide();
  switch (roll){
      case 1: {$("#diceOne").show()}
      break;
      case 2: {$("#diceTwo").show()}
      break;
      case 3: {$("#diceThree").show()}
      break;
      case 4: {$("#diceFour").show()}
      break;
      case 5: {$("#diceFive").show()}
      break;
      case 6: {$("#diceSix").show()}
      break;            
  }
    return roll;
}
function aiDiceRoll() {
  const min = 1;
  const max = 7;
  const roll= Math.floor(Math.random()*(max - min) + min)
  }

function addRoll() {
  turnScores.currentRoll = diceRoll();
  if(turnScores.currentRoll != 1){
      return turnScores.currentTotal += turnScores.currentRoll
  } else {
      turnCounter();
      $("#rollCount").hide();
      return turnScores.currentTotal = 0;
  }
}

function addTurnTotal(){
  if(turnScores.playerTurn == true){
    userScores.playerOne += turnScores.currentTotal;
    turnScores.currentTotal = 0;
    if(userScores.playerOne >= 100){
      $("#winner").text("Player One Wins!!");
    }
  }
  else {
    userScores.playerTwo += turnScores.currentTotal;
    turnScores.currentTotal = 0;
    if(userScores.playerTwo >= 100){
        $("#winner").text("Player Two Wins!!");
    }
  }
  turnCounter();
}

// function easyAi(){
//   const aiMove = Math.floor(Math.random() * 6) + 1;
//     return aiMove;
//   }

function aiTurn(){
  roll = diceRoll();
  if (roll !== 1){
    addRoll();
    addTurnTotal();
  } else turnCounter();
}
  
$(document).ready(function(){    
  $("#new").click(function(event){
      event.preventDefault();
      resetGame();
      $("#p1score").text("Player One Score:" + userScores.playerOne);
      $("#p2score").text("Player Two Score:" + userScores.playerTwo);
      $("#roll").show();
      $("#hold").show();
      $("#new").hide();  
      $("#hard-btn").hide();
      $("#pig").show();
     
      console.log(turnScores.turnCount)
  })

  $("#roll").click(function(event){
      event.preventDefault();
      addRoll();
      $("#rollCount").show();
      $("#pig").show();
      $("#p1score").text("Player One Score:" + userScores.playerOne);
      $("#rollCount").text("Roll:" + turnScores.currentRoll)
      $("#p2score").text("Player Two Score:" + userScores.playerTwo); 
      console.log(turnScores.turnCount)    
  })

  $("#hold").click(function(event){
      event.preventDefault();
      addTurnTotal()
      $("#p1score").text("Player One Score:" + userScores.playerOne);
      $("#p2score").text("Player Two Score:" + userScores.playerTwo);
      $("#rollCount").hide();
      $("#pig").show();
      console.log(turnScores.turnCount)
    })

    
  $("#hard-btn").click(function(event){
    event.preventDefault();
    $("#aiRoll").show();
    $("#aiHold").show();
    $("#new").hide();
    $("#hard-btn").hide();
    $("#pig").show();
    while(userScores.playerOne < 100 && userScores.playerTwo < 100){
      $("#p1score").text("Player One Score:" + userScores.playerOne);
      $("#p2score").text("Player Two Score:" + userScores.playerTwo);
      if(playerTurn === false){
        aiTurn();
      } else{
        $("#aiRoll").click(addRoll());
        $("#aiHold").click(addTurnTotal());
        // console.log("hello");
      }
  }
  })



    
    // $("#hard-btn").click(function(event){
    //   event.preventDefault();
    //   $("#aiRoll").show();
    //   $("#aiHold").show();
    //   $("#new").hide();
    //   $("#hard-btn").hide();
    //   $("#pig").show();
    // })
    
    // $("#aiRoll").click(function(event){
    //   event.preventDefault();
    //   addRoll();
    //   $("#rollCount").show();
    //   $("#pig").show();
    //   $("#p1score").text("Player One Score:" + userScores.playerOne);
    //   $("#rollCount").text("Roll:" + turnScores.currentRoll)
    //   $("#p2score").text("Player Two Score:" + userScores.playerTwo);
    // })
    
    // $("#aiHold").click(function(event){
    //   event.preventDefault();
    //   // aiTurn();
    //   turnCounter();
    //   addTurnTotal();
    //   aiRoll();
    //   $("#pig").show();
    //   $("#p1score").text("Player One Score:" + userScores.playerOne);
    //   $("#p2score").text("Player Two Score:" + userScores.playerTwo);
    //   console.log(turnScores.currentRoll);
    //   console.log(turnScores.currentTotal);
    // })
})