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
    const result = [];
    const numSet = new Set(nums);

    nums.forEach(num => {
        const revNum = parseInt(num.toString().split('').reverse().join(''), 10);
        if (numSet.has(revNum)) {
            result.push([num, revNum]);
        }
    });

    return result;
}

const nums = [12, 21, 33, 121, 345, 131, 456, 787];
console.log(solution(nums));

// solution 2:
// function solution(numbers) {
//     let pairs = [];
//     let seen = new Set();
//     let reverseMap = new Map();

//     for (let num of numbers) {
//         let reversed = parseInt(num.toString().split("").reverse().join(""));
//         reverseMap.set(num, reversed);
//     }

//     for (let num of numbers) {
//         if (seen.has(num)) continue;

//         let reversed = reverseMap.get(num);

//         if (num === reversed) {
//             let count = numbers.filter((n) => n === num).length;
//             for (let i = 0; i < count; i++) {
//                 pairs.push([num, num]);
//             }
//         } else if (numbers.includes(reversed)) {
//             let countOriginal = numbers.filter((n) => n === num).length;
//             let countReversed = numbers.filter((n) => n === reversed).length;
//             let pairCount = Math.min(countOriginal, countReversed);

//             for (let i = 0; i < pairCount; i++) {
//                 pairs.push([num, reversed]);
//                 pairs.push([reversed, num]);
//             }
//         }

//         seen.add(num);
//         seen.add(reversed);
//     }

//     return pairs;
// }


// You are given an array of n integers, where n ranges from 2 to 200, inclusive. The elements in the array range from -200 to 200, inclusive. Your task is to return an array where each element is the sum of a pair composed of an element and its 'opposite' element. By 'opposite', we mean that in an array of n elements, the first and last elements are paired, the second and second-to-last elements are paired, and so on. If the array is of odd length, the middle element pairs with itself. The method should handle both positive and negative integers and be capable of dealing with an odd number of elements in the list. For example, given an input array [1, 2, 3, 4, 5], your method should return [6, 6, 6]. This is because the first element 1 plus the last element 5 equals 6, the second element 2 plus the second-to-last element 4 equals 6, and the middle element 3 plus itself equals 6.

function oppositePairSums(arr) {
    const result = [];
    const n = arr.length;

    for (let i = 0; i < Math.ceil(n / 2); i++) {
        result.push(arr[i] + arr[n - 1 - i]);
    }

    return result;
}

let arr = [-200, -100, -50, 2, 5, 150, 200]
console.log(oppositePairSums(arr))
