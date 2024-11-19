// You are given an input array consisting of n integers ranging from 0 to 100, inclusive, where n represents the length of the array. Your task is to write a function that returns a new array of strings. Each string should consist of two elements joined by a space: an element from the input array paired with its geometrical mean with the 'opposite' element. The 'opposite' element of any element in the array is defined as the element at the corresponding position from the end of the array. Assume that the geometrical mean of two numbers, a and b, is calculated as: Math.sqrt(a*b). If the length of the array, n, is odd, the middle element is considered to be its own 'opposite'.
function solution(numbers) {
    // TODO: implement this function
    let list = [];
    let n = numbers.length;
    
    for(i = 0; i < n; i++){
        let oppositeIndex = n - i - 1;
        let geoMean = Math.sqrt(numbers[i] * numbers[oppositeIndex]).toFixed(2);
        list.push(numbers[i] + " " + geoMean);
    }
    return list
}

let numbers = [1,2,3,4,5,6,6,7,8,9,45,46,56,78,90]
console.log(solution(numbers));

// reverse counterpart assignment:
// You are provided with a list of n integers, where n ranges from 2 to 200, inclusive. The task is to return a list of pairs, each containing an integer and its reverse counterpart. In this context, the reverse counterpart of a number is the number with its digits reversed. For example, the reverse counterpart of 123 is 321.You must iterate through the list to find the reverse counterpart for each integer. If this reversed number exists in the list, create a pair with the original number and its reverse counterpart. If not, skip it. Your output should be a list of pairs with the original integers and their reverse counterparts. The integers in the given list will range from 10 to 9999, inclusive, and each integer in the list is unique. Note: The reverse counterpart of a single digit number is the same number. For numbers that result in leading zeros when reversed (e.g., 100 becomes 001, which is 1), consider only the integer value (i.e., 1). It's guaranteed that the original list will not contain integers with leading zeros. For example, for numbers = {12, 21, 34, 43, 56, 65}, the output should be solution(numbers) = {{12, 21}, {21, 12}, {34, 43}, {43, 34}, {56, 65}, {65, 56}}.

function solution(nums) {
    let pairs = []; // Store pairs
    let seen = new Set(); // Track processed numbers

    // Count occurrences of each number
    let countMap = nums.reduce((map, num) => {
        map[num] = (map[num] || 0) + 1;
        return map;
    }, {});

    for (let num of nums) {
        if (seen.has(num)) 
            continue; // Skip already processed numbers

        let reversed = parseInt(num.toString().split("").reverse().join(""));

        if (num === reversed) {
            // Palindrome: add as many times as it appears
            for (let i = 0; i < countMap[num]; i++) {
                pairs.push([num, reversed]);
            }
        } else if (nums.includes(reversed)) {
            // Add pairs respecting occurrences
            let count = Math.min(countMap[num] || 0, countMap[reversed] || 0);
            for (let i = 0; i < count; i++) {
                pairs.push([num, reversed]);
                pairs.push([reversed, num]);
            }
        }

        // Mark both numbers as processed
        seen.add(num);
        seen.add(reversed);
    }

    return pairs;
}

let nums = [12, 21, 33, 121, 345, 131, 456, 787];
console.log(solution(nums));

