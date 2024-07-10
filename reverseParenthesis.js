// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be: solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be: solution(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be: solution(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be: solution(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

// This is advanced a bit.
// Approach:
// 1. Using a Stack for Tracking:

// As we iterate through the string, we'll use a stack to keep track of characters and positions:
// Push characters onto the stack until we encounter a closing parenthesis ')'.
// When encountering a closing parenthesis, pop characters from the stack until we reach the matching opening parenthesis '('.
// Reverse the popped characters and push them back onto the stack.
//2.  Constructing the Result:

// After processing the entire string, the characters remaining in the stack (excluding parentheses) will form the result string.
// 3. Implementation Steps:

// Initialize an empty stack.
// Iterate through each character in the string:
// Push characters onto the stack until encountering ')'.
// When encountering ')', pop characters until '(', reverse them, and push back.
// Construct the final string from characters left in the stack after processing.

function solution(inputString) {
    const stack = [];
    
    for (let char of inputString) {
        if (char === ')') {
            let temp = [];
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                temp.push(stack.pop());
            }
            stack.pop(); // Pop '('
            stack.push(...temp); // Push reversed characters back to stack
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
}

// Examples:
console.log(solution("(bar)")); // Output: "rab"
console.log(solution("foo(bar)baz")); // Output: "foorabbaz"
console.log(solution("foo(bar)baz(blim)")); // Output: "foorabbazmilb"
console.log(solution("foo(bar(baz))blim")); // Output: "foobazrabblim"
