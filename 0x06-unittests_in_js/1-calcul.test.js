var assert = require('assert');
const calculateNumber = require("./1-calcul")

describe("calculateNumber", function() {
    it('sum', () => {
      assert.equal(calculateNumber('SUM',3.2, 4.8), 8)     
    });
    it('SUBTRACT', () => {
      assert.equal(calculateNumber('SUBTRACT',5, 4), 1)     
    });
    it('DIVIDE ', () => {
      assert.equal(calculateNumber('DIVIDE',6, 2), 3)   
    });
});
