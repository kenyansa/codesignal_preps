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