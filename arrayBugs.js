function solution(a) {

    var indexOfMinimum = -1;
    var minimalSum = Number.MAX_VALUE;
  
    for (var i = 0; i < a.length; i++) {
      var sum = 0;
      for (var j = 0; j < a.length; j++) {
        sum += Math.abs(a[j] - a[i]);
      }
      if (sum < minimalSum) {
        minimalSum = sum;
        indexOfMinimum = i;
      }
    }
  
    return a[indexOfMinimum];
  }
  
//   Given a sorted array of integers a, your task is to determine which element 
// of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:

// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)