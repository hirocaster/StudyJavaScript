var BowlingGame = function(){
  var score = 0;
  var standPins = 10;
  var scoreUp = 0;

  this.roll = function(pins){
    score += pins;
    if(scoreUp > 0){
      score += pins;
      scoreUp--;
    }
    var nextRollStandPins = 0;
    nextRollStandPins = standPins - pins;

    if(standPins < 10 && nextRollStandPins == 0){
      scoreUp++;
    }

    if(standPins < 10 && nextRollStandPins > 0){
      standPins = 10;
    } else {
      standPins = nextRollStandPins;
    }
  };

  this.score = function(){
    return score;
  };
};
