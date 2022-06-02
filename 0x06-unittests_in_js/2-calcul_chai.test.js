var chai = require('chai')
expect = chai.expect
const calculateNumber = require("./1-calcul")

describe("calculateNumber", function() {
    it('sum', () => {
      let result = calculateNumber('SUM',6, 5);
      expect(result).to.equal(11);  
    });
    it('SUBTRACT', () => {
      let result = calculateNumber('SUBTRACT',6, 5);
      expect(result).to.equal(1);  
    });
    it('DIVIDE ', () => {
      let result = calculateNumber('DIVIDE',8, 2);
      expect(result).to.equal(4);  
    });
});
