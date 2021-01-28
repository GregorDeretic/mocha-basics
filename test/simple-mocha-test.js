var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {

    // Arrange
    var myArray = [1, 2, 3, 4];
    var expectedresult = 3;

    // Act
    var actualResult = myArray.indexOf(4);

    // Asserts

    it('sync test - should return -1 when the value is not present', function() {
        assert.strictEqual(actualResult, expectedresult, "Gregor");
      });

    it('sync test - should return -1 when the value is not present', function() {
      assert.strictEqual(actualResult, expectedresult);
    });

    it('async test - should return -1 when the value is not present', function(done){
      assert.strictEqual(actualResult, expectedresult);
      done();
    });
  });
});