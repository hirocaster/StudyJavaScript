var BowlingGame = function(){

    var rolls = new Array();
    var currentRool = 0;

    this.roll = function(pins){
        rolls[currentRool] = pins;
        currentRool++;
    };

    this.score = function(){
        var score = 0;
        for (i=0; i<rolls.length;i++){
            score += rolls[i];
            if(this.isSpare(i)){
                score += rolls[i];
            }
        }
        return score;
    };

    this.isSpare = function(roll){
        if(rolls[i - 1] + rolls[i - 2] == 10){
            return true;
        } else {
            return false;
        }
    };

};
