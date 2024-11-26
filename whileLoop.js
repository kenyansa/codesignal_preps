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

//  Your task is to construct a function that accepts an integer n and returns the integer with the same digits as n, but in reverse order. You should implement your solution using a while loop. For instance, if the input is 12345, the output should be 54321. Keep in mind that n will always be a positive integer between 1 and 10^8.Do not use built-in functions that convert the integer to another data type, such as a string, to reverse it. Solve the problem purely using mathematical operations and loop constructs. Note that when the result has leading zeros, you should consider only the integer value (e.g., 1230 becomes 321 after the operation).
function reverseInteger(n) {
    let reversed = 0; // This will hold the reversed number
    while (n > 0) {
        let digit = n % 10; // Extract the last digit of n
        reversed = reversed * 10 + digit; // Append the digit to the reversed number
        n = Math.floor(n / 10); // Remove the last digit from n
    }
    return reversed;
}
console.log("Task:", reverseInteger(12345))

// duplicate digits of a number:
function duplicateNumbers (n) {
    let result = 0; 
    let multiplier = 1;
    while (n > 0) {
        let digit = n % 10; // Extract the last digit
        let duplicated = digit * 10 + digit; // Duplicate the digit
        // Add the duplicated digits to the result at the correct position
        result += duplicated * multiplier;
        // Update the multiplier to account for the new digits
        multiplier *= 100; 
        n = Math.floor(n / 10); 
    }

    return result;
}
console.log(duplicateNumbers(345))