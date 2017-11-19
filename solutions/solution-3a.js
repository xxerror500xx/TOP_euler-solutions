// What is the largest prime factor of the number 600851475143?
// Source - http://www.mathsisfun.com/prime-factorization.html
// - Factors are what we can multiply to get the number
// - Multiples are what we get after multiplying the number by an integer (not a fraction).
// - A Prime Number can be divided evenly only by 1 or itself.
//   And it must be a whole number greater than 1.
// - "Prime Factorization" is finding which prime numbers multiply together to make the original number.
var factors = [];
var largestPrimeFactor = 0;

function largestPrimeFactorization() {
  var divisor = 2;
  var remainder = 0;
  var factor = 0;
  while (divisor <= number) {
    if (number % divisor === remainder) {
      if (divisor < number) {
        factors.push([divisor, (number / divisor)]);
        //console.log("--- " + "Factor" + " ---" );
        factor = (number /= divisor);
      } else {
        largestPrimeFactor = factor;
        //console.log("*-_| " + "largestPrimeFactor" + " |_-*");
        //console.log(largestPrimeFactor);
        return largestPrimeFactor;
      }
      // console.log(number + " / " + divisor + " = " + factor);
    } else {
      divisor++;
    }
  }
}
var number = 600851475143;
largestPrimeFactorization();
console.log(largestPrimeFactor);
console.log(factors);
