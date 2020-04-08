var userScores = {
    playerOne: 0,
    playerTwo: 0,
}

var turnScores  = {
    currentTotal: 0,
    currentRoll: 0,
    turnCount: 1,
    playerOneTurn = true;
    playerTwoTurn = false;
}


function diceRoll(){
    const min = 1;
    const max = 7;
    const roll= Math.floor(Math.random()*(max- min)+ min)
    console.log(roll);
    
    
    if (roll == 1){
       $("#diceOne").show()
    }else if(roll == 2){
        
        $("#diceTwo").show();
        
    }else if(roll == 3){
       
        $("#diceThree").show();
        
    }else if (roll == 4){
        
        $("#diceFour").show();
    }else if (roll == 5){
        
        $("#diceFive").show();
    }else if (roll == 6){
        
        $("#diceSix").show();
    }else{
        alert('bug splat');
    }
    return roll;
}
    
function turnEval(){
    ($("#p1-hold").on("click") {
        playerTwoTurn = true   
    }
    console.log(works)
}

function resetGame() {
 turnScores.currentTotal = 0;
 turnScores.currentRoll = 0;
 turnScores.turnCount = 1;
 userScores.playerTwo = 0;
 userScores.playerOne = 0;
}


function addTurnTotal() {
    turnScores.currentRoll = diceRoll();
    if(turnScores.currentRoll != 1){
        return turnScores.currentTotal += turnScores.currentRoll
    } else {
        gameUpdate();
        return turnScores.currentRoll = 0;
    }
}

function hold(playerOneTurn, playerTwoTurn){
  gameUpdate();
  if(playerOneTurn){
      userScores.playerOne += turnScores.currentRoll;
      console.log(userScores.playerOne)
  } else if(playerTwoTurn) {
      userScores.playerTwo += turnScores.currentRoll
      console.log(userScores.playerOneTurn)
      
 }


}

$(document).ready(function(){

  $("#p1-dice").click(function(event){
    event.preventDefault();
    addTurnTotal();
    $("#p1-roll").text(diceRoll());
  })
  
  
  
  
  $("#p1-hold").click(function(event){
    event.preventDefault();
    hold();
  })
  $("#p2-dice").click(function(event){
    event.preventDefault();
    $("#p2-roll").text(diceRoll());
  })
  $("p2-hold").click(function(event){
    event.preventDefault();
    hold();
  })
})