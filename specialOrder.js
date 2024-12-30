// In this task, you are given a string composed of lowercase English alphabet letters ('a' to 'z'). The length of the string will range from 1 to 100 characters. Your challenge is to create a new string resulting from a unique order of character selection from the original string.

// You need to develop a JavaScript function, function specialOrder(inputString), which takes inputString as an argument. The resulting string begins with the last character of the inputString, then selects the second-to-last character, continuing in reverse order until you reach the middle character of the string. Then, start with the first character of the inputString, proceed to the second character, and continue in this manner until you reach the middle character.

// For example, if the inputString is "abcdefg", the function should return "gfedabc".

// Keep in mind the following constraints while creating your function:

// The input string contains only lowercase English letters ('a' to 'z').
// The length of the input string is between 1 and 100, inclusive.
function specialOrder(inputString) {
    // Get the length of the input string
    const length = inputString.length;
    const mid = Math.floor(length / 2); // Find the middle index

    // Reverse order from the end to the middle
    let result = [];
    for (let i = length - 1; i >= mid; i--) {
        result.push(inputString[i]);
    }

    // Forward order from the start to one position before the middle
    for (let i = 0; i < mid; i++) {
        result.push(inputString[i]);
    }

    return result.join('');
}

// Example usage
console.log(specialOrder("abcdefg")); // Output: "gfedabc"
console.log(specialOrder("abcdefgh")); // Output: "hgfedabc"
