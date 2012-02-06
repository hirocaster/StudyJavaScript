TestCase("prototypeTest", {

    setUp: function () {

    },

    tearDown: function () {

    },

  "print this.x": function () {
    var obj = new MyClass();
      assertEquals('x in MyClass', print(obj.x));
  },

    "test dynamic relationship": function () {
        function modify(a, b) {
            b = 42;
            arguments[0] = arguments[1];
            return a;
        }
        assertEquals(42, modify(1, 2));
    },

});
