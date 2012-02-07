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

      if(spare){
        score += (rolls[index] + rolls[index+1]) * 2;
      } else {
        score += (rolls[index] + rolls[index+1]);
      }

      if( rolls[index] + rolls[index+1] == 10) {
        spare = true;
      } else {
        spare = false;
      }

      index += 2;
    }
    return score;
  };
};
