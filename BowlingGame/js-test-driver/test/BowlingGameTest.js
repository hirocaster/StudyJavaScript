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
    this.rollMany(20, 0);
    assertEquals(0, this.game.score());
  },

  "test all one pins": function() {
    this.rollMany(20, 1);
    assertEquals(20, this.game.score());
  },

  "test one spare": function() {
    this.game.roll(5);
    this.game.roll(5); // spare
    this.game.roll(3);
    this.game.roll(3);
    this.rollMany(16, 0);
    assertEquals(19, this.game.score());
  },

  // "test one strike": function() {
  //   this.game.roll(10); //strike
  //   this.game.roll(5);
  //   this.game.roll(3);
  //   this.rollMany(16, 0);
  //   assertEquals(26, this.game.score());
  // },

  "rollMany": function(n, pins) {
    for(i=0;i<n;i++){
      this.game.roll(pins);
    }
  }

});
