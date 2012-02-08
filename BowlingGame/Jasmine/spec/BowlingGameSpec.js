describe("BowlingGame", function(){

    var game;

    beforeEach(function(){
        game = new BowlingGame();
    });

    var manyRoll = function(n, pins){
        for(i=0;i<n;i++){
            game.roll(pins);
        }
    };

    it("Hello Jasmine", function(){
        expect("Jasmine").toEqual("Jasmine");
    });

    it("all 0pins",function(){
        manyRoll(20, 0);
        expect(0).toEqual(game.score());
    });

    it("all 1pins",function(){
        manyRoll(20, 1);
        expect(20).toEqual(game.score());
    });

});