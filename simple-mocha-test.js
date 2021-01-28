var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('sync test - should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
    it('async test - should return -1 when the value is not present', function(done){
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
      done();
    });
  });
});