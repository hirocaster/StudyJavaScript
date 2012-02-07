var BowlingGame = function(){
  var score = 0;
  var standPins = 10;
  var scoreUp = 0;
  var currentFrame = 1;
  var currentRool = 1;

  this.roll = function(pins){
    score += pins;

    if(scoreUp > 0 && !(currentFrame == 10 && currentRool > 2)){
      score += pins;
      scoreUp--;
      if(scoreUp > 1 && !(currentFrame == 10 && currentRool > 1)){
        score += pins;
        scoreUp--;
      }
    }

    var nextRollStandPins = 0;
    nextRollStandPins = standPins - pins;

    if(standPins == 10 && nextRollStandPins == 0){
      scoreUp = scoreUp + 2;
      if(currentFrame == 10 && currentRool >= 1){
        currentRool++;
      } else {
        currentRool = 1;
      }
      if(currentFrame < 10){
          currentFrame++;
      }
    }

    if(standPins < 10 && nextRollStandPins == 0){
      scoreUp++;
      if(currentFrame < 10){
          currentFrame++;
      }
      currentRool = 1;
    }

    if(standPins < 10 && nextRollStandPins > 0){
      standPins = 10;
      if(currentFrame == 10 && currentRool >= 1){
        currentRool++;
      } else {
        currentRool = 1;
      }
      if(currentFrame < 10){
          currentFrame++;
      }
      return;
    }

    if(standPins == 10 && nextRollStandPins == 0){
      standPins = 10;
      return;
    } else {
      standPins = nextRollStandPins;
    }
    currentRool++;
  };

  this.score = function(){
    return score;
  };
};
