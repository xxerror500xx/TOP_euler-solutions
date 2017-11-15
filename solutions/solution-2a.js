// The sum of all fNums cannot exceed 4 million
var maxThresholdNumber = 4000000;

// Add all FibNums to this array
var fibSequence = [1,2];
var sortedFibSequence = [];

function sequenceAllFibsUpTo(maxThresholdNumber) {
  for (var i = 1; i <= maxThresholdNumber; i++) {

    nextFib = fibSequence[i-1] + fibSequence[i];

    if (nextFib <= maxThresholdNumber) {
      fibSequence.push(nextFib);
    }
  }
  console.log("#Fibs: " + fibSequence.length);
  console.log("las Fib: " + fibSequence[fibSequence.length -1]);
  return fibSequence;
}

function tallyOnly(divisibleBy) {
  for (var i = 0; i < fibSequence.length; i++) {
    if (fibSequence[i] % divisibleBy === 0) {
      sortedFibSequence.push(fibSequence[i]);
    }
  }
  var total = sortedFibSequence.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
  });
  console.log("#Sorted Fibs: " + sortedFibSequence.length);
  console.log("las S Fib: " + sortedFibSequence[sortedFibSequence.length -1]);
  console.log("Final sum of all even numbers: " + total);
  return [total, sortedFibSequence];
}
sequenceAllFibsUpTo(maxThresholdNumber);
tallyOnly(2);
