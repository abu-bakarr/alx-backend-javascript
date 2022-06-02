var assert = require('assert');
const calculateNumber = require("./0-calcul")

describe("calculateNumber", function() {
    it('calculate number', () => {
      assert.equal(calculateNumber(3.2, 4.8), 8)     
    });
});
