Array.prototype.makeUnique = function() {
  var combinedArr = this.concat();
  for (var i1 = 0; i1 < combinedArr.length; ++i1) {
    for (var i2 = i1 + 1; i2 < combinedArr.length; ++i2) {
      if (combinedArr[i1] === combinedArr[i2])
        combinedArr.splice(i2--, 1);
    }
  }
  return combinedArr;
};

function getSingleSetOfUniqueMultiples(n1, n2, maximum_value) {
  var multiples1 = [];
  var multiples2 = [];
  for (var i = 0; i * n1 < maximum_value; i++) {
    console.log("i: " + i + " * n1: " + n1 + " = " + i * n1);
    multiples1.push(i * n1);
  }
  for (var i = 0; i * n2 < maximum_value; i++) {
    console.log("i: " + i + " * n2: " + n2 + " = " + i * n2);
    multiples2.push(i * n2);
  }
  return multiples1.concat(multiples2).makeUnique();
}

var multiplesSet = getSingleSetOfUniqueMultiples(3, 5, 1000);
var total = multiplesSet.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log("multiplesSet: " + multiplesSet + " = " + total);
