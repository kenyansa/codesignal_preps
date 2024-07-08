// question: Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.
function solution(statues) {
    // Find the minimum and maximum values in the array
    const minStatue = Math.min(...statues);
    const maxStatue = Math.max(...statues);

    // Calculate the number of statues needed to have a continuous sequence
    const totalStatuesNeeded = maxStatue - minStatue + 1;

    // Calculate the number of additional statues needed
    const additionalStatues = totalStatuesNeeded - statues.length;

    return additionalStatues;
}

// Example usage
const statues = [6, 2, 3, 8];
console.log(solution(statues)); // Output: 3
