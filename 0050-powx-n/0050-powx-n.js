/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
/*
    1. The function checks if n is equal to 0.
    2. If it is, then the function simply returns 1.
    3. Otherwise, the function checks if n is negative.
    4. If it is, then the function negates x and sets n to the absolute value of n.
    5. The function then checks if n is even.
    6. If it is, then the function recursively calls itself to compute x(n/2)x^(n/2)x(n/2).
    7. The result of this recursive call is then multiplied by itself to compute xnx^nx^n.
    8. Otherwise, the function returns x∗myPow(x,n−1)x * myPow(x, n - 1)x∗myPow(x,n−1).
*/
var myPow = function(x, n) {
  
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n % 2 === 0) {
    
    let halfPower = myPow(x, n / 2);
    return halfPower * halfPower;
  }
  else {
    return x * myPow(x, n - 1);
  }  
};