describe ('JavaBuzz', function () {

  var javabuzz;

  beforeEach (function() {
    javabuzz = new JavaBuzz ();
  });

  describe ('knows when a number is', function () {

    it ('is divisible by 3', function () {
      expect(javabuzz.isDivisibleBy(3)).toBe(true);
    });
  });

  describe ('knows when a number is Not', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleBy(2)).toBe(false);
    });
  });
});
