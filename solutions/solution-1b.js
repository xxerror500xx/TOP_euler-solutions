var number_1 = 3;
var number_2 = 5;

var max_multiple = 1000;

function getAllMultipliersUpTo(n1, n2, max) {
  var multiples = [];
  for (var multiplyer = 0; multiplyer < max; multiplyer++) {
    if (multiplyer % n1  === 0 || multiplyer % n2 === 0) {
          multiples.push(multiplyer);
    }
  }
  var total = multiples.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
  });
  return [total, multiples];
}
var answer = getAllMultipliersUpTo(number_1, number_2, max_multiple);
console.log("values: " + answer[1]);
console.log("total: " + answer[0]);
