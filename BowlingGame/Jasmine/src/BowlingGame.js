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
            if(this.isSpareScoreUp(i, score)){
                score += rolls[i];
            }
            if(this.isStrikeScoreUp(i, score)){
                score += rolls[i];
            }
        }
        return score;
    };

    this.isSpareScoreUp = function(roll, score){
        if(rolls[i - 1] + rolls[i - 2] == 10 ||
           rolls[i - 1] + rolls[i - 2] == 20){
            return score < 270 ? true : false;
        } else {
            return false;
        }
    };

    this.isStrikeScoreUp = function(roll, score){
        if(rolls[i - 1] == 10 || rolls[i - 2] == 10){
            return score < 290 ? true : false;
        } else {
            return false;
        }
    };

};
