describe("BowlingGame", function(){

  var game;

  beforeEach(function(){
    game = new BowlingGame();
  });

  it("Hello Jasmine", function(){
    expect("Jasmine").toEqual("Jasmine");
  });

  it("all 0pins",function(){
    for(i=0;i<20;i++){
      game.roll(0);
    }
    expect(0).toEqual(game.score());
  });

  it("all 1pins",function(){
    for(i=0;i<20;i++){
      game.roll(1);
    }
    expect(20).toEqual(game.score());
  });

});