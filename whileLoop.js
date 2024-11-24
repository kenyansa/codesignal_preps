// adding even digits in a number:
function solution(n) {
    let digit_sum = 0;
    while (n > 0) {
        let digit = n % 10;
        if (digit % 2 === 0) {  // Check if the digit is even.
            digit_sum += digit;
        }
        n = Math.floor(n / 10);  // Remove the last digit.
    }
    return digit_sum;
}

console.log(solution(4625));


function solution(n) {
    let product = 1;
    let hasOddDigit = false;
     while (n > 0) {
         let digit = n % 10;
         if (digit % 2 !== 0) {  // Check if the digit is odd.
             product *= digit;
             hasOddDigit = true;
             
         }
         n = Math.floor(n / 10);  // Remove the last digit.
     }
     return hasOddDigit ? product : 0;
 }
 
 console.log(solution(43172));


//  , inclusive. Your task is to write a function that calculates and returns the product of the odd digits of n, without converting n into a string.
// For example, if n equals 43172, the output should be 21, because the product of the odd digits 3, 1, and 7 is 21.

// Please note that if n has no odd digits, your function should return 0.
function solution(n) {
    let product = 1;
    let hasOddDigit = false;
     while (n > 0) {
         let digit = n % 10;
         if (digit % 2 !== 0) {  // Check if the digit is odd.
             product *= digit;
             hasOddDigit = true;
             
         }
         n = Math.floor(n / 10);  // Remove the last digit.
     }
     return hasOddDigit ? product : 0;
 }
 
 console.log(solution(43172));
