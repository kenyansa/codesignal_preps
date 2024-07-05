// We can render an ASCII art pyramid with N levels by printing N rows of asterisks, where the top row has a single asterisk in the center and each successive row has two additional asterisks on either side.

// Here's what that looks like when N is equal to 3.

//   *  
//  *** 
// *****
console.log('Writing Something cool:');
function generatePyramid(levels){
    // outer loop, running from level/row i=1, to i=levels. initialize row string with empty ''. this will hold characters of spaces and asterisks 
    for(let i=1; i<= levels; i++){
        let row = '';
        
        // Inner loop for spaces: Add spaces before the first asterisk in the current row. No of spaces is levels-i. It centers the asterisks to form the pyramid. e.g., if levels=5, i=1, it adds 4 spaces
        for(let j = 1; j <= levels-i; j++) {
            row += ' ';
        }
        
        //Inner loop 2: Add asterisks. for each row, asterisks increase by 2
        for (let k = 1; k <= 2*i - 1; k++){
            row += '*';
        }
        
        console.log(row);
    }
}
generatePyramid(10);
// print a ringht-angled triangle

function generateRightAngleTriangle(levels) {
    for (let i = 1; i <= levels; i++) {
        let row = '';

        // Add asterisks for the current row
        for (let j = 1; j <= i; j++) {
            row += '*';
        }

        console.log(row);
    }
}
generateRightAngleTriangle(5)

// Freerange code
// You are given a two-digit integer n. Return the sum of its digits.

// Example

// For n = 29, the output should be
// solution(n) = 11.
function solution(n) {
    if(n>=10 && n<=99){
        const tens = Math.floor(n/10);
        
        const ones = Math.floor(n%10);
        
        const sum = tens + ones;
         return sum;
    }else {
        throw new Error ("Invalid number");
    }
    
    }
    try {
      const result = solution(89); // Change the number to test different cases
      console.log("The sum of the digits is:", result);
    } catch (error) {
      console.log(error.message); // Prints "Invalid number" if n is out of range
    }

    // Grid Printer
    function outcome(x) {
        if (x >= Math.pow(10, 4) || x < 1) {
            return false;
        }
    
        const area = Math.pow(x, 2) + Math.pow((x - 1), 2);
    
        // Create a grid to represent the n-interesting polygon
        const gridSize = 2 * x - 1;
        const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(' '));
    
        // Fill the grid with the appropriate pattern
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (Math.abs(i - (x - 1)) + Math.abs(j - (x - 1)) < x) {
                    grid[i][j] = '#';
                }
            }
        }
    
        // Print the grid
        for (let row of grid) {
            console.log(row.join(''));
        }
    
        return area;
    }
    
    // Examples:
    console.log("Area:", outcome(2)); //
    console.log("Area:", outcome(3));