describe ('JavaBuzz', function () {
  var javabuzz;
  describe ('knows when a number is', function () {
    it ('is divisible by 3', function () {
      javabuzz = new JavaBuzz ();
      expect(javabuzz.isDivisibleBy(3)).toBe(true);
    });
  });
});
