// Question:
// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// solution(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// solution(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

function solution(sequence) {
    let count = 0;
    let index = -1;

    // Find the number of violations and the index of the first violation
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            count++;
            index = i;
            if (count > 1) return false;
        }
    }

    // If no violations are found, the sequence is already strictly increasing
    if (count === 0) return true;

    // Check if removing the violating element or the previous element results in a strictly increasing sequence
    if (index === 0 || index === sequence.length - 2) return true;
    if (sequence[index - 1] < sequence[index + 1] || sequence[index] < sequence[index + 2]) return true;

    return false;
}