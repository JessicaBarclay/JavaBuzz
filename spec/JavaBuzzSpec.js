describe ('JavaBuzz', function () {

  var javabuzz;

  beforeEach (function () {
    javabuzz = new JavaBuzz ();
  });

  describe('when playing the game', function () {
    it('"Java" when number divisible by 3', function () {
      expect(javabuzz.says(9)).toBe('Java');
    });
  });

  describe ('knows when a number is Not', function() {

    it('divisible by 3', function () {
      expect(javabuzz.says(2)).toBe(2);
    });
  });

  describe('knows when a number is', function () {
    it('divisible by 5', function () {
      expect(javabuzz.says(10)).toBe('Buzz');
    });
  });

  describe('knows when a numebr is NOT', function () {
    it('divisible by 5', function () {
      expect(javabuzz.says(7)).toBe(7);
    });
  });

  describe('knows when a number is', function () {
    it('is divisible by 15', function () {
      expect(javabuzz.says(45)).toBe('JavaBuzz');
    });
  });

  describe('knows when a number is NOT', function () {
    it('divisible by 15', function () {
      expect(javabuzz.says(4)).toBe(4);
    });
  });
});
