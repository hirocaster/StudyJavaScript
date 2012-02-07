
module("BowlingGame");

test("pass test", function() {
  ok( true, "first test");
});

test("new Bowling Class", function() {
  var bowling = new Bowling();
  equal( typeof(bowling) == "object" ? true : false, true );
});

test("20roll all gutter", function() {
  var bowling = new Bowling();

  for( i=0; i < 20; i++) {
    bowling.roll(0);
  }

  equal( bowling.score(), 0 );
});
