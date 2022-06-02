const calculateNumber = (type, a,b) => {
  switch(type) {
    case 'SUM':
      return Math.round(a+b);
    case 'SUBTRACT':
      return Math.round(a-b);
    case 'DIVIDE':
      if (b === 0) return Error("Error")
      return Math.round(a/b)
    
  }
 
}
module.exports = calculateNumber;
