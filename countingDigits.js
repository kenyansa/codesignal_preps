// Function to count digits in a given text
function countDigits(inputText) {
    let count = 0; // Initialize count variable to 0
    
    for (let n of inputText) { // Loop through each character in the input text
        if (/^[0-9]$/.test(n)) { // Check if the character is a digit
            count += 1; // Increment the count if it's a digit
        }
    }
    return count; // Return the total count of digits
}

// Call the function with a sample string and log the output
console.log("Number of digits:", countDigits("Hello123, JavaScript World 2023!"));
