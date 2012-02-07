(function(){

  var game = null;
  module("BowlingGame",{
    setup:function() {
      game = new Bowling();
    },
    teardown:function() {
    }
  });

  function rollMany(n, pins) {
    for( i=0; i < n; i++) {
      game.roll(pins);
    }
  };

  test("new Bowling Class", function() {
    var bowling = new Bowling();
    equal( typeof(bowling) == "object" ? true : false, true );
  });

  test("20roll all gutter", function() {
    rollMany(20, 0);
    equal( game.score(), 0 );
  });

  test("20roll all one", function() {
    rollMany(20, 1);
    equal( game.score(), 20 );
  });

  test("one spare",function() {
    game.roll(5);
    game.roll(5); // spare
    game.roll(3);
    rollMany(17, 0);
    equal( game.score(), 16 );
  });

  test("one strike",function() {
    game.roll(10); //strike
    game.roll(4);
    game.roll(3);
    rollMany(16, 0);
    equal( game.score(), 24 );
  });

  test("Perfect Game",function() {
    rollMany(12, 10);
    equal( game.score(), 300 );
  });

})();