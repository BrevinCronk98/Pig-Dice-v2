var userScores = {
    playerOne: 0,
    playerTwo: 0,
}

var turnScores  = {
    currentTotal: 0,
    currentRoll: 0,
    turnCount: 1,
}

function turnCounter() {
    turnScores.turnCount++
    if(turnScores.turnCount % 2 == 0){
        $("#p1").hide();
        $("#p2").show();
    } else {
        $("#p1").show();
        $("#p2").hide();
    }
}


function resetGame() {
    turnScores.currentTotal = 0;
    turnScores.currentRoll = 0;
    turnScores.turnCount = 1;
    userScores.playerTwo = 0;
    userScores.playerOne = 0;
   }
   

function diceRoll(){
    const min = 1;
    const max = 7;
    const roll= Math.floor(Math.random()*(max- min)+ min)
    console.log(roll);
    
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


    function addRoll() {
    turnScores.currentRoll = diceRoll();
    if(turnScores.currentRoll != 1){
        return turnScores.currentTotal += turnScores.currentRoll
    } else {
        turnCounter();
        return turnScores.currentRoll = 0;
    }
}

function addTurnTotal(){
    if(turnScores.turnCount % 2 != 0){
        userScores.playerOne += turnScores.currentTotal;
        turnScores.currentTotal = 0;
        if(userScores.playerOne >= 100){
            $("#winner").text("Player One Wins!!");
        } else {
            userScores.playerTwo += turnScores.currentTotal;
            turnScores.currentTotal = 0;
            if(userScores.playerTwo >= 100){
                $("#winner").text("Player Two Wins!!");
            }
        }
    }
}


$(document).ready(function(){

    $("#new").click(function(event){
        event.preventDefault();
        resetGame();
        $("#p1score").text("Player One Score:" + userScores.playerOne);
        $("#p1roll").text("Roll:" + turnScores.currentRoll);
        $("#p2score").text("Player One Score:" + userScores.playerTwo);
        $("#p2roll").text("Roll:" + turnScores.currentRoll )
    })
})