var Bowling = function() {
  this.score = 0;
  this.roll = function(pins){
    this.score += pins;
  }
};
