
module("BowlingGame");

test("pass test", function() {
  ok( true, "first test");
});

test("new Bowling Class", function() {
  var bowling = new Bowling();
  equal( typeof(bowling) == "object" ? true : false,
         true );
});
