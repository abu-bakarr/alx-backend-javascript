const assert = require("chai").assert;
const calculateNumber = require("./0-calcul")

describe("Sum Func", function() {
    it('should add whole number arrays including strings', () => {
      assert.equal(calculateNumber(5.6,3.4),9 );       
    });
});