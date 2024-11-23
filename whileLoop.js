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