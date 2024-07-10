// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].
function solution(inputArray) {
    if (inputArray.length === 0) {
      return []; // Return an empty array if the input array is empty
    }
  
    // Step 1: Find the maximum length of the strings in the array
    const maxLength = inputArray.reduce((max, str) => Math.max(max, str.length), 0);
  
    // Step 2: Filter the array to include only the strings with the maximum length
    return inputArray.filter(str => str.length === maxLength);
  }
  
  // Example usage:
  const inputArray = ["aba", "aa", "ad", "vcd", "aba", "Justine"]
  const longestStrings = solution(inputArray);
  console.log(longestStrings);
  

  // Given two strings, find the number of common characters between them.
// Example: For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3. Strings have 3 common characters - 2 "a"s and 1 "c".
function countUniqueSimilarCharacters(s1, s2) {
  const charCountMap1 = createCharCountMap(s1);
  const charCountMap2 = createCharCountMap(s2);

  // Initialize the count of common characters
  let commonCharCount = 0;

  // Iterate through the first map and check for common characters
  for (let char in charCountMap1) {
      if (charCountMap2[char]) {
          // Add the minimum count of the common character from both maps
          commonCharCount += Math.min(charCountMap1[char], charCountMap2[char]);
      }
  }

  return commonCharCount;
}
// helper function
function createCharCountMap(str) {
  const charCountMap = {};
  for (let char of str) {
      if (charCountMap[char]) {
          charCountMap[char]++;
      } else {
          charCountMap[char] = 1;
      }
  }
  return charCountMap;
}