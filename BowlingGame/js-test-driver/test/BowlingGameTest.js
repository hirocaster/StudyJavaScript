TestCase("BowlingGame", {
  setUp: function() {
    console.log("foobaraaa");
  },

  tearDown: function() {
  },

  "test hello": function() {
      assertEquals("hello", "hello");
  },

  "test hello2": function() {
    assertEquals("hello2", "hello2");
  },

  "test init game class": function() {
    var game = new BowlingGame();
    assertEquals("object", typeof(game));
  }

});
