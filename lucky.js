// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

// Example
// For n = 1230, the output should be solution(n) = true;
// For n = 239017, the output should be solution(n) = false.
function solution(n) {
    // Plan
// 1. Convert the number to a string to easily access its digits.
// 2.Ensure the number of digits is even.
// 3. Split the number into two halves.
// 4. Calculate the sum of the digits in each half.
// 5. Compare the sums to determine if the number is a lucky number.
// step 1
const nStr = n.toString();
// step 2
const length = nStr.length
if (length%2 !==0){
    return false
}
// step 3
const mid = length / 2;
const firstHalf = nStr.slice(0, mid);
const secondHalf = nStr.slice(mid);
// step 4
const sumFirstHalf = firstHalf.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
const sumSecondHalf = secondHalf.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
// step 5
return sumFirstHalf === sumSecondHalf;

}
const n1 = 1230;
console.log(solution(n1)); // Output: true (1+2 == 3+0)

const n2 = 239017;
console.log(solution(n2));
