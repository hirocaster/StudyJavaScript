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

    it("all 0pins", function(){
        manyRoll(20, 0);
        expect(0).toEqual(game.score());
    });

    it("all 1pins", function(){
        manyRoll(20, 1);
        expect(20).toEqual(game.score());
    });

    it("one spare", function(){
        game.roll(3);
        game.roll(7); // spare
        game.roll(1);
        manyRoll(17, 0);
        expect(12).toEqual(game.score());
    });

    it("one strike", function(){
        game.roll(10); // strike
        game.roll(1);
        game.roll(3);
        manyRoll(16, 0);
        expect(18).toEqual(game.score());
    });

    it("Perfect Game", function(){
        manyRoll(12, 10);
        expect(300).toEqual(game.score());
    });

});