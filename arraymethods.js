// Sample array of numbers
const numbers = [1, 2, 3, 4, 5];

// Example of map: Doubling each number in the array
const doubledNumbers = numbers.map(num => num * 2);
console.log("Mapped array (doubled):", doubledNumbers);

// Example of reduce: Summing all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Reduced sum:", sum);

// Example of filter: Filtering even numbers from the array
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Filtered even numbers:", evenNumbers);

// Example of split: Splitting a string into an array of substrings
const sentence = "Hello, world! This is a sample sentence.";
const words = sentence.split(' ');
console.log("Split sentence into words:", words);

// Example of forEach: Printing each number in the array
console.log("Printing each number using forEach:");
numbers.forEach(num => console.log(num));

// Example of join: Joining array elements into a string
const joinedSentence = words.join('-');
console.log("Joined words into a sentence:", joinedSentence);

// Example of some: Checking if any number in the array is greater than 4
const hasNumberGreaterThanFour = numbers.some(num => num > 4);
console.log("Does array have number greater than 4?", hasNumberGreaterThanFour);

// Example of every: Checking if all numbers in the array are less than 10
const allNumbersLessThanTen = numbers.every(num => num < 10);
console.log("Are all numbers less than 10?", allNumbersLessThanTen);

// Example of find: Finding the first number greater than 3 in the array
const firstNumberGreaterThanThree = numbers.find(num => num > 3);
console.log("First number greater than 3:", firstNumberGreaterThanThree);

// Example of includes: Checking if the array includes the number 5
const includesNumberFive = numbers.includes(5);
console.log("Does array include number 5?", includesNumberFive);

// Example of indexOf: Finding the index of number 4 in the array
const indexOfNumberFour = numbers.indexOf(4);
console.log("Index of number 4:", indexOfNumberFour);

// Example of sort: Sorting numbers in ascending order
const sortedNumbers = numbers.slice().sort((a, b) => a - b);
console.log("Sorted numbers in ascending order:", sortedNumbers);
