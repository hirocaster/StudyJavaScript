var Bowling = function() {

  var rolls = new Array();
  var currentRoll = 0;

  this.roll = function(pins){
    rolls[currentRoll] = pins;
    if(pins == 10){
        currentRoll++;
        rolls[currentRoll] = 0;
    }
    currentRoll++;
  };

  this.score = function(){
    var score = 0;
    var index = 0;
    for( frame=0; frame < 10; frame++){
      if(isStrike(frame)){
        score += rolls[index] + rolls[index + 1];
      } else if(isSpare(frame)){
        score += rolls[index];
      }

      score += rolls[index] + rolls[index + 1];
      index += 2;
    }
    return score;
  };

  function isStrike(frame){
    if(frame > 0){
      return rolls[frame * 2 - 2] == 10 ? true : false;
    } else {
      return false;
    }
  }

  function isSpare(frame){
    if(frame > 0){
      return rolls[frame * 2 - 2] + rolls[frame * 2 - 1] == 10 ? true : false;
    } else {
      return false;
    }
  }


};
