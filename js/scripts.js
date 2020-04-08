var userScores = {
    playerOne: 0,
    playeTwo: 0,
}

var turnScores  = {
    currentTotal: 0,
    curentRoll: 0,
    turnCount: 1,
}




function diceRoll(){
    const min = 1;
    const max = 7;
    const roll= Math.floor(Math.random()*(max- min)+ min)
    console.log(roll);
}

function playerOneScore() {
    turnScores.turnCount++
    turnScores.currentRoll = diceRoll();
    // if

}
    





$(document).ready(function(){
    //  event.preventDefault();

    $("#p1-dice").click(function(event){
        event.preventDefault();
        diceRoll();

         $("#p1-roll").text(diceRoll);        
       
    })

    





