describe ('JavaBuzz', function () {

  var javabuzz;

  beforeEach (function () {
    javabuzz = new JavaBuzz ();
  });

  describe ('knows when a number is', function () {

    it ('is divisible by 3', function () {
      expect(javabuzz._isDivisibleBy(3, 3)).toBe(true);
    });
  });

  describe ('knows when a number is Not', function() {

    it('divisible by 3', function () {
      expect(javabuzz._isDivisibleBy(2, 3)).toBe(false);
    });
  });

  describe('knows when a number is', function () {
    it('divisible by 5', function () {
      expect(javabuzz._isDivisibleBy(10, 5)).toBe(true);
    });
  });

  describe('knows when a numebr is NOT', function () {
    it('divisible by 5', function () {
      expect(javabuzz._isDivisibleBy(7, 5)).toBe(false);
    });
  });

  describe('knows when a number is', function () {
    it('is divisible by 15', function () {
      expect(javabuzz._isDivisibleBy(45, 15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function () {
    it('divisible by 15', function () {
      expect(javabuzz._isDivisibleBy(4, 15)).toBe(false);
    });
  });
});
