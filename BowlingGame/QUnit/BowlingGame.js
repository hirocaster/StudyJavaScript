var Bowling = function() {

  var rolls = new Array();
  var currentRoll = 0;

  this.roll = function(pins){
    rolls[currentRoll] = pins;
    currentRoll++;
  };

  this.score = function(){
    var score = 0;
    var index = 0;
    for( frame=0; frame < 10; frame++ ){

      if( isStrike(index) || isSpare(index) ){
        score += rolls[index + 2];
      }
      score += rolls[index] + rolls[index + 1];

      isStrike(index) ? index++ : index += 2;

    }
    return score;
  };

  function isStrike(index){
      return rolls[index] == 10 ? true : false;
  }

  function isSpare(index){
      return rolls[index] + rolls[index + 1] == 10 ? true : false;
  }
};
