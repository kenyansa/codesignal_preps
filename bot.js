// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, 
// and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, 
// they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.
// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return 
// the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

function matrixElementsSum(matrix) {
    var h = matrix.length;
    var l = matrix[0].length;
    for(var i = 0; i<h; i++){
        for(var j=0; j<l; j++){
            if(matrix[i][j]==0 && typeof matrix[i+1] !== 'undefined') matrix[i+1][j]=0;
        }
    }
    return arrSum(matrix);
}

const arrSum = array =>
    array.reduce(
        (sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1),
        0
    );