TestCase("arguments", {
    setUp: function () {

    },

    tearDown: function () {

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
