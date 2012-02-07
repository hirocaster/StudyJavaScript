var Bowling = function() {

  var rolls = new Array();
  var currentRoll = 0;

  this.roll = function(pins){
    rolls[currentRoll] = pins;
    currentRoll++;
  };

  this.score = function(){
    var score = 0;
    var spare = false;
    var index = 0;
    for( frame=0; frame < 10; frame++){
      if(isSpare(frame)){
        score += (rolls[index] + rolls[index+1]) * 2;
      } else {
        score += (rolls[index] + rolls[index+1]);
      }
      index += 2;
    }
    return score;
  };

  function isSpare(frame){
    if(frame > 0){
      return rolls[frame * 2 - 2] + rolls[frame * 2 - 1] == 10 ? true : false;
    } else {
      return false;
    }
  }

};
