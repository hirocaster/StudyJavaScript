var BowlingGame = function(){
  var score = 0;
  var standPins = 10;

  this.roll = function(pins){
    score += pins;
    var nextRollStandPins = 0;
    nextRollStandPins = standPins - pins;

    if(standPins < 10 && nextRollStandPins == 0){
      score += pins;
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
