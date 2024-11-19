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