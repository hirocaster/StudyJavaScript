TestCase("BowlingGame", {
  setUp: function() {
    this.game = new BowlingGame();
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
    assertEquals("object", typeof(this.game));
  },

  "test all gutter": function() {
    for(i=0;i<20;i++){
      this.game.roll(0);
    }
    assertEquals(0, this.game.score());
  },

  "test all one pins": function() {
    for(i=0;i<20;i++){
      this.game.roll(1);
    }
    assertEquals(20, this.game.score());
  }

});
